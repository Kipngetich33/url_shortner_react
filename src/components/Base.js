import React, { Component } from "react"
import { Route, Switch, Link, useRouteMatch } from "react-router-dom"

// import child components
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer"
import UrlDetails from "../pages/UrlDetails.js";
import Error from "../pages/Error.js"
import UrlList from "../pages/UrlList.js"
import Redirect from "../pages/Redirect.js"

// import styles
import styles from "./Base.module.css"


class Base extends React.Component {
    // render the root div
    render() {
        return (
          <div className={styles.body}>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/urlDetails/:slug" >
                    <UrlDetails/>
                </Route>
                <Route path="/urlList">
                <UrlList/>
                </Route>
                <Route path="/Error">
                    <Error />
                </Route>
                <Route path="/*" >
                    <Redirect currentPath = {this.state} />
                </Route>
            </Switch> 
            <Footer/>
          </div>
        )
    }
}

// now export the created Component
export default Base