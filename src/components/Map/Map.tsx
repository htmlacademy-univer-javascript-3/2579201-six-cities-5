import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { City, Point } from '../../types/offers';
import {useMap} from '../../hooks/useMap';
import { defaultCustomIcon } from '../../const';

type MapProps = {
  city: City;
  points: Point[];
  pageBlock: 'offer' | 'cities';
}

const Map = ({city, points, pageBlock}: MapProps) =>{
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      points.map((point) => {
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
  }, [map, points, city]);
  return (
    <section className={`${pageBlock}__map map"`}>
      <div
        style={{height: '100%'}}
        ref={mapRef}
      >
      </div>
    </section>
  );
};

export {Map};
