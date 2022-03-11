import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import WorkoutFilter from "./WorkoutFilter";

function WorkoutDetails (props) {
  const [workout, setWorkout] = useState(null);
  const { workoutId } = useParams();
  const navigate =  useNavigate();
  const [exerciseinfo,setExerciseinfo] = useState([]);
  const [exerciseState, setExerciseState] = useState("");
  const [numReps, setNumReps] = useState(5);
  const [numSets, setNumSets] = useState(5);

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


  const handleNumberReps = (e) => setNumReps(e.target.value);
  const handleNumberSets = (e) => setNumSets(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWork = { title, numReps, numSets };
    
    console.log("Submitted", newWork);
    props.addWork(newWork);

   
    setNumReps(5);
    setNumSets(5);
  }



  
  return (
    <div className="WorkoutDetails">

    <h3>Update Your Workout:</h3>
      <WorkoutFilter filterExercises = {filterExerciseList}/>
      <div className="Test">

      <form onSubmit={handleSubmit}>
     
        <label>Number of Reps:</label>
        <input type="number" name="NumReps" value={IMDBRating} onChange={handleNumberReps} />

        <label>Number of Sets:</label>
        <input type="number" name="NumSets" value={IMDBRating} onChange={handleNumberSets} />

        <button type="submit">Add Exercise</button>
      </form>
    
      </div>

    <button onClick={deleteWorkout}>Delete</button>
    

      <Link to="/workouts">
        <button>Back to Workouts</button>
      </Link>
    </div>
  );
}

export default WorkoutDetails;