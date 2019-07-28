import React from "react";
import { Link, graphql } from "gatsby";
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
    <Layout>
      <SEO title={title} />
      <div className="writer">
        <h1>{title}</h1>
        <img alt={title} src={image.file.url} />
        <p className="body-text">{body.body}</p>
        <Video videoId={videoId}/>
        <MapComponent locations={locationsArray}/>
        <Link to="/writers">Посмотреть других писателей</Link>
        <Link to="/">На главную</Link>
      </div>
    </Layout>
  );
};
export default Writer;
export const pageQuery = graphql`
  query($slug: String!) {
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
  }
`;