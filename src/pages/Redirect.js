import React, { Component } from "react"
import { withRouter } from 'react-router-dom';

// import styles
import styles from "./commonStyles.module.css"

class Redirect extends React.Component {
    // render the root div
    render() {
        // get the slug i.e shortcode
        const  slug  = this.props.match.params[0]
        console.log("slug",slug)
        // now check for url for shortcode from backend
        // const longUrl = "https://google.com";
        const longUrl = null
        if(longUrl){
            window.location.href = longUrl
        }else{
            window.location.href = "/Error" 
        }
        
        return (
            <div className={styles.body}>
                ...Redirecting
            </div>
        )
    }
}

// now export the created Component
export default withRouter(Redirect)