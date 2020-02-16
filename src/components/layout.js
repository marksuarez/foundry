/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Header2 from "./header2"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header2 />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Secret Foundry
        </footer>
      </div>
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
