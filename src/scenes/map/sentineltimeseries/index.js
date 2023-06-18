import React from 'react';
import { MapContainer, LayersControl, WMSTileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const { BaseLayer } = LayersControl;

const wmsSentinelUrl = 'https://s2maps-tiles.eu/wms';
const sentinelLayers = {
  '2021': 's2cloudless-2021_3857',
  '2020': 's2cloudless-2020_3857',
  '2019': 's2cloudless-2019_3857',
  '2018': 's2cloudless-2018_3857',
  '2016': 's2cloudless_3857',
};

function SentinelTimeSeries() {
  return (
    <div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: '100vh', width: '100%' }}
        zoomControl={false} // Disable the zoom control
      >
        <LayersControl position="topleft"> {/* Position the LayersControl on the top left corner */}
          {Object.entries(sentinelLayers).map(([year, layerName]) => (
            <BaseLayer key={year} name={year} checked={year === '2021'}>
              <WMSTileLayer
                url={wmsSentinelUrl}
                layers={layerName}
                format="image/png"
                transparent={true}
              />
            </BaseLayer>
          ))}
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default SentinelTimeSeries;
