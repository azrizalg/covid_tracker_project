import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";

const CovidMap = ({ countries }) => {
  const mapStyle = {
    weight: 0.5,
    color: "white",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    //display tooltip and color on each country
    layer.options.fillColor = country.properties.color;
    const confirmed = country.properties.confirmed;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    const deathText = country.properties.deathText;
    const idName = country.properties.idName;
    if (confirmed > 0) {
      layer.bindTooltip(
        `<h4> ${idName}</h4> Kasus   = ${confirmedText} <br>Kematian = ${deathText}`,
        { sticky: true }
      );
    } else {
      if (idName != null) {
        layer.bindTooltip(`<h4> ${idName}</h4> Kasus   = - <br>Kematian = -`, {
          sticky: true,
        });
      } else {
        layer.bindTooltip(`<h4> ${name}</h4> Kasus   = - <br>Kematian = -`, {
          sticky: true,
        });
      }
    }
  };

  return (
    <MapContainer
      attributionControl={false}
      style={{ height: "90vh" }}
      zoom={2}
      center={[0, 0]}
      scrollWheelZoom={false}
    >
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
};

export default CovidMap;
