import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import WorkoutFilter from "./WorkoutFilter";

function WorkoutDetails (props) {
  const [workout, setWorkout] = useState();
  const { workoutId } = useParams();
  const navigate =  useNavigate();
  const [exerciseinfo,setExerciseinfo] = useState([]);
  const [exerciseState, setExerciseState] = useState("");
  const [numReps, setNumReps] = useState(5);
  const [numSets, setNumSets] = useState(5);

  const getWorkout = () => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/api/register/${workoutId}`)
    .then((response) =>  setWorkout(response.data))
    .catch((error) => console.log(error));

  }
  
  useEffect(() => {
    getWorkout();
   
  }, [] );

 
  const deleteWorkout = () => {
    axios
    .delete(`${process.env.REACT_APP_API_URL}/api/register/${workoutId}`)
    .then(() => navigate("/workouts"))
    .catch((error) => console.log(error));

  }

  

  return (
    <div className="WorkoutDetails">

{workout.map((currentwork) => {
              return (
                <div className="ProjectCard" key={currentwork._id} >
                <h3>{currentwork.nameOfWorkout}</h3>
              <p>{currentwork.exercises}</p>
              <h5>{currentwork.numberOfReps}</h5>
              <h5>{currentwork.sets}</h5>

       
                             
                </div>
              );

      })} 

    <button onClick={deleteWorkout}>Delete</button>
    

      <Link to="/workouts">
        <button>Back to Workouts</button>
      </Link>
    </div>
  );
}

export default WorkoutDetails;