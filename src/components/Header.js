import React, { Component } from "react"
import { NavLink } from "react-router-dom"

// import styles
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={"row"+" "+styles.componentStyle}>
            <div className="col-lg-2 col-md-2 col-sm-1">
            </div>
            <div className="col-lg-7 col-md-7s col-sm-6">
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a 
                        className={styles.urlLink+" "+"navbar-brand"}
                        href="/" 
                        id="urlLink"
                    >
                        Url Shortener
                    </a>
                    
                </nav>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3" style={{padding:"20px"}}>
                <h6 style={{color:"white",}}>
                    <NavLink to="/" activeClassName="active-link" exact>Home | </NavLink>
                    {/* <NavLink to="/UrlDetails" activeClassName="active-link" >UrlDetails | </NavLink> */}
                    <NavLink to="/urlList" activeClassName="active-link">UrlList </NavLink>
                </h6>
            </div>
            <hr/>
        </div>
    )
}

// now export the created Component
export default Header