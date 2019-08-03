import React from "react";
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import Layout from "../components/layout";
import Image from "../components/image";


const IndexPage = () => (
  <I18n>
    {t => (
      <Layout>
        <div className="home">
          <h1>Team 8</h1>
          <p>culture-portal Alpha</p>
          <div>
            <div
              style={{
                maxWidth: `300px`,
                margin: "0 auto 1.45rem"
              }}
            >
              <Image />
              <p>{t('description')}</p>
            </div>
          </div>
        </div>
      </Layout>
    )}
  </I18n>
);
export default withI18next()(IndexPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
