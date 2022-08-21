import React, { Component } from "react"
import axios from 'axios';

// import child components
import styles from "./Display.module.css"


class Display extends React.Component {
    // define the component's stat1e
    state = {
        url:''
    }

    onChange = (event) => {
        this.setState({
            url:event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.url);
        // check if url is already in database
        const backend_base_url = 'http://127.0.0.1:3000'
        const frontend_base_url = 'http://127.0.0.1:3001'
        const url_api = "api/v1/urls"
        const complete_url = `${backend_base_url}/${url_api}`
        axios.post(complete_url,
            {
                http_url: "https://medium.com/swlh/how-to-build-an-api-with-ruby-on-rails-28e27d47455a10",
                short_code: "xyz9"
            }
        ).then(res => {
            console.log("response",res.data)
            // now handles response here
            window.location.href = `${frontend_base_url}/UrlDetails`
            // if(res.data.status){
            //     window.location.href = res.data.url
            // }else{
            //     window.location.href = `${frontend_base_url}/Error`
            // }
        })

    };

    // render the root div
    render() {
        return (
            <div>
                <div className="row body">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className={styles.descriptionStyle}>
                            <p className={styles.actionParagraph}>
                                Make your urls shorter and monitor the number of clicks it gets ,it simpler than you think. Enter your url below !  
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className={"row "+styles.urlInputRow}  >
                    <div className="col-md-3"></div>
                    <div className={"col-md-6 "+styles.inputColumn}>
                        <form className={styles.formStyle} onSubmit={this.handleSubmit}>
                            <label className={styles.inputLabel}>Enter Url</label><br/>
                            <input 
                                className = {styles.inputFieldStyles}name="next" 
                                value={this.state.url}
                                placeholder="Enter url"
                                onChange={this.onChange}
                            />
                            <button className={"btn btn-primary btn-sm "+styles.submitFieldStyles}>
                                Lets Go!
                            </button>
                            
                        </form>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

// now export the created Component
export default Display