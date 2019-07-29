import { Link } from 'gatsby-plugin-i18next';
import { I18n } from 'react-i18next';
import PropTypes from "prop-types"
import React from "react"
import LangSwitcher from './LangSwitcher';

const Header = () => (
  <I18n>
    {t => (
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <LangSwitcher />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {t('Site title')}
            </Link>
          </h1>
        </div>
      </header>
    )}
  </I18n>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
