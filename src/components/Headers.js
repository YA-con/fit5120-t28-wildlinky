import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Drawer } from 'antd'
import {
    CloseOutlined,
    ArrowRightOutlined
} from '@ant-design/icons';
import styles from './Headers.module.css'


const Headers = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false)
    const [classNames] = useState({
        body: 'drawer-body',
        header: 'drawer-body drawer-header'
    })

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleJumpHome = async () => {
        navigate('/')
    }


    return (
        <>
            <header className={`items-center ${styles.headers}`}>
                <div className={styles.logo_wrap} onClick={handleJumpHome}>
                    <img className='mlr-auto' alt='logo' src='https://s3-alpha-sig.figma.com/img/873f/cfe7/629f0c8bf206f97a5368ef63f714774e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DJdRwuZOEY2DOCNt8bq1bEz8pGztgnGPLXammBT6Czk2v~g4SnIMrpCSdbmfAjEsz8OaHJieQa2XW~EtJwQt35hyrzzYBjX86dJtgNUoMz1tSJTalFgXLaTTpdyxf-AaXzxc86swMmL~BG4VKM9J7Scu2ENYn5WqI1k8fgNkhLo6wZbFjOPJZKOjqNTCqtccBaL6KsX2q~SORziY4d8fSZAggGwz5cReVOaLrqHDdRZ71n263VcSN9ds~JLPvvRpZiYBd8lHEyLlsFz9v7LxfyuF4E~E~x6n34kuR4c0gibbhLgbPvrO-QtstJ1jDJx5yUWok4r01WNKOkhByE-czg__'></img>
                    WildLinky
                </div>
                <input className={`ml-auto ${styles.search}`} />
                <svg onClick={showDrawer} xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#fff" className={styles.nav_btn} viewBox="0 0 16 16">
                    <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z"/>
                </svg>

                
            </header>
            <Drawer
                title=""
                placement="right"
                onClose={onClose}
                open={open}
                key="right"
                classNames={classNames}
                closeIcon={<CloseOutlined className={styles.closeIcon} />}
            >
                <Link to="/" onClick={onClose} className={`border-bottom justify-between ${styles.drawerRow}`}>
                    <div >
                        Home
                    </div>
                    <ArrowRightOutlined />
                </Link>
                <Link to="/explore-species" onClick={onClose} className={`border-bottom justify-between ${styles.drawerRow}`}>
                    <div >
                        Explore Species
                    </div>
                    <ArrowRightOutlined />
                </Link>
                <Link to="/take-action" onClick={onClose} className={`border-bottom justify-between ${styles.drawerRow}`}>
                    <div >
                        Take Action
                    </div>
                    <ArrowRightOutlined />
                </Link>
                <Link to="/stories" onClick={onClose} className={`border-bottom justify-between ${styles.drawerRow}`}>
                    <div >
                        Stories
                    </div>
                    <ArrowRightOutlined />
                </Link>
                <Link to="/email" onClick={onClose} className={`border-bottom justify-between ${styles.drawerRow}`}>
                    <div >
                        Email
                    </div>
                    <ArrowRightOutlined />
                </Link>
            </Drawer>
        </>
    )
}

export default Headers