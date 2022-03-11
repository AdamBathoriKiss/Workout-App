import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import WorkoutFilter from "./WorkoutFilter";

function WorkoutDetails (props) {
  const [workout, setWorkout] = useState([]);
  const { workoutId } = useParams();
  const navigate =  useNavigate();
  const [nameOfWorkout, setnameOfWorkout] = useState("");
  const [exercises, setExercises] = useState("");
  const [numberOfReps, setNumberOfReps] = useState("");
  const [sets, setSets] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
 
  
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

  const handleFormSubmit = (e) => {                     // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = {  nameOfWorkout, exercises, numberOfReps, sets };
 
    // Make a PUT request to update the project
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/register/${workoutId}`, requestBody)
      .then((response) => {
        navigate("/workouts/" + workoutId);
      });
  };

 
  const deleteWorkout = () => {
    axios
    .delete(`${process.env.REACT_APP_API_URL}/api/register/${workoutId}`)
    .then(() => navigate("/workouts"))
    .catch((error) => console.log(error));

  }

  return (
    <div className="WorkoutDetails">

<div className="WorkoutDetail">

{workout && workout.map((workouts) => {
                   
                   return (
                     <div className="WorkoutExercisecard" key={workouts.id} >
  
                      
                               <h3>Name of Workout: {workouts.nameOfWorkout}</h3>
                                <h5>Exercise name: {workouts.exercises}</h5>
                                <h5>Number of Reps: {workouts.numberOfReps}</h5>
                                <h5>Number of Sets: {workouts.sets}</h5>



                  <h3>Edit Workout</h3>              
                  
                   <form onSubmit={handleFormSubmit}>
                    
                     <div className="form-group">
                         <label>Workout name</label>
                         <input type="text" className="form-control" placeholder="Chest day" name="nameOfWorkout" value={nameOfWorkout}
               onChange={(e) => setnameOfWorkout(e.target.value)}/>
                <label>Exercise name</label>
                         <input type="text" className="form-control" placeholder="Push up" name="exercises" value={exercises}
               onChange={(e) => setExercises(e.target.value)} />
               <label>Number of Reps:</label>
             <input type="number" className="form-control" placeholder="4" name="numberOfReps" value={numberOfReps} onChange={(e) => setNumberOfReps(e.target.value)} />
     
             <label>Number of Sets:</label>
             <input type="number" className="form-control" placeholder="4" name="sets" value={sets} onChange={(e) => setSets(e.target.value)} />
                     </div>
              
                     <button type="submit" className="btn btn-primary btn-block" >Update</button>
     
                     { errorMessage && <p className="error-message">{errorMessage}</p> }
                   
                     
                 </form>
                 </div>
                   );

                 })}

</div> 

    <button onClick={deleteWorkout}>Delete Current Workout</button>
    

      <Link to="/workouts">
        <button>Back to Workouts</button>
      </Link>
    </div>
  );
}

export default WorkoutDetails;