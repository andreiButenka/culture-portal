import React, {Component} from 'react';
import { graphql } from "gatsby";
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';
import SearchInput, {createFilter} from 'react-search-input';

import Layout from "../components/layout";
import "./writers.css";

const KEYS_TO_FILTERS = ['node.title', 'node.city'];

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
    const writers = this.state.writers;
    const filteredWriters = writers.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    
    return (
      <I18n>
        {t => (
          <Layout>
            <h1>{t('WritersList')}</h1>
            <div className="writers">
            <SearchInput className="search-input" onChange={this.searchUpdated} 
            placeholder="Найди писателя по имени или по месту рождения" name="search-input"/>
            {
              filteredWriters.length > 0 ? this.showFilteredWriters(filteredWriters) : this.showNoMatchesMessage()
            }
            <span className="mgBtm__24" />
              <p>{t('description')}</p>
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
      <div>
        Извините, нет совпадений
      </div>
    ) 
  }

  showFilteredWriters(filteredWriters) {
    return (filteredWriters.map(({ node: writer }) => {
      return (
        <div key={writer.id}>
          <Link to={`/writer/${writer.slug}`}>{writer.title}</Link>
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
          title
          slug
          city
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