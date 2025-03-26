import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { City, Point } from '../../types/offers';
import useMap from '../../hooks/useMap';

type MapProps = {
  city: City;
  points: Record<string, Point[]>;
}

const Map = ({city, points}: MapProps) =>{
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [25, 35],
    iconAnchor: [20, 40],
  });
  useEffect(() => {
    if (map) {
      points[city.name].forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);
  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>);
};

export {Map};
