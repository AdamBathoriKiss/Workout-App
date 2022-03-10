import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import WorkoutCreater from "../components/WorkoutCreater";



function Workouts(props) {
  const [workout, setWorkout] = useState([]);
  const { workoutId } = useParams();
  const navigate =  useNavigate();
  const storedToken = localStorage.getItem("authToken");

  const getWorkouts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/register`)
      .then((response) => setWorkout(response.data))
      .then(() => navigate("/workouts"))
      .catch((error) => console.log(error));
  };


  useEffect(() => {
    getWorkouts();
  }, [] );

  
 

    return (
      <div className="WorkoutsPage">

<h1>My Workouts</h1>

        <div className="WorkoutCreate">


              <WorkoutCreater/>

              <div className="Workouts">
             
               {workout.map((workouts) => {
                   
                        return (
                          <div className="Workoutcard" key={workouts.id} >
       
                            <Link to={`/workouts/${workouts._id}`}>
                                    <h3>{workouts.nameOfWorkout}</h3>
                                   
                                  </Link>
                            
                        </div>
                        );

                      })}  

            
          </div> 
              
               
                
          </div>

       </div>
    );
  }
   
  export default Workouts;