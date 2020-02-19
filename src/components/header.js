import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header className = "Header">
    <div className = "HeaderGroup">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className = "NavigationGroup">
      <Link to="/">Typefaces</Link>
      <Link to="/">Info</Link>
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
