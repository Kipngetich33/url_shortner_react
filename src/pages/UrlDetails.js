import React, { Component } from "react"
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// import styles
import styles from "./commonStyles.module.css"
import urlDetailStyles from "./urlDetails.module.css"


class UrlDetails extends React.Component {

    // define root component state here
    state = {
      url:"N/A",
      short_url:"N/A",
      short_code:"N/A",
      url_details:"N/A"
    }

    componentDidMount() {
      // define other variable
      const slug  = this.props.match.params['slug']
      const { backend_base_url, frontend_base_url, url_apis_path } = this.props.baseUrls
      const complete_url = `${backend_base_url}/${url_apis_path}/${slug}`

      axios.get(complete_url)
        .then(res => {
        // set url, short_code in state
        if(res.data.status){
          this.setState({
            url:res.data.url,
            short_url:`${frontend_base_url}/${res.data.short_code}`,
            short_url:`${frontend_base_url}/${res.data.short_code}`,
            short_code: res.data.short_code,
            url_details:`${frontend_base_url}/UrlDetails/${res.data.short_code}`,
            no_of_click:"",
            total_clicks:"",
            share_percentage:"",

          })
        }
      })
    }

    // render the root div
    render() {
      return (
          <div className={styles.body}>
            <div className={"row "+urlDetailStyles.headerRow} >
              <div className="col-md-3"></div>
              <div className="col-md-6">
                  <div className = {urlDetailStyles.urlDetailsTitle}>
                      <p className={urlDetailStyles.titleStyle}>Url Details & Stats</p>
                  </div>
              </div>
              <div className="col-md-3"></div>
            </div>

            <div className={"row "+urlDetailStyles.detailsRow} >
              <div className="col-md-1"></div>
              <div className="col-md-5" >
                  <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-default">Original Url</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                      value = {this.state.url}/>
                  </div>

                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-default">Shortened Url</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                      value = {this.state.short_url} />
                  </div>

                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-default">Shortcode</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" 
                      value = {this.state.short_code} />
                  </div>

                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-default">No of Clicks</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                      value = {this.state.no_of_clicks}/>
                  </div>

                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-default">No. of clicks for all Urls</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                      value = {this.state.total_clicks}/>
                  </div>

                  <div className="input-group mb-3">
                      <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroup-sizing-default">Share Percentage</span>
                      </div>
                      <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                      value = {this.state.share_percentage}/>
                  </div>

              </div>
              <div className="col-md-3">          
            </div>
          </div>
          </div>
      )
    }
}

// now export the created Component
export default withRouter(UrlDetails)