import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { URL_MARKER_CURRENT } from '../../constants/constants';
import 'leaflet/dist/leaflet.css';
import OffersProps from '../../types/offers';
import useMap from '../../hooks/use-map';

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  offers: OffersProps[];
};

function Map({ offers }: MapProps) {
  const [city] = offers;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((el) => {
        const marker = new Marker({
          lat: el.lat,
          lng: el.lng,
        });

        marker.setIcon(currentCustomIcon).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}
export default Map;
