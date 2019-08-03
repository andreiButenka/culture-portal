import { YMaps, Map, Placemark, ZoomControl, FullscreenControl, TypeSelector,  } from 'react-yandex-maps';
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

const MapComponent = ({ locations, children }) => {
  const [coords, setCoords] = useState([]);
  const [balloonContext, setBalloonContext] = useState('Идет поиск...');
  const [clickedCoords, setClickedCoords] = useState([]);
  const yandexApiKey = `6fb6e4c4-c2b1-412b-9801-b8fd220b12ef`;

  const getCoords = async (locations) => {
    let coordsData = [];
    const locationsArray = await Promise.all(locations.map((location) =>
      fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${yandexApiKey}&format=json&geocode=${location}`)
        .then((resp) => resp.json())
    ));

    locationsArray.forEach((location) => {
      const { response: { GeoObjectCollection: { featureMember } } } = location;
      const [coordsDataArray] = featureMember;
      const { GeoObject: { Point: { pos } } } = coordsDataArray;
      const coordsArray = pos.split(' ').reverse().map(Number);
      coordsData.push(coordsArray);
    });

    return coordsData;
  };

  const getAddress = async (location) => {
    const resp = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${yandexApiKey}&format=json&geocode=${location}`);
    const locationData = await resp.json();
    const { response: { GeoObjectCollection: { featureMember } } } = locationData;
    const [coordsDataArray] = featureMember;
    const { GeoObject: { description, name } } = coordsDataArray;
    return `${description}, ${name}`;
  };

  const initCoords = async () => {
    if (!locations.length) return;

    const locationsArray = await getCoords(locations);
    setCoords(locationsArray);
  };

  useEffect(() => {
    initCoords();
  }, [locations]);

  const handleClickPlacemark = async (location) => {
    setBalloonContext('Идет поиск...');
    const locationCopy = [...location];
    const address = await getAddress(locationCopy.reverse().join());
    setBalloonContext(address);
  };

  const handleClickMap = async (e) => {
    const coords = e.get('coords');
    const copyCoords = [...coords];
    const address = await getAddress(copyCoords.reverse().join());
    setClickedCoords([coords, address]);
  };

  const balloonCloseHandler = (e) => {
    setClickedCoords([]);
  };

  const COORDS_DATA = 0;
  const ADDRESS = 1;

  return (
    coords.length ?
    <div>
      <h2>{children}</h2>
      <div class='map-container'>
        <YMaps>
          <Map defaultState={{ center: coords[0], zoom: 16}} width='50vw' height={400}
              options={{maxZoom: 20, minZoom: 2}} onClick={handleClickMap}
              instanceRef={ref => {
                if (ref) {
                  ref.events.add("click", e => {
                    ref.balloon.close();
                  });
                }
              }}
          >
            {coords.map((location) =>
              <Placemark
                key={location}
                geometry={location}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                onClick={() => handleClickPlacemark(location)}
                properties={{
                  balloonContent: balloonContext
                }}
              />)}
            {clickedCoords.length ?
            <Placemark
              instanceRef={ref => ref && ref.balloon.open()}
              geometry={clickedCoords[COORDS_DATA]}
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              onClick={() => handleClickPlacemark(clickedCoords[COORDS_DATA])}
              onBalloonClose={balloonCloseHandler}
              properties={{
                balloonContent: clickedCoords[ADDRESS]
              }}
            /> : ''}
            <ZoomControl/>
            <FullscreenControl/>
            <TypeSelector/>
          </Map>
        </YMaps>
      </div>
    </div> : ''
  )
};

MapComponent.propTypes = {
  locations: PropTypes.array,
};

MapComponent.defaultProps = {
  locations: [],
};

export default MapComponent;