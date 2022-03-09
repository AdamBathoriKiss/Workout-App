// src/components/FilterMovies.js

import { useState } from 'react';

function FilterExercises(props) {
  const [exername, setExername] = useState('All');
    console.log(props);
  const handleSelect = e => {
    setExername(e.target.value);
    props.filterExercises(e.target.value);
    console.log('selected', e.target.value);
  };

  return (
    <div className="FilterMovies">
      <label>Select Exercises:</label>
      <select value={exername} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Chest">Chest</option>
        <option value="Triceps">Triceps</option>
        <option value="Biceps">Biceps</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Back">Back</option>
        <option value="Legs">Legs</option>
        <option value="Abs">Abs</option>
      </select>
    </div>
  );
}

export default FilterExercises;
