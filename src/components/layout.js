/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { translate } from 'react-i18next';
import { Head } from 'gatsby-plugin-i18next';

import Header from "./header"
import "./layout.css"

const Layout = ({ children, t }) => (
    <>
      <Head hreflang>
        <title>{t('Site title')}</title>
        <meta name="description" content="Sample" />
        <meta name="keywords" content="Writers of Belarus, the Rolling Scope, CodeJam Culture Portal" />
      </Head>
      <Header siteTitle={t('Site title')} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default translate()(Layout);
