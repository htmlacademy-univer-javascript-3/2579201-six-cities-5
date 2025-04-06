import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeActiveCity } from '../../store/action';
import { City, CityName } from '../../types/offers';

type Props = {
  cities: Record<string, City>;
  activeCity: CityName;
}

const CityList = ({cities, activeCity}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.entries(cities).map(([cityName, city])=>(
            <li onClick={()=> dispatch(changeActiveCity({city}))} className="locations__item" key={cityName}>
              <a className={`locations__item-link tabs__item ${activeCity === cityName && 'tabs__item--active'}`} href="#">
                <span>{cityName}</span>
              </a>
            </li>))}
        </ul>
      </section>
    </div>
  );
};

export {CityList};
