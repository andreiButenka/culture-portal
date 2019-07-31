import React from "react";
import { I18n } from 'react-i18next';
import './workslist.css';

const Works = ({ works }) => {
    return (
      <I18n>
      {t => (      
        <table id="works">
          <tr>
            <th>{t('workYear')}</th>
            <th>{t('work')}</th>
          </tr>
          {works.map(({ node: item }) => (
            <tr>
              <td>{item.period}</td>
              <td>{item.work}</td>
            </tr>
          ))}
        </table>
      )}
      </I18n>  
    );
  };
  export default Works;
