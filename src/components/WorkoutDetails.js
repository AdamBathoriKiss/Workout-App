import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import WorkoutFilter from "./WorkoutFilter";

function WorkoutDetails (props) {
  const [workout, setWorkout] = useState([]);
  const { workoutId } = useParams();
  const navigate =  useNavigate();
  // const [exerciseinfo,setExerciseinfo] = useState([]);
  // const [exerciseState, setExerciseState] = useState("");
  // const [numReps, setNumReps] = useState(5);
  // const [numSets, setNumSets] = useState(5);

  const getWorkout = () => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/api/register/${workoutId}`)
    .then((response) => {setWorkout([response.data])
      console.log(response)
      console.log('workout' , workout)
    })
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

<div className="Workouts">

{workout && workout.map((workouts) => {
                   
                   return (
                     <div className="Workoutcard" key={workouts.id} >
  
                      
                               <h3>{workouts.nameOfWorkout}</h3>
                              
                             
                       
                   </div>
                   );

                 })}

</div> 

    <button onClick={deleteWorkout}>Delete</button>
    

      <Link to="/workouts">
        <button>Back to Workouts</button>
      </Link>
    </div>
  );
}

export default WorkoutDetails;