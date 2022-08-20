import React, { Component } from "react"
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
                        <form method="post" enctype="multipart/form-data" className={styles.formStyle}>
                            <label className={styles.inputLabel}>Enter Url</label><br/>
                            <input 
                                className = {styles.inputFieldStyles}name="next" 
                                value=""
                                placeholder="Enter url"
                            />
                            <input type="submit" className={"btn btn-primary btn-sm "+styles.submitFieldStyles} value="Lets Go!" />
                            
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