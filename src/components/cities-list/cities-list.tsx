import CityItem from '../city-item/city-item';
import { citiesListProps } from '../../types/citiesList';

type citiesList = {
  citiesList: citiesListProps[];
};
function CitiesList({ citiesList }: citiesList) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((el) => (
            <CityItem key={el.id} city={el} />
          ))}
        </ul>
      </section>
    </div>
  );
}
export default CitiesList;
