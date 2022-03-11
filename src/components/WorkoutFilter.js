import { useState, useEffect } from "react";
import axios from 'axios';

function WorkoutFilter(props) {
  const [exercisname, setExerciseName] = useState('');
  const [exercises, setExercises] = useState([]);

    console.log(props);
  const handleSelect = e => {
    setExerciseName(e.target.value);
    props.WorkoutFilter(e.target.value);
    console.log('selected', e.target.value);

  };

  const getAllExercises = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/exercises`)
      .then((response) => setExercises(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllExercises();
  }, [] );

 
  return (
    <div className="FilterExercises">

<div className='Tester'>
<label>Select Exercises:</label>

        <select value={exercisname} onChange={handleSelect}>
        <option value="Select Exercise">Select Exercise</option>    
        {exercises.map((exercise)=> <option value={exercise.nameOfExercise}>{exercise.nameOfExercise}</option>)}
        </select>
      </div>



      
    </div>
  );
}

export default WorkoutFilter;