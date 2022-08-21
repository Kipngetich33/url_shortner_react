import React from "react"
import { Link, useRouteMatch, Route } from "react-router-dom"

// import styles
import styles from "./commonStyles.module.css"

// import child componentents
import SinglePage from "./SinglePage"

const UrlDetails = () => {
  const { url, path } = useRouteMatch()

  return <div className={styles.body} >
      <h1>Url Details Page</h1>
      <ul>
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
        <Route path={`${path}/:slug`}>
          <SinglePage />
        </Route>
      </ul>
  </div>
}

export default UrlDetails