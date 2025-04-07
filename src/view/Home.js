import React, {  } from 'react'
import { Carousel } from 'antd';
import styles from './Home.module.css'

const Home = () => {
    

    return (
        <main>
            <Carousel autoplay autoplaySpeed={10000} dotPosition="bottom" infinite>
                <div className={styles.carousel}>
                    <img className={styles.carouselImg} src='https://s3-alpha-sig.figma.com/img/cabf/fe8d/c53a0182f79fb3c8524ad8b8256d5a1e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ACQQywfnwpIFCPY7PVP26E-4rSMUaZg-IEFJtG9aPrYXz7q3TfYb-632IYxavGb3ACHMHIg5L0y-U7suV~pdtZDwM7ZS8SfI-Qjrc~MT1LnrTCcGivsZzayL~mcVa5BR1oMGLDc52ln4K~U51re072BWC9-nvMjTQ25F70NrIts4uEHR9UkS2a3aYN68RMuRB313OOTCyUNL6W5342LpFK-3HpSCyV36CBcWthMay24NkaOhlEHyAwW6iwlmVyDaadNWnLyTcIqu~PxXlxiKyixdcjsGhNh7-Iz3bVgm9WdrXDmCf1JkZzpx7lRwF18aZDgcjFW-kLEOyoV~s1vsFg__' alt='carousel' />
                    <p className={styles.carouselTxt}>By 2050, the Koala May Be Just a Memory.</p>
                    <button>Read More</button>
                </div>
                <div className={styles.carousel}>
                    <img className={styles.carouselImg} src='https://s3-alpha-sig.figma.com/img/cabf/fe8d/c53a0182f79fb3c8524ad8b8256d5a1e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ACQQywfnwpIFCPY7PVP26E-4rSMUaZg-IEFJtG9aPrYXz7q3TfYb-632IYxavGb3ACHMHIg5L0y-U7suV~pdtZDwM7ZS8SfI-Qjrc~MT1LnrTCcGivsZzayL~mcVa5BR1oMGLDc52ln4K~U51re072BWC9-nvMjTQ25F70NrIts4uEHR9UkS2a3aYN68RMuRB313OOTCyUNL6W5342LpFK-3HpSCyV36CBcWthMay24NkaOhlEHyAwW6iwlmVyDaadNWnLyTcIqu~PxXlxiKyixdcjsGhNh7-Iz3bVgm9WdrXDmCf1JkZzpx7lRwF18aZDgcjFW-kLEOyoV~s1vsFg__' alt='carousel' />
                    <p className={styles.carouselTxt}>By 2050, the Koala May Be Just a Memory.</p>
                    <button>Read More</button>
                </div>
            </Carousel>

            {/* lear more */}
            <section className={styles.learMore}>
                <div className={styles.learMoreBox}>
                    <span>We are committed to protecting Australia’s unique biodiversity.</span>
                    <button>Learn More</button>
                </div>
            </section>

            <div className={styles.insights}>Key Biodiversity Insights</div>
            <div className={`items-center ${ styles.insightsTxt }`}>
                <span className='color_9d2a f24 f_weight'>1,900+</span>
                <span className='f16 ml-4 f24'>species in Australia are listed as threatened or endangered.</span>
            </div>
            <div className={`items-center ${ styles.insightsTxt }`}>
                <span className='color_9d2a f24 f_weight'>13%</span>
                <span className='f16 ml-4 f24'>of native forest cover has been lost since 2000.</span>
            </div>
            <div className={`items-center ${ styles.insightsTxt }`}>
                <span className='color_9d2a f24 f_weight'>1%</span>
                <span className='f16 ml-4 f24'>of land holds over</span>
                <span className='color_9d2a f24 f_weight'>85%</span>
                <span className='f16 ml-4 f24'>of biodiversity in some regions.</span>
            </div>

            <section className={`flex-wrap color_f f24 f_weight ${styles.biodiversity}`}>
                <div>
                    <div>Freshwater Fish</div>
                    <div>50%</div>
                    <img alt='img' src='https://s3-alpha-sig.figma.com/img/2c18/07cf/24275ceb7892a787f1f8d25fe0ed449b?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qAbT6EQ5l~DdUBngmiJ80ux8U5jmO7pNbQbtRYKAjNB2nMV2kn0blGYb3LVS6wgAwqdLH1f0k9-WPHkVOIeTCc37JQ25EbOis3CvghWrJg33gw3o1EiC0lZGxLWM8bqmA-fYP4NdZnxV-LKMi-8hjyyjNerz06QMmvcznr70prexwL6fTbGoBK1Itg7hbzJEwOyRNqkj4VKjBl2FutEjW6jtOzql~nVbXheQ~wt4ZxCdlEJLePd0kXXHPqhLI2knbXgR1n~Xih2nlRYI5e34GPlRG-JbmZ5lvM32ykPQC9CEARDE4seUtrcex8F7wV843Ka1lXJGQvWzTwxF1eQh4Q__' />
                </div>
                <div>
                    <div>Frogs</div>
                    <div>38%</div>
                    <img alt='img' src='https://s3-alpha-sig.figma.com/img/2c18/07cf/24275ceb7892a787f1f8d25fe0ed449b?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qAbT6EQ5l~DdUBngmiJ80ux8U5jmO7pNbQbtRYKAjNB2nMV2kn0blGYb3LVS6wgAwqdLH1f0k9-WPHkVOIeTCc37JQ25EbOis3CvghWrJg33gw3o1EiC0lZGxLWM8bqmA-fYP4NdZnxV-LKMi-8hjyyjNerz06QMmvcznr70prexwL6fTbGoBK1Itg7hbzJEwOyRNqkj4VKjBl2FutEjW6jtOzql~nVbXheQ~wt4ZxCdlEJLePd0kXXHPqhLI2knbXgR1n~Xih2nlRYI5e34GPlRG-JbmZ5lvM32ykPQC9CEARDE4seUtrcex8F7wV843Ka1lXJGQvWzTwxF1eQh4Q__' />
                </div>
                <div>
                    <div>Mammals</div>
                    <div>29%</div>
                    <img alt='img' src='https://s3-alpha-sig.figma.com/img/b783/0240/6a506fe6b4d2ced96125b6b1ace1dce9?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ROW~LzVimyOy-JYBMrkLm9KaiDk~u1M~YtJa3V0iQ5maZ-TmtdzEWjJgZr-jF01UIIY2rAWYho2MHLrPf7XvnJ~EFIXOZ3UGc3GNNW8wrMBNRNcvNrogCwjKJi9fYBQHymToeVGSC9IFik3CcgTpDkkZgw0Kzl5xB6L4lzecZ2DqFmDNmvUCR2hUOMVloNxq7xpeQfncSTJ1JiOvH4bn6YWO~T~mSm1T32D~Dzo5LJsD0GEZ8BtMS56f47p5puqLom1r0HTGjng7mL8RjTZZKq5jNaIMZrO00ium~TNm2cE1VegsMyMo1uv5LRNMya0uoJJA-Av0W8y~5q0uGNt54Q__' />
                </div>
                <div>
                    <div>Reptiles</div>
                    <div>21%</div>
                    <img alt='img' src='https://s3-alpha-sig.figma.com/img/d2bb/5103/b9ed33c0ec4a966b2a536fd6d2cf363e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VehOgWA2RxkhMLYCj9RwBBXXYjkIFVG5jY9toZXsifZbLI6LaDyRXLuJg2mpFtv7pqhhxmY-AakP81QhEjeeiOww7ZFcAFik5M0PH~OC5B7qLuu4Rk~Foc6gkUsxQvtuml9naZH~M2QfgTayAa8ChDc49wiWLrShtPbwn-jT1Ou8UvZSvBtuXvpvRv0aByFuxUhiGShTmiWgN52G~gHuxvpQJO8i5Piz2XTr0HK7SeMjqtPl4hn0jsNcNZ~fW1lULkpDRW2S34Denx8VVz7nq7G47i23btBO2XoQAbR83M2xXHElknhiA-VYCkezSFxOllBR7qzl4tFGsD-w1lDCIw__' />
                </div>
                <div>
                    <div>Birds</div>
                    <div>18%</div>
                </div>
            </section>

            <section className={styles.insights}>Quick Access</section>
            
            <section className={`items-center ${styles.quick}`}>
                <div className={`${ styles.quick1 } ${ styles.nearby }`}>
                    <div className={styles.box}>
                        <div>Local Endangered Species</div>
                    </div>
                    <div className={styles.desc}>Enter your location to find threatened species nearby.</div>
                    <div className={styles.searchNow}>Search Now</div>
                </div>
                <div className={`${ styles.quick1 } ${ styles.act }`}>
                    <div className={styles.box}>
                        <div>Local Endangered Species</div>
                    </div>
                    <div className={styles.desc}>Enter your location to find threatened species nearby.</div>
                    <div className={styles.searchNow}>Act Now</div>
                </div>
            </section>
            <section className={`items-center ${styles.quick}`}>
                <div className={`${ styles.quick1 } ${ styles.write }`}>
                    <div className={styles.box}>
                        <div>Write the Email</div>
                    </div>
                    <div className={styles.desc}>Enter your location to find threatened species nearby.</div>
                    <div className={styles.searchNow}>Write Now</div>
                </div>
                <div className={`${ styles.quick1 } ${ styles.view }`}>
                    <div className={styles.box}>
                        <div>Local Endangered Species</div>
                    </div>
                    <div className={styles.desc}>Enter your location to find threatened species nearby.</div>
                    <div className={styles.searchNow}>Search Now</div>
                </div>
            </section>

            <section className={styles.insights}>Stories of Hope & Action</section>
            <section className={`items-center ${styles.quick}`}>
                <div className={`${ styles.quick1 } ${ styles.nearby }`}>
                    <div className={styles.box}>
                        <div>Local Endangered Species</div>
                    </div>
                    <div className={styles.desc}>Enter your location to find threatened species nearby.</div>
                </div>
                <div className={`${ styles.quick1 } ${ styles.act }`}>
                    <div className={styles.box}>
                        <div>Local Endangered Species</div>
                    </div>
                    <div className={styles.desc}>Enter your location to find threatened species nearby.</div>
                </div>
            </section>
            <section>
                <div className={styles.searchNow}>See All Stories</div>
            </section>

            <section className={styles.other}>
                <div className='items-center'>
                    <img alt='img' src='https://s3-alpha-sig.figma.com/img/f59c/1ee0/e52d2e22e614688db66a2419f7ed096f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V0eBAKO4qgfEw5UkE7-vkX4CoRyALr9wUpoeBqdttBJS0aprvfb0XR1mIQKbVSODscMvKPxpT0ixClwjMw905zuD57QRrIfmD7fU3zFjXiljn8eyDMuh1SSY61aMsK71XPRIUQvo4TYPwGMT4cH~qLGKF0us-EWH29enzuTMA-lyUe56~ARwnfMPREISAB8GS8xo0sSiG28~2eAxSf2cgchsEAziH8a~WHiBMPz~ft4R00gu9ZgnVkY7Bou7YfpVXjJcgO-a3-J-pgH4e4UeN08uFzr1Lg4MYDn53SP3jzE1Xpha2ObMP1sibxLALHL-L4GR0xFU8VRuR91kO6qkDA__' />
                    <span className='f28 ml-20'>Atlas of Living Australia</span>
                </div>
                <div className='items-center'>
                    <img alt='img' src='https://s3-alpha-sig.figma.com/img/2cb8/07ad/03153179cfe78be9e9496ba8eb04e58a?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gqen7upmQbSp9J3hGs-IdYUJFQQ4mWtuLB5SvAWTMDt2PC0fjla1D-qsuGfd0onYpaYyYJek55SILqAGFWTkDZJSpYvH8Xyxd28mx25pG9~yGtrXbdNhseb5q0kCNJF3ZhMrSllLJH4bTpdoMTTYUC1nEj1RTT9sVX-2mlxpY6KFHqvghwwhZED~RnD~T9EYlEyi2D7jJXrFaN6RjVDk8HkDdFSAlZAb3aNa0oVNpIbm45kLhWSBdYUOO-8oJAELw9bIBNg83UygH5itIoBEpPirUKs9lg7mkhN53ED~NE0~Yvoi6-YyI3Et-GmAAwnPWlfbiUzeru60AhRWIjrRaw__' />
                    <span className='f28 ml-20'>WIRES</span>
                </div>
                <div className='items-center'>
                    <span className='f28 mr-20'>Bush Heritage Australia</span>
                    <img alt='img' src='https://s3-alpha-sig.figma.com/img/b358/2692/888d63c43de8772fff1701dd1b320e3c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B22GMlK6Dpm6K01VnFpFKQehj2AlQAjjwW8-bPjP5umJscCz0gXcktY-K35g5fqYz341bOXmCN-7LqxeF8K4a9TlwhUtwiylLCxGeSEh9fwe5korgzw8E~1SFjUQgSpbBc7V8NPCIB2KMcaZWpjwFsNJQggzLqDPIrKmtNoM9w-m3-madkExN3Qz6-5P1Bx2P42RhaCo3Dn4sY0yV-D5QRSXZmpj7HSHRVbiApGYQcgpk4rX1zEKNXc8VhLX5npkZdNTIfC43TIR0b6zQAFMwtu38OFO7qGfhYMbwqKA50m6~U5CD65~8pnd0g13dT8HGDhtE8nDcUE-Qbi5dv8vAA__' />
                </div>
                <div className='items-center'>
                    <div className={styles.otherBtn}>Become a Partner</div>
                </div>
            </section>

            <section className={styles.footer}>
                <div className='items-center'>
                    <span>About</span>
                    <span>Contact</span>
                    <span>Privacy</span>
                    <span>FAQ</span>
                </div>
                <div>© 2025 Protecting Life on Land | Based in Australia | Designed for SDG 15 Impact</div>
            </section>
        </main>
    )
}

export default Home