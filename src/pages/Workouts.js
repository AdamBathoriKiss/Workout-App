import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import WorkoutCreater from "../components/WorkoutCreater";
const API_URL = "http://localhost:5005";

function Workouts(props) {
  const [workout, setWorkout] = useState([]);
 

  const getWorkouts = () => {
    axios
      .get(`${API_URL}/reg/register`)
      .then((response) => setWorkout(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getWorkouts();
  }, [] );

    return (
      <div className="WorkoutsPage">

<h1>My Workouts</h1>

        <div className="WorkoutCreate">

              <h4>Create</h4>

              <div className="Chest">
              <label for="workout-names">Choose Workout:</label>
               {workout.map((workouts) => {
                   
                        return (
                          <div className="Workout" key={workouts._id} >
                            <h2>{workouts.nameOfWorkout}</h2>
                          </div>
                        );
          
                      })}  
          </div> 
              
               
                <WorkoutCreater/>
          </div>

       </div>
    );
  }
   
  export default Workouts;