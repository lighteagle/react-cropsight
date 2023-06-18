import React from 'react';
import { MapContainer, LayersControl, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LeafletControlGeocoder from '../../../component/LeafletControlGeocoder';

const { BaseLayer } = LayersControl;

function BasicMap() {
  return (
    <div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: '100vh', width: '100%' }}
        zoomControl={false} // Disable the zoom control
      >
        <LayersControl position="topleft">
          <BaseLayer name="Midnight" checked>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/koltigis/clj1bnr9800sr01qy6fn831ky/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA"
            />
          </BaseLayer>
        </LayersControl>
        <LeafletControlGeocoder />
      </MapContainer>
    </div>
  );
}

export default BasicMap;
