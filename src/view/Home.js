import React, {  } from 'react'
import { Carousel } from 'antd';
import styles from './Home.module.css'
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import nearbyImg from '../assets/local-species.jpg';
import actImg from '../assets/take-action.jpg';
import writeImg from '../assets/success-story.jpg';
import viewImg from '../assets/email-template.jpg';
import partner1 from '../assets/partner-atlas.png';
import partner2 from '../assets/partner-wires.png';
import partner3 from '../assets/partner-bush.png';
import forestLossChart from '../assets/forest-loss-chart.png';
import threatenedSpeciesChart from '../assets/threatened_species_chart.png';
import { useNavigate } from 'react-router-dom';
  
const Home = () => {

    const navigate = useNavigate();

    return (
        <main>
            <Carousel autoplay autoplaySpeed={10000} dotPosition="bottom" infinite>
                <div className={styles.carousel}>
                    <img className={styles.carouselImg} src={banner1} alt='carousel' />
                    <div className={styles.blurOverlay}></div>
                    <div className={styles.carouselContent}>
                    <p className={styles.carouselTxt}>Victoria is losing its forests faster than ever</p>
                    <button onClick={() => navigate('/home/forest')}>Read More</button>
                    </div>
                </div>
                <div className={styles.carousel}>
                    <img className={styles.carouselImg} src={banner2} alt='carousel' />
                    <div className={styles.blurOverlay}></div>
                    <div className={styles.carouselContent}>
                    <p className={styles.carouselTxt}>Forest Types in Victoria & Their Connection to Biodiversity Policies</p>
                    <button onClick={() => navigate('/home/biodiversity')}>Read More</button>
                    </div>
                </div>
            </Carousel>

            <section className={styles.quoteBox}>
                <p className={styles.quoteText}>
                    “Victoria has lost over 75% of its native vegetation due to agriculture, urban expansion, and logging. <br />
                    Yet, these forests are home to many of Australia’s most vulnerable species. <br />
                    Protecting what remains is not only vital for biodiversity—but for our future.” <br />
                    —Victoria Environmental Conservation Council
                </p>
                <p className={styles.quoteText}>
                    As forest cover continues to decline across Victoria, the impacts ripple across entire ecosystems — putting countless species at risk of extinction.
                </p>
                <p className={styles.quoteText}>
                    "Victoria has already lost 18 mammal species, 2 bird species, 1 snake, 3 freshwater fish, 6 invertebrates, <br />
                    and 51 plant species. Currently, approximately 2,000 species of plants, animals, and ecological communities in Victoria are considered to be threatened." <br />
                    —Department of Environment, Victoria
                </p>
            </section>

            <section className={styles.chartSection}>
                <h2 className={styles.chartTitle}>Tree Loss in Victoria (2001–2023)</h2>
                <img src={forestLossChart} alt="Forest Loss Chart" className={styles.chartImage} />
                <p className={styles.caption}>(Source: Global Forest Watch)</p>
                <div className={styles.narrowCard}>
                    <p className={styles.chartDesc}>
                    Over the past two decades, Victoria has lost 1.63 million hectares of tree cover —
                    a 25% decrease — leading to 505 million tonnes of CO₂ emissions.
                    </p>
                </div>
            </section>

            <section className={styles.chartSection}>
                <h2 className={styles.chartTitle}>Threatened Species in Victoria (2001–2024)</h2>
                <img src={threatenedSpeciesChart} alt="Threatened Species in Victoria (2001–2024)" className={styles.chartImage} />
                <p className={styles.caption}>(Source: Department of Energy, Environment and Climate Action, Victoria)</p>
                <div className={styles.narrowCard}>
                    <p className={styles.chartDesc}>
                    Victoria has seen a significant increase in threatened species over the past two decades. 
                    As of 2024, more than 140 new listings have been added to the threatened list in a single year, 
                    including animals, plants, and ecological communities — highlighting the ongoing biodiversity crisis in the state.
                    </p>
                </div>
            </section>

            <section className={styles.insights}>Take Action for Nature</section>
            
            <section className={styles.quickGrid}>
            {[
                {
                    img: nearbyImg,
                    title: 'Local Endangered Species',
                    desc: 'Enter your location to find threatened species nearby.',
                    btn: 'Search Now',
                    path: '/explore-species',
                },
                {
                    img: actImg,
                    title: 'Take Action',
                    desc: 'Get involved with practical steps and local opportunities.',
                    btn: 'Act Now',
                    path: '/take-action',
                },
                {
                    img: writeImg,
                    title: 'Read the Stories',
                    desc: 'Read success stories and meet Victoria’s forest heroes.',
                    btn: 'Read Now',
                    path: '/stories',
                },
                {
                    img: viewImg,
                    title: 'Write the Email Template',
                    desc: 'Use our ready-made email to raise your voice for Victoria’s endangered species.',
                    btn: 'Write Now',
                    path: '/email',
                },
            ].map((item, i) => (
                <div className={styles.quickCard} key={i}>
                    <img src={item.img} alt={item.title} className={styles.quickImg} />
                <div className={styles.quickTitle}>{item.title}</div>
                <div className={styles.quickDesc}>{item.desc}</div>
                    <div
                        className={styles.quickBtn}
                        onClick={() => navigate(item.path)}
                    >
                        {item.btn}
                    </div>
                </div>
            ))}
            </section>

            <section className={styles.partnersSection}>
                <h2 className={styles.partnerTitle}>Our Partners</h2>
                <div className={styles.partnerGrid}>
                    {[
                    { name: 'Atlas of Living Australia', img: partner1 },
                    { name: 'WIRES', img: partner2 },
                    { name: 'Bush Heritage Australia', img: partner3 }
                    ].map((partner, i) => (
                    <div key={i} className={styles.partnerCard}>
                        <img src={partner.img} alt={partner.name} />
                        <span>{partner.name}</span>
                    </div>
                    ))}
                </div>

                <div className={styles.partnerBtnWrapper}>
                    <div className={styles.otherBtn}>Become a Partner</div>
                </div>
            </section>

            <section className={styles.footer}>
            <div className="items-center">
                <span>About</span>
                <span>Contact</span>
                <span>Privacy</span>
                <span>FAQ</span>
            </div>
            <div>
                © 2025 Protecting Life on Land | Based in Australia | Designed for SDG 15 Impact
            </div>
            </section>
        </main>
    )
}

export default Home