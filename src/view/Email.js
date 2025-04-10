import React, { useState } from 'react';
import styles from './Email.module.css';

const speciesOptions = [
    'Leadbeater’s Possum',
    'Greater Glider',
    'Regent Honeyeater',
    'Orange-bellied Parrot',
    'Eastern Curlew',
    'Growling Grass Frog',
    'Spotted Tree Frog',
    'Plains-wanderer',
    'Swift Parrot',
    'Mountain Pygmy-possum'
];

const issueOptions = [
    'Logging',
    'Bushfires',
    'Land Clearing',
    'Urban Expansion',
    'Agricultural Expansion'
];

const emailTemplates = {
    "Leadbeater’s Possum": `As a concerned citizen, I urge stronger protection for the Leadbeater’s Possum...`,
    "Greater Glider": `The Greater Glider is under threat due to habitat fragmentation and logging...`,
    "Logging": `Logging of native forests continues to degrade Victoria’s biodiversity...`,
    "Bushfires": `With increasingly intense bushfires, we must strengthen forest resilience...`,
};

const Email = () => {
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [selectedIssue, setSelectedIssue] = useState('');
    const [message, setMessage] = useState('');
    const [copied, setCopied] = useState(false);

    const allowEdit = selectedSpecies || selectedIssue;

    const handleSelect = (type, value) => {
      if (type === 'species') setSelectedSpecies(value);
      if (type === 'issue') setSelectedIssue(value);

      const template = emailTemplates[value] || '';
        setMessage(template);
        setCopied(false);
    };

    const handleCopy = () => {
        if (!message.trim()) {
            alert('Please generate or write a message before copying.');
            return;
        }

        navigator.clipboard.writeText(message);
        setCopied(true);
    };

    const handleClear = () => {
        if (window.confirm('Are you sure to delete template content?')) {
            setSelectedSpecies('');
            setSelectedIssue('');
            setMessage('');
            setCopied(false);
        }
    };

    return (
        <main className={styles.contailer}>
            <section className={styles.banner}>
                <div className={styles.mask}></div>
                <div className={styles.bannerTxtBox}>
                    Speak Up for Wildlife.
                </div>
                <div className={styles.bannerTxt}>
                    Write a message to protect Victoria’s threatened species and forests. Every voice counts.
                </div>
            </section>

            <div className={styles.container}>

                <h1 className={styles.headerTitle}>Draft Your Advocacy Email</h1>
                <section className={styles.flexLayout}>
                    <div className={styles.left}>
                        <h2 className={styles.subTitle}>Select a Species or Issue:</h2>
                        <select
                            className={styles.selectBox}
                            value={selectedSpecies}
                            onChange={(e) => handleSelect('species', e.target.value)}
                        >
                            <option value="">Select a species</option>
                            {speciesOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>

                        <select
                            className={styles.selectBox}
                            value={selectedIssue}
                            onChange={(e) => handleSelect('issue', e.target.value)}
                        >
                            <option value="">Select an issue</option>
                            {issueOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>

                        {!allowEdit && (
                            <p className={styles.note}>Please choose a topic to begin drafting your message.</p>
                        )}
                        <textarea
                            className={styles.textarea}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={!allowEdit}
                        />
                        <button className={styles.clearBtn} onClick={handleClear}>
                            Clear template
                        </button>
                    </div>

                    <div className={styles.right}>
                        <h2 className={styles.subTitle}>Live Preview</h2>
                        <div className={styles.previewBox}>{message}</div>
                        <button className={styles.copyBtn} onClick={handleCopy}>
                            {copied ? 'Copied!' : 'Copy to Clipboard'}
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Email;