import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
 
const MAPBOX_TOKEN = 'pk.eyJ1IjoieXpoYTA0OTciLCJhIjoiY20wZDg2OXo5MGJuMTJpb3Jpd3kzZGpwbyJ9.krpIVomqpNj7Kt0BiHsLEA';
 
const MapBox = () => {
  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [145.1350551602974, -37.91063335017498],
      zoom: 3 
    });
 
    return () => map.remove();
  }, [])
 
  return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
}
 
export default MapBox
