import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import ExerciseFilter from "./ExerciseFilter";

function WorkoutDetails (props) {
  const [workout, setWorkout] = useState(null);
  const { workoutId } = useParams();
  const navigate =  useNavigate();
  const [exerciseinfo,setExerciseinfo] = useState([]);
  const [exerciseState, setExerciseState] = useState("");

  const getWorkout = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/register`)
      .then((response) => {
      	const oneWorkout = response.data;
        console.log(oneWorkout)
      	setWorkout(oneWorkout);
    	})
      .catch((error) => console.log(error));
  };

  const getExercises = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/exercises`)
      .then((response) => { 
        setExerciseinfo(response.data)
       })
      .catch((error) => console.log(error));
  };


  const filterExerciseList = str => {
    let exerciseCopy = [...exerciseState];
    let filteredExercise;
    console.log(str, 'String inside');
    if(str === ''){
      filteredExercise = exerciseCopy; 
    }else {
      filteredExercise = exerciseCopy.filter(exercise => {
        return exercise.nameOfExercise === str;
      });
    }

    setWorkout(filteredExercise);

  }

  
  useEffect(() => {
    getWorkout();
    getExercises();
  }, [] );

 
  const deleteWorkout = () => {
    axios
    .delete(`${process.env.REACT_APP_API_URL}/api/register/${workoutId}`)
    .then(() => navigate("/workouts"))
    .catch((error) => console.log(error));


  }


  
  return (
    <div className="WorkoutDetails">

    <h3>Select a Workout:</h3>
      <ExerciseFilter filterExercises = {filterExerciseList}/>
      <div className="Test">
      {exerciseinfo.map((exercise) => 

      <input type="text" defaultValue={exercise.nameOfExercise}></input>
      )}
      </div>

    <button onClick={deleteWorkout}>Delete</button>
    

      <Link to="/workouts">
        <button>Back to Workouts</button>
      </Link>
    </div>
  );
}

export default WorkoutDetails;