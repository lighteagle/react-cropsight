import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // Create a map instance and specify the container element
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Create a tile layer for the map background
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Create a marker and add it to the map
    L.marker([51.5, -0.09]).addTo(map).bindPopup('A marker');

    // Clean up the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '100vh' }}></div>;
};

export default Map;
