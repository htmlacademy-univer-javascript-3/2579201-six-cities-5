import { useEffect, useRef, useState } from 'react';
import { SortingMap } from '../../const';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeActiveSort } from '../../store/action';
import { SortOption } from '../../types/sort';


const SortBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const activeSort = useAppSelector((state)=> state.activeSort);
  const sortRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <form ref={sortRef} className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={()=> setIsOpen((prev)=> !prev)} className="places__sorting-type" tabIndex={0}>
        {SortingMap[activeSort]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen && 'places__options--opened'}`}>
        {(Object.entries(SortingMap) as [SortOption, string][]).map(([type, name])=>(
          <li onClick={()=>{
            dispatch(changeActiveSort({sort: type}));
            setIsOpen(false);
          }} key={type} tabIndex={0} className={`places__option ${activeSort === type && 'places__option--active'}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </form>
  );
};

export { SortBar };
