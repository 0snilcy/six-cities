import CityItem from '../city-item/city-item';
import { citiesList } from '../../constants/constants';
function CitiesList() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesList.map((el) => (
            <CityItem key={el.id} city={el.city} />
          ))}
        </ul>
      </section>
    </div>
  );
}
export default CitiesList;
