import React from 'react';
import { MapContainer, TileLayer, LayersControl, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LeafletControlGeocoder from '../../../component/LeafletControlGeocoder';
import L from 'leaflet';

const baseUrl = 'https://tiles.globalforestwatch.org';
const layerTemplate = {
  tcl             : `${baseUrl}/umd_tree_cover_loss/latest/tcd_30/{z}/{x}/{y}.png`,
  forest          : `${baseUrl}/umd_regional_primary_forest_2001/latest/dynamic/{z}/{x}/{y}.png`,
  carbonEmmision  : `${baseUrl}/gfw_forest_carbon_gross_removals/latest/tcd_30/{z}/{x}/{y}.png`
};

// https://forest-observatory.ec.europa.eu/wms/GFC2020?service=WMS&request=GetMap&layers=forest&styles=&format=image%2Fpng&transparent=true&version=1.3.0&srs=EPSG%3A4326&layerId=forestundefined&width=256&height=256&crs=EPSG%3A4326&bbox=0,67.5,22.5,90

// https://forest-observatory.ec.europa.eu/wms/GFA?service=WMS&request=GetMap&layers=GFM&styles=&format=image%2Fpng&transparent=true&version=1.3.0&width=256&height=256&bbox=-3.427734375%2C119.00390625%2C-3.33984375%2C119.091796875&crs=EPSG%3A4326&bbox=-85.0511287798066,0,-66.51326044311186,90


const wmsUrl = 'https://forest-observatory.ec.europa.eu/wms/GFA';
const wmsLayers = 'GFM';
const wmsOptions = {
    layers: wmsLayers,
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
            <WMSTileLayer url={wmsUrl} {...wmsOptions} />
          </Overlay>
          <Overlay name="Forest Mask 2019" zIndex={11}>
            <WMSTileLayer url={wmsUrl} {...wmsOptions} />
          </Overlay>
          <Overlay name="Forest Fragmentation 2019" zIndex={12}>
            <WMSTileLayer url={wmsUrl} {...wmsOptions} />
          </Overlay>
          <Overlay name="Forest Accounting 2019" zIndex={12}>
            <WMSTileLayer url={wmsUrl} {...wmsOptions} />
          </Overlay>
          <Overlay name="Global Map of Forest Cover Changes and their Drivers [2016-2022]" zIndex={12}>
            <WMSTileLayer url={wmsUrl} {...wmsOptions} />
          </Overlay>
          <Overlay name="Annual Change [2016-2022]" zIndex={12}>
            <WMSTileLayer url={wmsUrl} {...wmsOptions} />
          </Overlay>
          <Overlay name="Deforestation Year" zIndex={12}>
            <WMSTileLayer url={wmsUrl} {...wmsOptions} />
          </Overlay>
          <Overlay name="Degradation Year" zIndex={12}>
            <WMSTileLayer url={wmsUrl} {...wmsOptions} />
          </Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default ForestArea;

/*
   // Add WMS layer for GFM
    var gfmLayer = L.tileLayer.wms('https://forest-observatory.ec.europa.eu/wms/GFA', {
      layers: 'GFM',
      format: 'image/png',
      transparent: true,
      version: '1.3.0',
      crs: L.CRS.EPSG4326,
      width: 256,
      height: 256,
      bbox: [-3.427734375, 119.00390625, -3.33984375, 119.091796875],
    });
*/ 