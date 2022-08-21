import React, { Component } from "react"
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// import styles
import styles from "./commonStyles.module.css"

const getLongUrl = (slug,baseUrls) => {

    const { backend_base_url, frontend_base_url, url_apis_path } = baseUrls
    const complete_url = `${backend_base_url}/${url_apis_path}/${slug}`
    axios.get(complete_url)
      .then(res => {
        console.log("response",res.data)
        // now handles response here
        if(res.status == 200 && res.data.status){
            window.location.href = res.data.url
        }else{
            window.location.href = `${frontend_base_url}/Error`
        }
    })
}

class Redirect extends React.Component {
    // render the root div
    render() {
        // get the slug i.e shortcode
        const  slug  = this.props.match.params[0]
        // now check for url for shortcode from backend
        const longUrl = getLongUrl(slug,this.props.baseUrls)
        return (
            <div className={styles.body}>
                Loading ...
            </div>
        )
    }
}

// now export the created Component
export default withRouter(Redirect)
