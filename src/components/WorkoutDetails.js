// src/pages/ProjectDetailsPage.js
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";


function WorkoutDetails (props) {
  const [workout, setWorkout] = useState(null);
  const { workoutId } = useParams();
  const navigate =  useNavigate();
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
    <h3>Exercises</h3>
    <button onClick={deleteWorkout}>Delete</button>
    

      <Link to="/workouts">
        <button>Back to Workouts</button>
      </Link>
    </div>
  );
}

export default WorkoutDetails;
