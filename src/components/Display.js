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
        const { backend_base_url, frontend_base_url, url_apis_path } = this.props.baseUrls
        const complete_url = `${backend_base_url}/${url_apis_path}`
        axios.post(complete_url,
            {
                http_url: this.state.url,
            }
        ).then(res => {
            console.log("response",res.data)
            // now handles response here
            window.location.href = `${frontend_base_url}/UrlDetails/${res.data.short_code}`
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