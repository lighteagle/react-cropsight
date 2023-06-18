import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const BasicMap = () => {
    useEffect(() => {
        const map = L.map('map').setView([0, 120], 2);

        L.tileLayer(
            'https://api.mapbox.com/styles/v1/koltigis/clj1bnr9800sr01qy6fn831ky/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA',
            {
              attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
              maxZoom: 18,
            }
          ).addTo(map);

        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" style={{ height: '100vh' }}></div>;
};

export default BasicMap;
