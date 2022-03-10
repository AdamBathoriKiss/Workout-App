import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = "http://localhost:5005";

function Addingexer (props) {


    const [exername, setExername] = useState('All');
      console.log(props);
    const handleSelect = e => {
      setExername(e.target.value);
      props.filterExercises(e.target.value);
      console.log('selected', e.target.value);
    };
  

  return (
      <div className="Addpage">
    <div className="AddEx">
      <label>Select Exercises:</label>
      <select value={exername} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Chest">Chest</option>
        <option value="Triceps">Triceps</option>
        <option value="Biceps">Biceps</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Back">Back</option>
        <option value="Legs">Legs</option>
        <option value="Abs">Abs</option>
      </select>

      <Link to="/exercises">
        <button>Back to Exercises</button>
      </Link>
    </div>
    </div>
  );
}

export default Addingexer;
