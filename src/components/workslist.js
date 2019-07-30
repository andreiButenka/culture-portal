import React from "react";
import './workslist.css';

const Works = ({ works }) => {
    return (
      <table id="works">
        <tr>
          <th>Период</th>
          <th>Произведение</th>
        </tr>
        {works.map(({ node: item }) => (
          <tr>
            <td>{item.period}</td>
            <td>{item.work}</td>
          </tr>
        ))}
      </table>
    );
  };
  export default Works;
