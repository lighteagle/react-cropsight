import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

export default function LeafletControlGeocoder() {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();

    L.Control.geocoder({
      query: '',
      placeholder: 'Search here...',
      defaultMarkGeocode: false,
      geocoder
    })
      .on('markgeocode', function (e) {
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []); // Empty array as the second argument to run the effect only once

  return null;
}
