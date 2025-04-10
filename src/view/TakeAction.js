import React from 'react'
import styles from './TakeAction.module.css'

const TakeAction = () => {
    return (
        <main className={styles.contailer}>
            <section className={styles.banner}>
                <div className={styles.mask}></div>
                <div className={styles.bannerTxtBox}>
                Small Actions. Big Impact. Start Helping Wildlife Today.
                </div>
                <div className={styles.bannerTxt}>Explore simple everyday habits, join local efforts, and test your wildlife impact knowledge. Your journey starts here.</div>
            </section>
            <div className={styles.title}>Things You Can Do</div>
            <div className={styles.card}>
                <div>Small actions can create big changes. Here's how you can help:</div>
                <ul>
                    <li>🧼 Use eco-friendly products</li>
                    <li>♻️ Recycle and reduce single-use plastics</li>
                    <li>🌳 Plant native trees or support local reforestation</li>
                    <li>🚶 Walk or cycle instead of driving</li>
                    <li>🐾 Keep pets away from sensitive bushland</li>
                    <li>📢 Spread the word about endangered species</li>
                </ul>
                <div>Every step counts toward a healthier planet.</div>
            </div>
            <div className={styles.title}>Things You Can Do</div>
            <div className={styles.card}>
                <div>Small actions can create big changes. Here's how you can help:Small actions can create big changes. Here's how you can helpSmall actions can create big changes. Here's how you can helpSmall actions can create big changes. Here's how you can helpSmall actions can create big changes. Here's how you can helpSmall actions can create big changes. Here's how you can helpSmall actions can create big changes. Here's how you can help</div>
                <div className={ styles.clickBtn}>Filed Btn</div>
            </div>
        </main>
    )
}

export default TakeAction