import React, {Component} from 'react';
import { graphql } from "gatsby";
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';
import SearchInput, {createFilter} from 'react-search-input';

import Layout from "../components/layout";
import "./writers.css";

class Writers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      writers: props.data.allContentfulWriter.edges,
    }
    
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render () {
    let KEYS_TO_FILTERS = [];
    switch (this.props.lng){
      case 'ru':
        KEYS_TO_FILTERS = ['node.titleRu', 'node.cityRu'];
        break;
      case 'by':
        KEYS_TO_FILTERS = ['node.titleBy', 'node.cityBy'];
        break;
      case 'en':
        KEYS_TO_FILTERS = ['node.titleEn', 'node.cityEn'];
        break;
      default:
        KEYS_TO_FILTERS = ['node.titleRu', 'node.cityRu'];
    }
    const writers = this.state.writers;
    const filteredWriters = writers.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    
    return (
      <I18n>
        {t => (
          <Layout>
            <h1 className="title">{t('WritersList')}</h1>
            <div className="writers">
            <SearchInput className="search-input" onChange={this.searchUpdated} 
            placeholder={t('searhPlaceHolder')} name="search-input"/>
            {
              filteredWriters.length > 0 ? this.showFilteredWriters(filteredWriters) : this.showNoMatchesMessage()
            }
            <span className="mgBtm__24" />
              <Link to="/">{t('Go back to the homepage')}</Link>
            </div>
          </Layout>
        )}
      </I18n>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  showNoMatchesMessage() {
    return  (
      <I18n>
        {t => (
          <div>{t('noMatchesSearch')}</div>
        )}
      </I18n>
    ) 
  }

  showFilteredWriters(filteredWriters) {
    return (filteredWriters.map(({ node: writer }) => {
      const content = {};
      switch (this.props.lng){
        case 'ru':
          content.title = writer.titleRu;
          break;
        case 'by':
          content.title = writer.titleBy;
          break;
        case 'en':
          content.title = writer.titleEn;
          break;
        default:
          content.title = writer.titleRu;
      }
      return (
        <div key={writer.id}>
          <Link className="writers-item" to={`/writer/${writer.slug}`}>{content.title}</Link>
        </div>
      )
    }))
  }
}

export default withI18next()(Writers);

export const query = graphql`
  query WritersPageQuery($lng: String!) {
    allContentfulWriter(limit: 1000) {
      edges {
        node {
          id
          titleRu
          titleBy
          titleEn
          slug
          cityRu
          cityBy
          cityEn
        }
      }
    }
    locales: allLocale(filter: {lng: {eq: $lng }, ns: {eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;