import React from "react";
import { graphql } from "gatsby";
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';

import Layout from "../components/layout";

const Writers = ({ data }) => {
  const writers = data.allContentfulWriter.edges;
  return (
    <I18n>
      {t => (
        <Layout>
          <h1>{t('WritersList')}</h1>
          <div className="writers">
            {writers.map(({ node: writer }) => (
              <div key={writer.id}>
                <Link to={`/writer/${writer.slug}`}>{writer.title}</Link>
              </div>
            ))}
            <span className="mgBtm__24" />
            <p>{t('description')}</p>
            <Link to="/">{t('Go back to the homepage')}</Link>
          </div>
        </Layout>
      )}
    </I18n>
  );
};

export default withI18next()(Writers);

export const query = graphql`
  query WritersPageQuery($lng: String!) {
    allContentfulWriter(limit: 1000) {
      edges {
        node {
          id
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
        }
      }
    }
    locales: allLocale(filter: {lng: {eq: $lng }, ns: {eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;