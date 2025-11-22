import { useAppDispatch } from '../../hooks';
import { citiesListProps } from '../../types/citiesList';
type citiesListProp = {
  city: citiesListProps;
};
function CityItem({ city }: citiesListProp) {
  const dispatch = useAppDispatch();

  return (
    <li
      className="locations__item"
      onClick={() => {
        dispatch(city.action());
      }}
    >
      <a className="locations__item-link tabs__item" href="#">
        <span>{city.city}</span>
      </a>
    </li>
  );
}
export default CityItem;
