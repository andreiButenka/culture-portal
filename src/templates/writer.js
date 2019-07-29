import React from "react";
import { graphql } from "gatsby";
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';

import Layout from "../components/layout";
import SEO from "../components/seo";
import Video from "../components/video";
import MapComponent from '../components/map';

const Writer = ({ data }) => {
  const { title, body, image, videoId, locations: { internal: { content: locationsJSON }}} = data.contentfulWriter;
  const locationsObj = JSON.parse(locationsJSON);
  const locationsArray = Object.values(locationsObj);
  console.log(data.contentfulWriter);
  return (
    <I18n>
      {t => (
        <Layout>
          <SEO title={title} />
          <div className="writer">
            <h1>{title}</h1>
            <img alt={title} src={image.file.url} />
            <p className="body-text">{body.body}</p>
            <p>{t('description')}</p>
            <Video videoId={videoId}/>
            <MapComponent locations={locationsArray}/>
            <Link to="/writers/">{t('Writers')}</Link><br/>
            <Link to="/">{t('Go back to the homepage')}</Link>
          </div>
        </Layout>
      )}
    </I18n>
  );
};

export default withI18next()(Writer);

export const pageQuery = graphql`
  query($slug: String!, $lng: String!) {
    contentfulWriter(slug: { eq: $slug }) {
      title
      slug
      body {
        body
      }
      image {
        file {
          url
        }
      }
      videoId
      locations {
        internal {
          content
          description
          ignoreType
          mediaType
        }
      }
    }
    locales: allLocale(filter: {lng: {eq: $lng }, ns: {eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;