import React from "react";
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import Layout from "../components/layout";

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
  },
  media: {
    height: 200,
  },
});

const IndexPage = ({ data, lng }) => {
  const classes = useStyles();

  const writers = data.allContentfulWriter.edges;
  const defineWriter = writers.find(el => el.node.authotOfTheDay === true);

  const { titleRu, titleBy, titleEn, bodyRu, bodyBy, bodyEn } = defineWriter.node;

  const writer = {};

  switch(lng) {
    case 'ru':
      writer.title = titleRu;
      writer.body = bodyRu.bodyRu;
      break;
    case 'by':
      writer.title = titleBy;
      writer.body = bodyBy.bodyBy;
      break;
    case 'en':
      writer.title = titleEn;
      writer.body = bodyEn.bodyEn;
      break;
    default:
      writer.title = titleRu;
      writer.body = bodyRu.bodyRu;
      break;
  }

  return (
    <I18n>
      {t => (
        <Layout>
          <div className="home">
            <h1>Team 8</h1>
            <p>culture-portal Alpha</p>
            <div>
              <p>{t('WriterOfTheDay')}</p>
                <Link to={`/writer/${defineWriter.node.slug}`}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={defineWriter.node.image.file.url}
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="h2"> 
                            {writer.title}
                          </Typography> 
                          <Typography variant="body2" color="textSecondary" component="p">
                            {writer.body}
                          </Typography>
                      </CardContent>
                    </CardActionArea>
                    </Card>
                  </Link>
            </div>
          </div>
        </Layout>
      )}
    </I18n>
  )

};
export default withI18next()(IndexPage);

export const query = graphql`
  query WritersOfTheDay($lng: String!) {
    allContentfulWriter(limit: 1000) {
      edges {
        node {
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
          authotOfTheDay
        }
      }
    }
    locales: allLocale(filter: {lng: {eq: $lng }, ns: {eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
