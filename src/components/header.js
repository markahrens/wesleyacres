import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav>
      <Link to="history">
        History
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
