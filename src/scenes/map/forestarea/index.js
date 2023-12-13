import React from 'react';
import { MapContainer, TileLayer, LayersControl, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LeafletControlGeocoder from '../../../component/LeafletControlGeocoder';
import L from 'leaflet';

// https://forest-observatory.ec.europa.eu/wms/GFC2020?service=WMS&request=GetMap&layers=forest&styles=&format=image%2Fpng&transparent=true&version=1.3.0&srs=EPSG%3A4326&layerId=forestundefined&width=256&height=256&crs=EPSG%3A4326&bbox=0,67.5,22.5,90

// https://forest-observatory.ec.europa.eu/wms/GFA?service=WMS&request=GetMap&layers=GFM&styles=&format=image%2Fpng&transparent=true&version=1.3.0&width=256&height=256&bbox=-3.427734375%2C119.00390625%2C-3.33984375%2C119.091796875&crs=EPSG%3A4326&bbox=-85.0511287798066,0,-66.51326044311186,90

// https://forest-observatory.ec.europa.eu/wms/GFA?service=WMS&request=GetMap&layers=GFF&styles=&format=image%2Fpng&transparent=true&version=1.3.0&srs=EPSG%3A4326&layerId=fragmentationundefined&width=256&height=256&crs=EPSG%3A4326&bbox=0,135,22.5,157.5

const wmsUrl2020 = 'https://forest-observatory.ec.europa.eu/wms/GFC2020';
const wmsOptions2020 = {
    layers: 'forest',
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
    crs: L.CRS.EPSG4326,
    width: 256,
    height: 256,
    bbox: [-3.427734375, 119.00390625, -3.33984375, 119.091796875],
  };
const wmsUrl = 'https://forest-observatory.ec.europa.eu/wms/GFA';
const wmsOptions = {
    layers: 'GFM',
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
    crs: L.CRS.EPSG4326,
    width: 256,
    height: 256,
    bbox: [-3.427734375, 119.00390625, -3.33984375, 119.091796875],
  };
const wmsUrlFF = 'https://forest-observatory.ec.europa.eu/wms/GFA';
const wmsOptionsFF = {
    layers: 'GFF',
    format: 'image/png',
    transparent: true,
    version: '1.3.0',
    crs: L.CRS.EPSG4326,
    width: 256,
    height: 256,
    bbox: [-3.427734375, 119.00390625, -3.33984375, 119.091796875],
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
  {
    name: "Satellite",
    url: "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Satellite Streets",
    url: "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
];

function ForestArea() {
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

          
          <Overlay name="Global map of Forest Cover for year 2020" zIndex={10}>
            <WMSTileLayer url={wmsUrl2020} {...wmsOptions2020} />
          </Overlay>
          <Overlay name="Forest Mask 2019" zIndex={11}>
            <WMSTileLayer url={wmsUrl} {...wmsOptions} />
          </Overlay>
          <Overlay name="Forest Fragmentation 2019" zIndex={12}>
            <WMSTileLayer url={wmsUrlFF} {...wmsOptionsFF} />
          </Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default ForestArea;
