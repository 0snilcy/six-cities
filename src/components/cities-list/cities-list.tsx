import {
  loadParis,
  loadBrussels,
  loadCologne,
  loadAmsterdam,
  loadHamburg,
  loadDusseldorf,
} from '../../store/action';
import { useAppDispatch } from '../../hooks';

function CitiesList() {
  const dispatch = useAppDispatch();
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item" onClick={() => dispatch(loadParis())}>
            <a
              className="locations__item-link tabs__item tabs__item--active"
              href="#"
            >
              <span>Paris</span>
            </a>
          </li>
          <li
            className="locations__item"
            onClick={() => dispatch(loadCologne())}
          >
            <a className="locations__item-link tabs__item" href="#">
              <span>Cologne</span>
            </a>
          </li>
          <li
            className="locations__item"
            onClick={() => dispatch(loadBrussels())}
          >
            <a className="locations__item-link tabs__item" href="#">
              <span>Brussels</span>
            </a>
          </li>
          <li
            className="locations__item"
            onClick={() => dispatch(loadAmsterdam())}
          >
            <a className="locations__item-link tabs__item">
              <span>Amsterdam</span>
            </a>
          </li>
          <li
            className="locations__item"
            onClick={() => dispatch(loadHamburg())}
          >
            <a className="locations__item-link tabs__item" href="#">
              <span>Hamburg</span>
            </a>
          </li>
          <li
            className="locations__item"
            onClick={() => dispatch(loadDusseldorf())}
          >
            <a className="locations__item-link tabs__item" href="#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default CitiesList;
