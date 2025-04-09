import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { City, Point } from '../../types/offers';
import {useMap} from '../../hooks/useMap';
import { activeCustomIcon, defaultCustomIcon } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';

type MapProps = {
  city: City;
  points: Point[];
  pageBlock: 'offer' | 'cities';
}

const Map = ({city, points, pageBlock}: MapProps) =>{
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  const hoveredOffer = useAppSelector((state)=> state.hoveredOffer);
  useEffect(() => {
    if (map) {
      points.map((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: point === hoveredOffer?.location ? activeCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, city, hoveredOffer]);
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
