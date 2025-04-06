import React from 'react'
import styles from './Email.module.css'

const Email = () => {
    return (
        <main className={styles.container}>
            <div className={styles.headerTitle}>Draft Your Advocacy Email</div>
            <section className='flex'>
                <section className='flex-wid pr-20'>
                    <div className={styles.title}>Select a Species or Issue:</div>
                    <select className={styles.selectBox} placeholder='Orange-bellied Parrot'>
                        <option>Option</option>
                        <option>Option</option>
                        <option>Option</option>
                        <option>Option</option>
                    </select>
                    <select className={styles.selectBox} placeholder='Orange-bellied Parrot'>
                        <option>Option</option>
                        <option>Option</option>
                        <option>Option</option>
                        <option>Option</option>
                    </select>
                    <textarea className={styles.textarea}></textarea>
                    <div className={styles.desc}>Please choose a topic to begin drafting your message.</div>
                </section>
                <section className='flex-wid pl-20'>
                    <div className={styles.title}>Live Preview</div>
                    <textarea className={styles.uploader}>

                    </textarea>
                    <div className={styles.btn}>Copy to Clipboard</div>
                </section>
            </section>
        </main>
    )
}

export default Email