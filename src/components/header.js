import { Link } from 'gatsby-plugin-i18next';
import PropTypes from "prop-types"
import React from "react"
import LangSwitcher from './language/LangSwitcher';
import './header.css';

const Header = ({ siteTitle, writersList, goBack }) => (
  <header
    style={{
      background: `rgba(32,32,32,0.9)`,
      margin: `0 auto`,
      maxWidth: 960,
    }}
  >
    <LangSwitcher />
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className="nav">
        <Link to="/">
          {goBack}
        </Link>        
        <Link to="/writers/">
          {writersList}
        </Link>
      </div>  
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  writersList: PropTypes.string,
  goBack: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  writersList: ``,
  goBack: ``,
}

export default Header
