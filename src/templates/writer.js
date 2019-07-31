import React from "react";
import { graphql } from "gatsby";
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';

import Layout from "../components/layout";
import Video from "../components/video";
import MapComponent from '../components/map';
import Gallery from '../components/gallery';
import TimeLine from '../components/timeline';
import Works from '../components/workslist';

const Writer = ({ data, lng }) => {
  const { titleRu, titleBy, titleEn, bodyRu, bodyBy, bodyEn, image, videoId, locations, galleryPictures, timeLineRu, timeLineBy, timeLineEn, worksRu, worksBy, worksEn } = data.contentfulWriter;
  let locationsArray = [];
  if (locations) {
    const { internal: { content: locationsJSON }} = locations;
    const locationsObj = JSON.parse(locationsJSON);
    locationsArray = Object.values(locationsObj);
  }
  
  const content = {};

  switch(lng) {
    case 'ru':
        content.title = titleRu;
        content.body = bodyRu.bodyRu;
        content.timeLine = timeLineRu;
        content.works = worksRu;
      break;
    case 'by':
        content.title = titleBy;
        content.body = bodyBy.bodyBy;
        content.timeLine = timeLineBy;
        content.works = worksBy;
      break;
    case 'en':
        content.title = titleEn;
        content.body = bodyEn.bodyEn;
        content.timeLine = timeLineEn;
        content.works = worksEn;
      break;
    default:
      content.title = titleRu;
      content.body = bodyRu.bodyRu;
      content.timeLine = timeLineRu;
      content.works = worksRu;
    }

  return (
    <I18n>
      {t => (
        <Layout>
          <div className="writer">
            <h1>{content.title}</h1>
            <img alt={content.title} src={image.file.url} />
            <p className="body-text">{content.body}</p>
            <p>{t('description')}</p>
            <h2>{t('worksList')}</h2>
            <Works works={content.works}/>
            <Gallery galleryPictures={galleryPictures}/>
            <Video videoId={videoId}/>
            <h2>{t('biography')}</h2>
            <TimeLine timeLine={content.timeLine}/>
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
      titleRu
      titleBy
      titleEn
      slug
      bodyRu {
        bodyRu
      }
      bodyBy {
        bodyBy
      }
      bodyEn {
        bodyEn
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
      timeLineRu {
        node {
          key
          period
          action
        }
      }
      timeLineBy {
        node {
          key
          period
          action
        }
      }
      timeLineEn {
        node {
          key
          period
          action
        }
      }
      worksRu {
        node {
          work
          period
        }
      }
      worksBy {
        node {
          work
          period
        }
      }
      worksEn {
        node {
          work
          period
        }
      }
    }
    locales: allLocale(filter: {lng: {eq: $lng }, ns: {eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;