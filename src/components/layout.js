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

import Header from "./header";
import Footer from './footer/footer';
import "./layout.css"

const Layout = ({ children, t }) => (
    <>
      <Head hreflang>
        <title>{t('Site title')}</title>
        <meta name="description" content="Sample" />
        <meta name="keywords" content="Writers of Belarus, the Rolling Scope, CodeJam Culture Portal" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
      </Head>
      <Header siteTitle={t('Site title')} writersList={t('Go to writers list')} goBack={t('Go back to the homepage')}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default translate()(Layout);
