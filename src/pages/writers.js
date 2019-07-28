import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const Writers = ({ data }) => {
  const writers = data.allContentfulWriter.edges;
  return (
    <Layout>
      <SEO title="Writers" />
      <h1>{"Список писателей. Добавляются из админки CONTENTFUL"}</h1>
      <div className="writers">
        {writers.map(({ node: writer }) => (
          <div key={writer.id}>
            <Link to={`/writer/${writer.slug}`}>{writer.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">На главную</Link>
      </div>
    </Layout>
  );
};
export default Writers;
export const query = graphql`
  query WritersPageQuery {
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
  }
`;