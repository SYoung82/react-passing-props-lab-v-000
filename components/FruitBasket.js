import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({
  fruit,
  filters,
  selectedFilter,
  handleFilterChange
}) => {
  return(
    <div className="fruit-basket">
        <Filter handleChange={handleFilterChange} />
        <FilteredFruitList
          filter={selectedFilter} />
      </div>
  ) 
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

export default FruitBasket;
