import React, { Component } from "react"
// import styles
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={"row"+" "+styles.componentStyle}>
            <div className="col-lg-1 col-md-2 col-sm-1">
            </div>
            <div className="col-lg-10 col-md-8 col-sm-10">
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a 
                        className={styles.urlLink+" "+"navbar-brand"}
                        href="/" 
                        id="urlLink"
                    >
                        Url Shortener
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse"+styles.floatRight} id="navbarText" >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item" >
                            <a className={"nav-link"} href="/" id="homeMenuId" >Home </a>
                            </li>
                            <li className="nav-item" >
                            <a className="nav-link" href="" id="urlDetails" >Url Details</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-1"></div>
        </div>
    )
}

// now export the created Component
export default Header