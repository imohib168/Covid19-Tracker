import React from 'react'

import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            Made by <span className={style.name}>Mohib Ismail</span> 
        </div>
    )
}

export default Footer;