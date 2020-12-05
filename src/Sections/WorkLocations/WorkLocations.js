import React, {Component} from "react";
import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import "./WorkLocations.css"
import mapData from "../../data/countries.json"
import {WorkLocationsSection} from "./WorkLocations.style";
import {StyledH2} from "../../Components/H2/H2.style"
      class WorkLocations extends Component {
        countryStyle = {
          fillColor: "#000",
          fillOpacity: 0.8,
          color: "#d3d3d3",
          weight: 0.15,
        }
        onEachCountry = (country, layer) => {
          if (country.properties.workedFrom === 1) {
            layer.setStyle({fillColor :"#D19C1D"}) 
          }
          const countryName = country.properties.ADMIN;
          layer.bindPopup(countryName)
        }
        render() {
          console.log("Hello")
          console.log(mapData);
          return (
            <WorkLocationsSection id="locations">
              <StyledH2>Where we've worked from</StyledH2>
              <MapContainer center={[51.505, -0.09]} zoom={1} zoomControl={false} scrollWheelZoom={false}>
                <GeoJSON data={mapData.features} style={this.countryStyle} onEachFeature={this.onEachCountry} />
              </MapContainer>
            </WorkLocationsSection>
          );
        };
        }
        
      export default WorkLocations;
      