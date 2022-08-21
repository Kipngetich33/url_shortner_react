import React, { Component } from "react"
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// import styles
import styles from "./commonStyles.module.css"


class UrlDetails extends React.Component {

    // define root component state here
    state = {
      url:"N/A",
      short_url:"N/A",
      short_code:"N/A"
    };
    
    // render the root div
    render() {

      const slug  = this.props.match.params['slug']
      

      const backend_base_url = 'http://127.0.0.1:3000'
      const frontend_base_url = 'http://127.0.0.1:3001'
      const show_api = "api/v1/urls"
      const complete_url = `${backend_base_url}/${show_api}/${slug}`
      console.log(complete_url)
      axios.get(complete_url)
          .then(res => {
            console.log("response",res.data)
            // set url, short_code in state
            if(res.data.status){
              this.setState({
                url:res.data.url,
                short_url:`${frontend_base_url}/${res.data.short_code}`,
                short_code:res.data.short_code
              })
            }
      })

      return (
        <div className={styles.body}>
          <h5>Url: <a href={this.state.url}>
            {this.state.url}</a>
          </h5>
          <h5>Short Url: 
            <a href={this.state.short_url}>
              {this.state.short_url}
            </a>
          </h5>
          <h5>Short Code: 
              {this.state.short_code}
          </h5>
        </div>
      )
    }
}

// now export the created Component
export default withRouter(UrlDetails)