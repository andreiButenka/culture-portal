import { YMaps, Map, Placemark, ZoomControl, FullscreenControl, GeolocationControl, TypeSelector, YMapsApi } from 'react-yandex-maps';
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

const MapComponent = ({ locations }) => {
  const [coords, setCoords] = useState([]);
  const yandexApiKey = `6fb6e4c4-c2b1-412b-9801-b8fd220b12ef`;

  const fetchCoordsFromAddresses = () => {
    let coordsData = [];
    if (!locations.length) return;

    Promise.all(locations.map((location) =>
      fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${yandexApiKey}&format=json&geocode=${location}`)
        .then(resp => resp.json())
    )).then(locationsArray => {
      locationsArray.forEach((location) => {
        const { response: { GeoObjectCollection: { featureMember } } } = location;
        const [coordsDataArray] = featureMember;
        const { GeoObject: { Point: { pos } } } = coordsDataArray;
        const coordsArray = pos.split(' ').reverse().map(Number);
        console.log(featureMember); // remove this console after fill all locations data in contentful
        coordsData.push(coordsArray);
      });
      setCoords(coordsData);
    })
  };

  useEffect(() => {
    fetchCoordsFromAddresses();
  }, [locations]);

  return (
    coords.length &&
    <div>
      <h2>Map</h2>
      <YMaps>
        <Map defaultState={{ center: coords[0], zoom: 14}} width='50vw' height={400}
             options={{maxZoom: 18, minZoom: 2}}
        >
          {coords.map((location) => <Placemark key={location} geometry={location}/>)}
          <ZoomControl/>
          <FullscreenControl/>
          <GeolocationControl/>
          <TypeSelector/>
        </Map>
      </YMaps>
    </div>
  )
};

MapComponent.propTypes = {
  locations: PropTypes.array,
};

MapComponent.defaultProps = {
  locations: [],
};

export default MapComponent;