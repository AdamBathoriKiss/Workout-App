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

  const list= workouts.map((workout) => {
    return (
        <div className='Tester'>

        <option value={workout.nameOfWorkout}>{workout.nameOfWorkout}</option>
    
      </div>
    )
    console.log(list)
    
})

  return (
    <div className="FilterWorkouts">
        
<label>Select Exercises:</label>
<select value={workoutname} onChange={handleSelect}>{list}</select>
      
    </div>
  );
}

export default WorkoutFilter;
