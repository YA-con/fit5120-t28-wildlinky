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
  
  const [query, setQuery] = useState({ postcode: '', species_id: 1 });

  
  const { info, points, charts, loadingInfo, error } = useSpeciesData(query);

  
  const handlePostcodeChange = useCallback((e) => {
    const postcode = e.target.value;
    setQuery((prev) => ({ ...prev, postcode }));
  }, []);

  
  const handleSpeciesChange = useCallback((species_id) => {
    setQuery((prev) => ({ ...prev, species_id }));
  }, []);

  
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
                style={{ position: 'relative' }} 
            >
            <MapBox points={points} />
            <div
                style={{
                position: 'absolute',
                top: '10px',      
                right: '10px',     
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
      {/* <section className={styles.pointerWrap}>
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
      </section> */}
    </main>
  );
};

export default ExploreSpecies;