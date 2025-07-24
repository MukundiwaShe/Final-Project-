import React from "react";
import malariaData from "../Data/malariaData.json";
import "../Styles/Table.css"; // optional styling

const MalariaTable = () => {
  return (
    <div className="table-container">
      <h2>Malaria Statistics Table</h2>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Malaria Cases</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {malariaData.map((entry, index) => (
            <tr key={index}>
              <td>{entry["Country Name"]}</td>
              <td>{entry["Malaria cases reported"]}</td>
              <td>{entry["Year"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MalariaTable;
