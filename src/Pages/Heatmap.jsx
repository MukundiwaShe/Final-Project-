import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { scaleSqrt } from "d3-scale";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import malariaData from "../Data/malariaData.json";
import "../Styles/Heatmap.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Heatmap = () => {
  const [tooltip, setTooltip] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showChart, setShowChart] = useState(false);

  // Group malaria cases by country and year
  const groupedData = malariaData.reduce((acc, d) => {
    const code = d["Country Code"];
    const name = d["Country Name"];
    const year = d["Year"];
    const cases = parseInt(d["Malaria cases reported"]) || 0;
    const lat = +d.latitude;
    const lon = +d.longitude;

    if (!code || !lat || !lon) return acc;

    if (!acc[code]) {
      acc[code] = {
        code,
        name,
        latitude: lat,
        longitude: lon,
        yearlyCases: {},
        total: 0,
      };
    }

    acc[code].yearlyCases[year] = (acc[code].yearlyCases[year] || 0) + cases;
    acc[code].total += cases;

    return acc;
  }, {});

  const countryData = Object.values(groupedData);

  const radiusScale = scaleSqrt()
    .domain([0, Math.max(...countryData.map((c) => c.total))])
    .range([1, 10]);

  return (
    <div className="heatmap-container" style={{ position: "relative" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 400, center: [20, 5] }}
        width={980}
        height={520}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Base Map */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#d3d3d3"
                stroke="#999"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>

        {/* Country Name Labels */}
        {countryData.map((country) => (
          <Marker key={country.code} coordinates={[country.longitude, country.latitude]}>
            <text
              textAnchor="middle"
              y={-8}
              style={{ fontFamily: "Arial", fontSize: 8, fill: "#333" }}
            >
              {country.name}
            </text>
          </Marker>
        ))}

        {/* Red Dots */}
        {countryData.map((country) => {
          const { latitude, longitude, name, yearlyCases, total, code } = country;
          const radius = radiusScale(total);

          const tooltipText = `${name}:\n` + Object.entries(yearlyCases)
            .map(([year, count]) => `${year}: ${count.toLocaleString()} cases`)
            .join("\n");

          return (
            <Marker
              key={code}
              coordinates={[longitude, latitude]}
              onMouseEnter={() => setTooltip(tooltipText)}
              onMouseLeave={() => setTooltip("")}
              onClick={() => { setSelectedCountry(country); setShowChart(false); }}
            >
              <circle
                r={radius}
                fill="red"
                fillOpacity={0.7}
                stroke="#fff"
                strokeWidth={0.4}
              />
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Floating Popup */}
      {selectedCountry && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            width: "400px",
            zIndex: 1000,
            boxShadow: "0px 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>{selectedCountry.name} - Malaria Data</h3>

          {!showChart ? (
            <>
              {/* Mini Table */}
              <table style={{ fontSize: "12px", width: "100%", marginBottom: "10px", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f5f5f5" }}>
                    <th style={{ border: "1px solid #ccc", padding: "5px" }}>Year</th>
                    <th style={{ border: "1px solid #ccc", padding: "5px" }}>Cases</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(selectedCountry.yearlyCases).map(([year, count]) => (
                    <tr key={year}>
                      <td style={{ border: "1px solid #ccc", padding: "5px" }}>{year}</td>
                      <td style={{ border: "1px solid #ccc", padding: "5px" }}>{count.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => setShowChart(true)}
                style={{
                  marginBottom: "10px",
                  padding: "5px 10px",
                  background: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                View Bar Graph
              </button>
            </>
          ) : (
            <>
              {/* Bar Chart */}
              <div style={{ width: "100%", height: 200, marginBottom: "10px" }}>
                <ResponsiveContainer>
                  <BarChart data={Object.entries(selectedCountry.yearlyCases).map(([year, count]) => ({ year, cases: count }))}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="cases" fill="#28a745" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <button
                onClick={() => setShowChart(false)}
                style={{
                  marginBottom: "10px",
                  padding: "5px 10px",
                  background: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Back to Table
              </button>
            </>
          )}

          <button
            onClick={() => setSelectedCountry(null)}
            style={{
              padding: "5px 10px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Back to Map
          </button>
        </div>
      )}

      {/* Tooltip */}
      {tooltip && (
        <div className="map-tooltip">
          <pre>{tooltip}</pre>
        </div>
      )}
    </div>
  );
};

export default Heatmap;
