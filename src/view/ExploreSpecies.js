import React, { useState, useCallback } from 'react';
import styles from './ExploreSpecies.module.css';
import { Select, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import LineChart from '../components/LineChart';
import MapBox from '../components/MapBox';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSpeciesData } from '../hook/useSpeciesData';

const ExploreSpecies = () => {
  // 用 useState 管理查询条件
  const [query, setQuery] = useState({ postcode: '', species_id: 1 });

  // 使用自定义 Hook，根据 query 获取数据
  const { info, points, charts, loadingInfo, error } = useSpeciesData(query);

  // 当用户输入邮编时更新 query
  const handlePostcodeChange = useCallback((e) => {
    const postcode = e.target.value;
    setQuery((prev) => ({ ...prev, postcode }));
  }, []);

  // 当用户选择物种时更新 query
  const handleSpeciesChange = useCallback((species_id) => {
    setQuery((prev) => ({ ...prev, species_id }));
  }, []);

  // 导出图表为 PDF
  const handleExportChart = () => {
    const chartContainer = document.querySelector('#charts-container');
    html2canvas(chartContainer).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('report.pdf');
    });
  };

  return (
    <main className={styles.contailer}>
      {/* 顶部横幅 */}
      <section className={styles.banner}>
        <div className={styles.mask}></div>
        <div className={styles.bannerTxtBox}>
          Discover Australia’s Threatened Wildlife — Right Where You Are
        </div>
        <div className={styles.bannerTxt}>
          Search by location, explore interactive maps, and learn how each species is
          impacted — and how you can help.
        </div>
      </section>

      {/* 搜索区域 */}
      <section className={styles.findBox}>
        <section className={styles.title}>Find Endangered Wildlife Near You</section>
        <section className="items-center">
          <Input
            className={styles.formWrap}
            placeholder="Input POSTCODE in VIC"
            value={query.postcode}
            onChange={handlePostcodeChange}
            suffix={<SearchOutlined />}
          />
          <Select
            className={styles.formWrap}
            placeholder="SELECT SPECIES"
            value={query.species_id}
            onChange={handleSpeciesChange}
            options={[
              { value: 1, label: 'Helmeted Honeyeater' },
              { value: 2, label: 'Leadbeater’s Possum' },
              { value: 3, label: 'Southern Greater Glider' },
              { value: 4, label: 'Brush-tailed Rock-wallaby' },
            ]}
          />
        </section>
      </section>

      {/* 信息展示及地图 */}
      <section className="f40 f_weight mt-64 mb-32">Discover Their Habitat Zones</section>
      <section className="flex">
        <section className="flex-wid mr-20">
          <section className="items-center">
            <Input
              className={styles.formWrap}
              placeholder="Input POSTCODE in VIC"
              value={query.postcode}
              onChange={handlePostcodeChange}
              suffix={<SearchOutlined />}
            />
            <Select
              className={styles.formWrap}
              placeholder="SELECT SPECIES"
              value={query.species_id}
              onChange={handleSpeciesChange}
              options={[
                { value: 1, label: 'Helmeted Honeyeater' },
                { value: 2, label: 'Leadbeater’s Possum' },
                { value: 3, label: 'Southern Greater Glider' },
                { value: 4, label: 'Brush-tailed Rock-wallaby' },
              ]}
            />
          </section>
          <section className={styles.card}>
            {loadingInfo ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              info.name && (
                <>
                  <img alt="img" src={info.image_url} />
                  <div className={styles.cartTitle}>{info.name}</div>
                  <div className="f20">Status: {info.epbcstatus}</div>
                  <div className="f20">State: {info.state}</div>
                  <div className="f20">Habitat: {info.eco_type}</div>
                  <div className="f20">Main Threats:</div>
                  <ul>
                    <li>{info.threats}</li>
                    <li>{info.description}</li>
                  </ul>
                </>
              )
            )}
          </section>
          <section className={styles.cardBtn}>Read More</section>
        </section>
        <section className={styles.mapbox}
  style={{ position: 'relative' }} // 设置为相对定位，以便覆盖层绝对定位
>
  <MapBox points={points} />
  <div
    style={{
      position: 'absolute',
      top: '10px',       // 根据需要调整位置（上边距）
      right: '10px',     // 如需左上角，则用 left: '10px'
      zIndex: 1000,
      backgroundColor: 'rgba(255,255,255,0.9)',
      padding: '5px 10px',
      borderRadius: '5px',
      fontWeight: 'bold'
    }}
  >
    Count: {points.length}
  </div>
</section>
      </section>

      {/* 图表与导出区域 */}
      <section className={styles.pointerWrap}>
        <div className="f40 f_weight">Track Population Trends Over Time</div>
        <div className="justify-end mb-32">
          <Select
            className={styles.formWrap}
            placeholder="SELECT SPECIES"
            value={query.species_id}
            onChange={handleSpeciesChange}
            options={[
              { value: 1, label: 'Helmeted Honeyeater' },
              { value: 2, label: 'Leadbeater’s Possum' },
              { value: 3, label: 'Southern Greater Glider' },
              { value: 4, label: 'Brush-tailed Rock-wallaby' },
            ]}
          />
        </div>
        <div className={styles.charts} id="charts-container">
          <LineChart values={charts} />
        </div>
        <div className="justify-end mt-64">
          <div className={styles.exportBtn} onClick={handleExportChart}>
            Export
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExploreSpecies;