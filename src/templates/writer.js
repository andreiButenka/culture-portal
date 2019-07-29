import React from "react";
import { graphql } from "gatsby";
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';

import Layout from "../components/layout";
import Video from "../components/video";
import MapComponent from '../components/map';
import Gallery from '../components/gallery';

const Writer = ({ data }) => {
  const { title, body, image, videoId, locations, galleryPictures } = data.contentfulWriter;
  let locationsArray = [];
  if (locations) {
    const { internal: { content: locationsJSON }} = locations;
    const locationsObj = JSON.parse(locationsJSON);
    locationsArray = Object.values(locationsObj);
  }

  console.log(data.contentfulWriter);
  return (
    <I18n>
      {t => (
        <Layout>
          <div className="writer">
            <h1>{title}</h1>
            <img alt={title} src={image.file.url} />
            <p className="body-text">{body.body}</p>
            <p>{t('description')}</p>
            <Gallery galleryPictures={galleryPictures}/>
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
      galleryPictures {
        file {
          url
          fileName
          contentType
        }
        description
      }
    }
    locales: allLocale(filter: {lng: {eq: $lng }, ns: {eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;