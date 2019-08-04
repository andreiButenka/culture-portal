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
import Team from "../components/team";

const useStyles = makeStyles({
  card: {
    maxWidth: 550,
    marginLeft: 'auto',
  },
  media: {
    height: 200,
  },
});

const IndexPage = ({ data, lng }) => {
  const classes = useStyles();

  const writers = data.allContentfulWriter.edges;
  const description = data.allContentfulDescription.edges[0];

  const defineWriter = writers.find(el => el.node.authotOfTheDay === true);
  const { descrTitleRu, descrTitleBy, descrTitleEn, descrBodyRu, descrBodyBy, descrBodyEn } = description.node;

  const { titleRu, titleBy, titleEn, bodyRu, bodyBy, bodyEn } = defineWriter.node;

  const writer = {};
  const descr = {};

  switch(lng) {
    case 'ru':
      writer.title = titleRu;
      writer.body = bodyRu.bodyRu;
      descr.title = descrTitleRu;
      descr.body = descrBodyRu.descrBodyRu;
      break;
    case 'by':
      writer.title = titleBy;
      writer.body = bodyBy.bodyBy;
      descr.title = descrTitleBy;
      descr.body = descrBodyBy.descrBodyBy;
      break;
    case 'en':
      writer.title = titleEn;
      writer.body = bodyEn.bodyEn;
      descr.title = descrTitleEn;
      descr.body = descrBodyEn.descrBodyEn;
      break;
    default:
      writer.title = titleRu;
      writer.body = bodyRu.bodyRu;
      descr.title = descrTitleRu;
      descr.body = descrBodyRu.descrBodyRu;
      break;
  }

  return (
    <I18n>
      {t => (
        <Layout>
          <div className="home">
            <div className="descr">
              <h2>{descr.title}</h2>
              <div>{descr.body}</div>
            </div>
            <div className="writerOfTheDay">
              <h2>{t('WriterOfTheDay')}</h2>
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
            <Team/>
          </div>
        </Layout>
      )}
    </I18n>
  )

};
export default withI18next()(IndexPage);

export const query = graphql`
  query MainPageQuery($lng: String!) {
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
    allContentfulDescription {
      edges {
        node {
          descrBodyBy {
            descrBodyBy
          }
          descrBodyEn {
            descrBodyEn
          }
          descrBodyRu {
            descrBodyRu
          }
          descrTitleBy
          descrTitleEn
          descrTitleRu
        }
      }
    } 
    locales: allLocale(filter: {lng: {eq: $lng }, ns: {eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
