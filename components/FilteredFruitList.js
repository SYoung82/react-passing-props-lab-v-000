import React from 'react';

const FilteredFruitList = ({
  fruit,
  filter
}) => {
  const list = !filter ? fruit : fruit.filter( f=> f.fruit_type === filter);

    return (
      <ul className="fruit-list">
        {list.map((fruit,idx) => <li key={idx}>{fruit.char}</li>)}
      </ul>
    );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

export default FilteredFruitList;
