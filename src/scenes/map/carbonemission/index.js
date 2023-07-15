import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LeafletControlGeocoder from '../../../component/LeafletControlGeocoder';

const baseUrl = 'https://tiles.globalforestwatch.org';
const layerTemplate = {
  tcl             : `${baseUrl}/umd_tree_cover_loss/latest/tcd_30/{z}/{x}/{y}.png`,
  forest          : `${baseUrl}/umd_regional_primary_forest_2001/latest/dynamic/{z}/{x}/{y}.png`,
  carbonEmmision  : `${baseUrl}/gfw_forest_carbon_gross_removals/latest/tcd_30/{z}/{x}/{y}.png`
};

const { BaseLayer, Overlay } = LayersControl;

const basemaps = [
  {
    name: "Midnight",
    url: "https://api.mapbox.com/styles/v1/koltigis/clj1bnr9800sr01qy6fn831ky/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
  },
  {
    name: 'Dark',
    url: "https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    
  },
  {
    name: 'Light',
    url:'https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA',
  },
];

function CarbonEmission() {
  return (
    <div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: '100vh', width: '100%' }}
        zoomControl={false} // Disable the zoom control
      >
        <LeafletControlGeocoder />

        <LayersControl position="topleft">
          {basemaps.map((basemap, index) => (
            <BaseLayer
              checked={index === 0} // Set the "Midnight" basemap as checked by default
              name={basemap.name}
              key={basemap.name}
            >
              <TileLayer url={basemap.url} />
            </BaseLayer>
          ))}

          
          <Overlay name="Forest Area 2001" zIndex={10}>
            <TileLayer url={layerTemplate.forest} opacity={0.5} />
          </Overlay>
          <Overlay name="Tree Cover Loss 2001 - 2002" zIndex={11}>
            <TileLayer url={layerTemplate.tcl} opacity={0.5} />
          </Overlay>
          <Overlay checked name="Carbon Emission 2021-2022" zIndex={12}>
            <TileLayer url={layerTemplate.carbonEmmision} />
          </Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default CarbonEmission;
