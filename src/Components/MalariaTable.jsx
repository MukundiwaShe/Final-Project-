import React, { useState } from "react";
import malariaData from "../Data/malariaData.json";
import "../Styles/Table.css"; // optional styling

const MalariaTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term (country or year)
  const filteredData = malariaData.filter((entry) => {
    const country = entry["Country Name"]?.toLowerCase() || "";
    const year = entry["Year"]?.toString() || "";
    return (
      country.includes(searchTerm.toLowerCase()) ||
      year.includes(searchTerm)
    );
  });

  return (
    <div className="table-container">
      <h2>Malaria Statistics Table</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by country or year..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Malaria Cases</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((entry, index) => (
              <tr key={index}>
                <td>{entry["Country Name"]}</td>
                <td>{entry["Malaria cases reported"] || "N/A"}</td>
                <td>{entry["Year"]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MalariaTable;
