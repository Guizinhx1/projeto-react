import React from 'react';
import './FilterBar.css'


const FilterBar = ({ setFilter }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter('all')}>Todas</button>
      <button onClick={() => setFilter('completed')}>Concluídas</button>
      <button onClick={() => setFilter('pending')}>Pendentes</button>
    </div>
  );
};

export default FilterBar;