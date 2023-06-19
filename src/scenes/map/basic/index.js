import React from "react";
import { MapContainer, LayersControl, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LeafletControlGeocoder from "../../../component/LeafletControlGeocoder";

const { BaseLayer } = LayersControl;
const layerList = [
  {
    name: "Blue Print",
    url: "https://api.mapbox.com/styles/v1/mapbox-map-design/cks97e1e37nsd17nzg7p0308g/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Dark",
    url: "https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Hillshade",
    url: "https://api.mapbox.com/styles/v1/koltigis/clciuvvw9001l14mw3p0uhl2e/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Light",
    url: "https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Midnight",
    url: "https://api.mapbox.com/styles/v1/koltigis/clj1bnr9800sr01qy6fn831ky/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: true,
  },
  {
    name: "Moonlight",
    url: "https://api.mapbox.com/styles/v1/mapbox/cj3kbeqzo00022smj7akz3o1e/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Navigation Day",
    url: "https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Navigation Night",
    url: "https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Outdoors",
    url: "https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Pencil",
    url: "https://api.mapbox.com/styles/v1/koltigis/clj1ov8tf01eo01r17qjv6b6r/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
  },
  {
    name: "Streets",
    url: "https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29sdGlnaXMiLCJhIjoiY2xhYzYyNm9xMDc5czNvbWhjMTNrODVkMyJ9.2Ni9VMsNgMf3vj67B_l2zA",
    checked: false,
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

function BasicMap() {
  return (
    <div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "100vh", width: "100%" }}
        zoomControl={false}
      >
        <LayersControl position="topleft">
          {layerList.map((layer, index) => (
            <BaseLayer key={index} checked={layer.checked} name={layer.name}>
              <TileLayer url={layer.url} />
            </BaseLayer>
          ))}
        </LayersControl>
        <LeafletControlGeocoder />
      </MapContainer>
    </div>
  );
}

export default BasicMap;
