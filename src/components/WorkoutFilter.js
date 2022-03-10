// src/components/FilterMovies.js

import { useState, useEffect } from "react";
import axios from 'axios';

function WorkoutFilter(props) {
  const [workoutname, setWorkoutName] = useState('');
  const [workouts, setWorkouts] = useState([]);

    console.log(props);
  const handleSelect = e => {
    setWorkoutName(e.target.value);
    props.WorkoutFilter(e.target.value);
    console.log('selected', e.target.value);

  };

  const getAllWorkouts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/register`)
      .then((response) => setWorkouts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllWorkouts();
  }, [] );

  return (
    <div className="FilterWorkouts">

{workouts.filter((workout) => {
    return (
        <div className='Tester'>
<label>Select Exercises:</label>
      <select value={workoutname} onChange={handleSelect}>
        <option value={workout.nameOfWorkout}>{workout.nameOfWorkout}</option>
      </select>
      </div>
    )
})}
      
    </div>
  );
}

export default WorkoutFilter;
