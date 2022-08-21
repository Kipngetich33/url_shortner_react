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
    state = {
        baseUrls:{
            backend_base_url:'http://127.0.0.1:3000',
            frontend_base_url:'http://127.0.0.1:3001',
            url_apis_path:"api/v1/urls"
        }
    }
    render() {
        return (
          <div className={styles.body}>
            <Header baseUrls = {this.state.baseUrls}/>
            <Switch>
                <Route exact path="/">
                    <Main baseUrls = {this.state.baseUrls} />
                </Route>
                <Route path="/urlDetails/:slug" >
                    <UrlDetails baseUrls = {this.state.baseUrls}/>
                </Route>
                <Route path="/urlList">
                    <UrlList baseUrls = {this.state.baseUrls}/>
                </Route>
                <Route path="/Error">
                    <Error baseUrls = {this.state.baseUrls}/>
                </Route>
                <Route path="/*" >
                    <Redirect currentPath = {this.state} baseUrls = {this.state.baseUrls} />
                </Route>
            </Switch> 
            <Footer baseUrls = {this.state.baseUrls}/>
          </div>
        )
    }
}

// now export the created Component
export default Base