import { sortOptions } from '../../constants/constants';
import { SortItem } from '../sort-item/sort-item';

export function SortOptions() {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortOptions.map((el) => (
          <SortItem key={el.id} option={el.option} />
        ))}
      </ul>
    </form>
  );
}
