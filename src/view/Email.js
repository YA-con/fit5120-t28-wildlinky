import React, { useState } from 'react';
import styles from './Email.module.css';

const issueOptions = [
    'Logging',
    'Bushfires',
    'Land Clearing',
    'Urban Expansion',
    'Agricultural Expansion'
];

const Email = () => {
    const [selectedIssue, setSelectedIssue] = useState('');
    const [message, setMessage] = useState('');
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const allowEdit = selectedIssue !== '';

    const generateEmail = async (issue) => {
        setLoading(true);
    
        try {
            const response = await fetch('http://localhost:5001/api/generate-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ issue })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setMessage(data.email);
            } else {
                console.error("[Backend Error]", data); // 🔥 Print full backend error
                setMessage(`⚠️ Backend error: ${data.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error("[Connection Error]", error); // 🔥 Print full connection error
            setMessage("⚠️ Backend connection failed. Please check server.");
        } finally {
            setLoading(false);
        }
    };
    

    const handleSelect = async (value) => {
        setSelectedIssue(value);
        if (value) {
            await generateEmail(value);
            setCopied(false);
        } else {
            setMessage('');
            setCopied(false);
        }
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
        if (window.confirm('Are you sure you want to clear the message?')) {
            setSelectedIssue('');
            setMessage('');
            setCopied(false);
        }
    };

    return (
        <main className={styles.contailer}>
            <div className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <h1>Turn Your Frustration Into Action.</h1>
                    <p>Find the right words to speak for the forests — backed by facts, policies, and a clear message.</p>
                </div>
            </div>

            <div className={styles.container}>
                <h1 className={styles.headerTitle}>Draft Your Advocacy Email</h1>
                <section className={styles.flexLayout}>
                    <div className={styles.left}>
                        <h2 className={styles.subTitle}>Select an Issue:</h2>
                        <select
                            className={styles.selectBox}
                            value={selectedIssue}
                            onChange={(e) => handleSelect(e.target.value)}
                        >
                            <option value="">Select an issue</option>
                            {issueOptions.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>

                        {!allowEdit && (
                            <p className={styles.note}>Please choose an issue to begin drafting your message.</p>
                        )}
                        <textarea
                            className={styles.textarea}
                            value={loading ? "✍️ Generating email, please wait..." : message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={!allowEdit || loading}
                        />
                        <button className={styles.clearBtn} onClick={handleClear}>
                            Clear template
                        </button>
                    </div>

                    <div className={styles.right}>
                        <h2 className={styles.subTitle}>Live Preview</h2>
                        <div className={styles.previewBox}>
                            {loading ? "✍️ Generating..." : message}
                        </div>
                        <button
                            className={styles.copyBtn}
                            onClick={handleCopy}
                            disabled={!allowEdit || loading}
                        >
                            {copied ? 'Copied!' : 'Copy to Clipboard'}
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Email;
