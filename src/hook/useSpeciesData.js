import { useState, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';

export const useSpeciesData = (query) => {
  const [info, setInfo] = useState({});
  const [points, setPoints] = useState([]);
  const [charts, setCharts] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [loadingCharts, setLoadingCharts] = useState(false);
  const [error, setError] = useState(null);

  // 用于判断是否首次加载
  const isInitialMount = useRef(true);

  // 获取物种信息（含位置信息）的函数
  const fetchSpeciesInfo = async (q) => {
    setLoadingInfo(true);
    setError(null);

    if (q.species_id === 0) {
      // 选中 All Species 时，假设有效 species_id 分别为 1, 2, 3, 4
      try {
        const speciesArr = [1, 2, 3, 4];
        const responses = await Promise.all(
          speciesArr.map((id) => {
            const url = `https://fit5120-t28-wildlinky.onrender.com/api/species-filtered-locations?postcode=${encodeURIComponent(q.postcode)}&species_id=${id}`;
            return fetch(url).then((res) => res.json());
          })
        );
        // 将所有返回的 points 数据合并
        let aggregatedPoints = [];
        responses.forEach((resp) => {
          if (resp.result) {
            aggregatedPoints = aggregatedPoints.concat(resp.result);
          }
        });
        setPoints(aggregatedPoints);
        setInfo({}); // 没有单一物种信息
      } catch (err) {
        setError("Failed to fetch all species info");
        console.error(err);
      } finally {
        setLoadingInfo(false);
      }
      return;
    } else {
      // 针对特定物种的查询
      const str = `?postcode=${encodeURIComponent(q.postcode)}&species_id=${q.species_id}`;
      try {
        const res = await fetch(`https://fit5120-t28-wildlinky.onrender.com/api/species-filtered-locations${str}`);
        const data = await res.json();
        setInfo(data.species_info || {});
        setPoints(data.result || []);
      } catch (err) {
        setError("Failed to fetch species info");
        console.error(err);
      } finally {
        setLoadingInfo(false);
      }
    }
  };

  // 获取图表数据（仅依赖 species_id）
  const fetchChartData = async (species_id) => {
    setLoadingCharts(true);
    setError(null);
    try {
      const res = await fetch(`https://fit5120-t28-wildlinky.onrender.com/api/species-locations/timeseries?species_id=${species_id}`);
      const data = await res.json();
      setCharts(data);
    } catch (err) {
      setError("Failed to fetch chart data");
      console.error(err);
    } finally {
      setLoadingCharts(false);
    }
  };

  // 当 query 变化时发起防抖请求，但首次加载若 postcode 为空则不请求
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // 首次加载时若邮编为空则不发请求
      if (!query.postcode.trim()) return;
    }
    const debouncedHandler = debounce(() => {
      fetchSpeciesInfo(query);
    }, 300);
    debouncedHandler();
    return () => {
      if (debouncedHandler.cancel) debouncedHandler.cancel();
    };
  }, [query]);

  // 每当 species_id 或 postcode 变化时加载图表数据
  useEffect(() => {
    // 这里对图表请求做简单触发，具体业务可按需调整
    fetchChartData(query.species_id);
  }, [query.species_id, query.postcode]);

  return { info, points, charts, loadingInfo, loadingCharts, error };
};