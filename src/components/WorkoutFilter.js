// src/components/FilterMovies.js

import { useState } from 'react';

function WorkoutFilter(props) {
  const [workoutname, setWorkoutName] = useState('');
    console.log(props);
  const handleSelect = e => {
    setWorkoutName(e.target.value);
    props.WorkoutFilter(e.target.value);
    console.log('selected', e.target.value);
  };

  return (
    <div className="FilterWorkouts">
      <label>Select Exercises:</label>
      <select value={workoutname} onChange={handleSelect}>
        <option value="All">{workoutname.nameOfWorkout}</option>
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

export default WorkoutFilter;
