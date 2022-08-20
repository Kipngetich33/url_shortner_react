import React, { Component } from "react"
// import styles
import styles from "./Footer.module.css"

const Footer = () => {

    return (
        <div className = {styles.centerAlign} >
            <nav className = {styles.footerNav}>
                <p>Kipngetich Ngeno @2022</p>
            </nav>
        </div>
    )
}

// now export the created Component
export default Footer