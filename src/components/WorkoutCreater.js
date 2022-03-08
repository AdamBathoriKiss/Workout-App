import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 
const API_URL = "http://localhost:5005";

function WorkoutCreater(props) {

 
    const [nameOfWorkout, setnameOfWorkout] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
   
    const navigate = useNavigate();
    

    const handleName = (e) => setnameOfWorkout(e.target.value);
   
    
    const handleWorkout = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = { nameOfWorkout };
     
        // Make an axios request to the API
        // If POST request is successful redirect to login page
        // If the request resolves with an error, set the error message in the state
        axios.post(`${API_URL}/reg/register`, requestBody)
          .then((response) => {
            navigate('/workouts');
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
      };


    return (

      <div className="Workoutform">
              <form onSubmit={handleWorkout}>
               
                <div className="form-group">
                    <label>Workout name</label>
                    <input type="text" className="form-control" placeholder="Chest day"  value={nameOfWorkout}
          onChange={handleName} />
                </div>
         
                <button type="submit" className="btn btn-primary btn-block" >Create</button>

                { errorMessage && <p className="error-message">{errorMessage}</p> }
              
                
            </form>


      </div>
    );
  }
   
  export default WorkoutCreater;