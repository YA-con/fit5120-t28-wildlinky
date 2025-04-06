import React from 'react'
import styles from './Stories.module.css'

const Stories = () => {
    return (
        <main className={styles.container}>
            <section className={styles.banner}>
                <div className={styles.mask}></div>
                <div className={styles.bannerTxtBox}>
                Real People. Real Stories. Real Impact.
                </div>
                <div className={styles.bannerTxt}>Explore simple everyday habits, join local efforts, and test your wildlife impact knowledge. Your journey starts here.</div>
            </section>

            <div className={styles.title}>Things You Can Do</div>
            {/* <section className='items-center justify-center'>
                <div className={styles.card}>1</div>
                <div className={styles.card}>1</div>
                <div className={styles.card}>1</div>
            </section> */}
            <img alt='img' className={styles.testImg} src='https://s3-alpha-sig.figma.com/img/3730/904c/b9d0b6022fb2d405bfa8552a30ae53a9?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FLh-S2hAsX1m-0u5DztXpcHEqO5jvqA4fhn02IZULG9mJme2zSsJFpOceCg6EsevRG1ffQq6Qj9HWc17awYAD1Rdy79RIjnNshfo678DVUqO1eCq2GK3QsmZOo-Jg9GN8hSFCbcmcYscvh7f3XupU-PJXzvSJ2NZSxElytDsCWlY3QlK1RSNmKVrmqRMeQGQiQ76ey7xuTur1Rn~HtN29wL5VRhpj97bWMZahAC1zZNcLGoMoMmoHKkYFmcLl7T4CcrEkSoi-lpAbBxVHMr9K1ZAoxJHcsTtZ3TgVM5be~APgB1-WXXYzmA3ThUBc8h5T1O8xACYXXy~OsLkGxdM2A__' />
        </main>
    )
}

export default Stories