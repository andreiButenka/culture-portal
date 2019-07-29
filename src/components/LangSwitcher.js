import React from 'react';
import { Language } from 'gatsby-plugin-i18next';

import './LangSwitcher.css';

const Switcher = ({ changeLng, lng, availableLngs }) => (
  <ul className="nav-lang-chooser">
    {availableLngs.map(value => (
      <li key={value} className="nav-lang-item">
        <button
          style={{
            textDecoration: value === lng ? 'underline' : 'none',
          }}
          className="btn btn-link"
          onClick={() => changeLng(value)}
        >
          {value}
        </button>
      </li>
    ))}
  </ul>
);

export default props => (
  <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
);
