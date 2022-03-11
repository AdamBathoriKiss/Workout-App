import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
 


function WorkoutCreater(props) {

 
    const [nameOfWorkout, setnameOfWorkout] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
   
    const navigate = useNavigate();
    

    const handleName = (e) => setnameOfWorkout(e.target.value);
   
    
    const handleWorkout = (e) => {
        e.preventDefault();
    
        const requestBody = { nameOfWorkout, exercises, numberOfReps, sets };
     
        axios.post(`${process.env.REACT_APP_API_URL}/api/register`, requestBody)
        .then(() => navigate("/workouts"))
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
           <label>Exercise name</label>
                    <input type="text" className="form-control" placeholder="Push up"  value={exercises}
          onChange={handleName} />
          <label>Number of Reps:</label>
        <input type="number" className="form-control" placeholder="4" value={numReps} onChange={numberOfReps} />

        <label>Number of Sets:</label>
        <input type="number" className="form-control" placeholder="4" value={numSets} onChange={sets} />
                </div>
         
                <button type="submit" className="btn btn-primary btn-block" >Create</button>

                { errorMessage && <p className="error-message">{errorMessage}</p> }
              
                
            </form>


      </div>
    );
  }
   
  export default WorkoutCreater;