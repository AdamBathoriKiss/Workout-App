import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import WorkoutFilter from "./WorkoutFilter";

function Addingexer (props) {
  
  const [workoutState, setWorkoutState] = useState("");
  const [workout, setWorkout] = useState([]);
  const [exerciseinfo,setExerciseinfo] = useState([]);
 
  const getExercises = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/exercises`)
      .then((response) => { 
        setExerciseinfo(response.data)
       })
      .catch((error) => console.log(error));
  };

  const getWorkouts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/register`)
      .then((response) => { 
        setWorkoutState(response.data)
        setWorkout(response.data)
       })
      .catch((error) => console.log(error));
  };

  const filterWorkoutList = str => {
    let workoutCopy = [...workoutState];
    let filteredWorkout;
    console.log(str, 'String inside');
    if(str === ''){
      filteredWorkout = workoutCopy; 
    }else {
      filteredWorkout = workoutCopy.filter(workout => {
        return workout.nameOfWorkout === str;
      });
    }

    setWorkout(filteredWorkout);

  }


  useEffect(() => {
    getWorkouts();
    getExercises()
  }, [] );

 
  return (
    <div className="container p-5">
  
      <h3>Select a Workout:</h3>
      <WorkoutFilter filterWokrouts = {filterWorkoutList}/>
      {exerciseinfo.map((exercise) => {

      <input type="text" defaultValue={exercise.nameOfExercise} disabled={this.disabled}></input>
      })}
      
      <button>Add To Workout</button>


      <Link to="/exercises">
        <button>Back to Exercises</button>
      </Link> 

      </div>
   
  );
}

export default Addingexer;
