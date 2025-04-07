import React, { useRef } from 'react'
import styles from './ExploreSpecies.module.css'
import { Select, Input } from 'antd'
import {
    SearchOutlined
} from '@ant-design/icons'
import LineChart from '../components/LineChart'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


const ExploreSpecies = () => {
    const pdfRef = useRef()

    const handleExportChart = () => {
        const input = pdfRef.current
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4')
            const imgProps = pdf.getImageProperties(imgData)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
            pdf.save('report.pdf')
        });

    }

    return (
        <main className={styles.contailer}>
            <section className={styles.banner}>
                <div className={styles.mask}></div>
                <div className={styles.bannerTxtBox}>
                    Discover Australia’s Threatened Wildlife — Right Where You Are
                </div>
                <div className={styles.bannerTxt}>
                    Search by location, explore interactive maps, and learn how each species is impacted — and how you can help.
                </div>
            </section>
            <section className={styles.findBox}>
                <section className={styles.title}>Find Endangered Wildlife Near You</section>
                <section className={`items-center`}>
                    <Select
                        className={styles.formWrap}
                        placeholder="SELECT POSTCODE"
                        options={[
                            {
                                value: '1',
                                label: 'option one'
                            }
                        ]}
                    ></Select>
                    <Select
                        className={styles.formWrap}
                        placeholder="SELECT STATUS"
                        options={[
                            {
                                value: '1',
                                label: 'option one'
                            }
                        ]}
                    ></Select>
                    <div className={styles.searchBtn}>Find Endangered Speices</div>
                </section>
                <section className={styles.searchCard}>
                    <div className="border-bottom ptb-12">
                        <div className='f16 f_weight'>Critically Endangered</div>
                        <div className='color_6 ptb-2 mt-3'>Eastern Barred Bandicoot</div>
                        <div className='color_6 ptb-2'>Swift Parrot</div>
                    </div>
                    <div className="border-bottom ptb-12">
                        <div className='f16 f_weight'>Endangered</div>
                        <div className='color_6 ptb-2 mt-3'>Southern Bent-wing Bat</div>
                    </div>
                    <div className="ptb-12">
                        <div className='f16 f_weight'>Vulnerable</div>
                        <div className='color_6 ptb-2 mt-3'>Powerful Owl</div>
                        <div className='color_6 ptb-2'>Striped Legless Lizard</div>
                    </div>
                </section>
            </section>
            <section className='f40 f_weight mt-64 mb-32'>Discover Their Habitat Zones</section>
            <section className='flex'>
                <section className='flex-wid mr-20'>
                    <Input
                        className={styles.formWrap}
                        suffix={<SearchOutlined />}
                    ></Input>
                    <section className={styles.card}>
                        <img alt='img' src='https://s3-alpha-sig.figma.com/img/cabf/fe8d/c53a0182f79fb3c8524ad8b8256d5a1e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jIoTopREffnQWAPHb~n6yd0Di8s-gMVCXKHQHepXfRiLCQwaCMor-6LVng0wUpXZhFYSyhSVSdTXjF~~cFpDYBUR1lhj1KNY8p69V7wXa6xBTjAn~QhLp1WOA4sZDP8mOgVysPeHwVXdjYA504sy0O1CDeIut6r1r3TKwufswIrojlw1e6zZyj8EP8Ax4EcgrYyVjzwndwRxpE7JOR9bG~MT1-xeaNf2zMf-u-u0LG8gtGD3wri1eu5qbrzywJUgfgBTuKaxvkDnZ~T7UiE1jmPApGZEZwYetIv8iwtx~5KdUkDHs6vfHG8TOibjopsOsG40R1VeQaGKdM8PHomoUA__' />
                        <div className={styles.cartTitle}>Koala</div>
                        <div className='f20'>Status: Vulnerable</div>
                        <div className='f20'>Habitat: Eucalyptus forests in QLD, NSW, VIC</div>
                        <div className='f20'>Main Threats:</div>
                        <ul>
                            <li>Habitat destruction from urban development</li>
                            <li>Bushfires and climate change</li>
                            <li>Disease (chlamydia), car collisions, dog attacks</li>
                        </ul>
                    </section>
                    <section className={styles.cardBtn}>Read More</section>
                </section>
                <section className={styles.mapbox}>
                    <img alt='mapbox' src='https://s3-alpha-sig.figma.com/img/cba1/1cf8/f11bcbc44cb526566887683ca0b7898b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWNy6lSfjhYlfBN~fNism3Rid8qgM-hgORA0P-G3ntAoXRw~hwYdJ9pzCaTK~dt14CwRqSoPwUMp8IXqi2-qdGV9f6Nlv0DR7gTlKFxnYgAyfgIxwn6u0bP-aV3Qab2o9EqsvICB-fNxoCgMtkA02-xO8xXvnHU-HiFPd4fHuXYvBL-sWLxUhnB3hB4qVjh5soG6bSqB13emhrqxS0V9pH3L6YpP9tTKBm7HNIEQQ7ESXgA~b2~9nULv1qrmA~45fcjLdlG0X32Yg19VzZrp6OU127-DsSxOh3cczrCCNa00B2I9vJV-XU4cfLGahk9551vbUGBiJj5wMc429QkKBA__'></img>
                </section>
            </section>

            <section className={styles.pointerWrap}>
                <div className='f40 f_weight'>Track Population Trends Over Time</div>
                <div className='justify-end mb-64'>
                    <div className={styles.regionBtn}>By Region</div>
                </div>
                <div className={styles.charts} ref={pdfRef}>
                    <LineChart />
                </div>
                <div className='justify-end mt-64'>
                    <div className={styles.exportBtn} onClick={handleExportChart}>Export</div>
                </div>
            </section>
        </main>
    )
}

export default ExploreSpecies