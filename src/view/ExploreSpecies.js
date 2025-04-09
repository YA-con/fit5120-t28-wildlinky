import React, { useRef, useState, useEffect } from 'react'
import styles from './ExploreSpecies.module.css'
import { Select, Input } from 'antd'
import {
    SearchOutlined
} from '@ant-design/icons'
import LineChart from '../components/LineChart'
import MapBox from '../components/MapBox'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


const ExploreSpecies = () => {
    const pdfRef = useRef()
    const query = useRef({
        postcode: '',
        species_id: 1
    })
    const region = useRef({ species_id: 1 })
    
    const [info, setInfo] = useState({})
    const [points, setPoints] = useState([])
    const [charts, setCharts] = useState([])
    const [, forceUpdate] = useState()

    useEffect(() => {
        handleGetSpeciesInfo()
        handleGetChartData()
    }, [])

    // choose species
    const handleChooseSpecies = (species_id) => {
        query.current.species_id = species_id

        handleGetSpeciesInfo()
    }

    const handleChangeValue = (e) => {
        query.current.postcode = e.target.value
        forceUpdate({})
    }

    // get species info
    const handleGetSpeciesInfo = async () => {
        let str = `?postcode=${ query.current.postcode }&species_id=${ query.current.species_id }`

        try {
            const resp = await (await fetch('https://fit5120-t28-wildlinky.onrender.com/api/species-filtered-locations' + str)).json()
            
            setInfo(resp.species_info)
            setPoints(resp.result)
        } catch (e) {
            console.log('error', e)
        }

    }

    // choose region
    const handleChooseRegion = async (species_id) => {
        region.current.species_id = species_id
        handleGetChartData()
    }

    // get chart data
    const handleGetChartData = async () => {

        try {
            const resp = await (await fetch('https://fit5120-t28-wildlinky.onrender.com/api/species-locations/timeseries?species_id=' + region.current.species_id)).json()
            
            setCharts(resp)
        } catch (e) {
            console.log('error', e)
        }
    }

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
            {/* <section className={styles.findBox}>
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
            </section> */}
            <section className='f40 f_weight mt-64 mb-32'>Discover Their Habitat Zones</section>
            <section className='flex'>
                <section className='flex-wid mr-20'>
                    <section className='items-center'>
                        <Input
                            className={styles.formWrap}
                            suffix={<SearchOutlined onClick={handleGetSpeciesInfo} />}
                            placeholder='Input POSTCODE in VIC'
                            value={query.current.postcode}
                            onChange={handleChangeValue}
                        ></Input>
                        <Select
                            className={styles.formWrap}
                            placeholder="SELECT SPECIES"
                            value={query.current.species_id}
                            onChange={handleChooseSpecies}
                            options={[
                                {
                                    value: 1,
                                    label: 'Helmeted Honeyeater'
                                }, {
                                    value: 2,
                                    label: 'Leadbeater’s Possum'
                                }, {
                                    value: 3,
                                    label: 'Southern Greater Glider'
                                }, {
                                    value: 4,
                                    label: 'Brush-tailed Rock-wallaby'
                                }
                            ]}
                        ></Select>
                    </section>
                    <section className={styles.card}>
                        {
                            info.name && (
                                <>
                                    <img alt='img' src={ info.image_url } />
                                    <div className={styles.cartTitle}>{info.name}</div>
                                    <div className='f20'>Status: {info.epbcstatus}</div>
                                    <div className='f20'>State: {info.state}</div>
                                    <div className='f20'>Habitat: {info.eco_type}</div>
                                    <div className='f20'>Main Threats:</div>
                                    <ul>
                                        <li>{info.threats}</li>
                                        <li>{info.description }</li>
                                    </ul>
                                </>
                            )
                        }
                    </section>
                    <section className={styles.cardBtn}>Read More</section>
                </section>
                <section className={styles.mapbox}>
                    <MapBox points={ points } />
                </section>
            </section>

            <section className={styles.pointerWrap}>
                <div className='f40 f_weight'>Track Population Trends Over Time</div>
                <div className='justify-end mb-32'>
                    {/* <div className={styles.regionBtn}>By Region</div> */}
                    <Select
                            className={styles.formWrap}
                            placeholder="SELECT SPECIES"
                            value={region.current.species_id}
                            onChange={handleChooseRegion}
                            options={[
                                {
                                    value: 1,
                                    label: 'Helmeted Honeyeater'
                                }, {
                                    value: 2,
                                    label: 'Leadbeater’s Possum'
                                }, {
                                    value: 3,
                                    label: 'Southern Greater Glider'
                                }, {
                                    value: 4,
                                    label: 'Brush-tailed Rock-wallaby'
                                }
                            ]}
                        ></Select>
                </div>
                <div className={styles.charts} ref={pdfRef}>
                    <LineChart values={charts} />
                </div>
                <div className='justify-end mt-64'>
                    <div className={styles.exportBtn} onClick={handleExportChart}>Export</div>
                </div>
            </section>
        </main>
    )
}

export default ExploreSpecies