import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";



function Addingexer (props) {
  
  const [workoutState, SetWorkoutState] = useState("");

  return (
    <div className="container p-5">
    <select
      className="custom-select"
      value={workoutState}
      onChange={(e) => {
        const selectedWorkout = e.target.value;
        SetWorkoutState(selectedWorkout);
      }}
    >
      <option value="chest">Chest</option>
      <option value="back">Back</option>
      <option value="legs">Legs</option>
    </select>
    {workoutState}
 
 
      <Link to="/exercises">
        <button>Back to Exercises</button>
      </Link>
    </div>
   
  );
}

export default Addingexer;
