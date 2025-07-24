import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { scaleSqrt } from "d3-scale";
import malariaData from "../Data/malariaData.json";
import "../Styles/Heatmap.css";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Heatmap = () => {
  const [tooltip, setTooltip] = useState("");

  // 1. Group malaria cases by country and year
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

  // 2. Radius scale based on total malaria cases
  const radiusScale = scaleSqrt()
    .domain([0, Math.max(...countryData.map((c) => c.total))])
    .range([1, 10]);

  return (
    <div className="heatmap-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 400, center: [20, 5] }} // Centered on Africa
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
                className="country-shape"
              />
            ))
          }
        </Geographies>

        {/* Red dots on countries */}
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

        {/* Country Labels */}
        {countryData.map((country) => {
          const { latitude, longitude, name, code } = country;
          if (!latitude || !longitude) return null;
          return (
            <Marker key={code + "-label"} coordinates={[longitude, latitude]}>
              <text
                textAnchor="middle"
                y={-10}
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: 8,
                  fontWeight: "bold",
                  fill: "#fff",
                  stroke: "#333",
                  strokeWidth: 0.5,
                  pointerEvents: "none",
                }}
              >
                {name}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>

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
