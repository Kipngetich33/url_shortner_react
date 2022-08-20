import React, { Component } from "react"
// import child components
import Header from "./Header.js"
import Display from "./Display.js";
import Footer from "./Footer"
// import styles
import styles from "./Main.module.css"


class Main extends React.Component {

    // define root component state here
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
    };
    // render the root div
    render() {
        return (
            <div className={"row"+" "+styles.body}>
                <Header/>
                <hr/>
                <Display/>
                <hr/>
                <Footer/>
            </div>
        )
    }
}

// now export the created Component
export default Main