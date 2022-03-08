import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const API_URL = "http://localhost:5005";

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [exerdata,setExerdata] = useState([]);

  const getAllExercises = () => {
    axios
      .get(`${API_URL}/api/exercises`)
      .then((response) => setExercises(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllExercises();
  }, [] );

  const handleSelect = e => {
    setExercises(e.target.value);
 
    console.log('selected', e.target.value);
  };

  const filterExerciseList = str => {
    let filteredExercises;
    
    if (str === 'All') {
      filteredExercises = exercises;
    } else if(str === 'Chest'){
      filteredExercises = exercises.filter(ex => {
        return ex.category === str.category;
      });
    }
  
    setExerdata(filteredExercises);
  };
  

    return (
      <div className="ExercisesPage">

<div className="Bodyparts">
      <label>Show exercises by Bodyparts:</label>
      <select value={exercises} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="Chest">Chest</option>
        <option value="Back">Back</option>
        <option value="Biceps">Biceps</option>
        <option value="Triceps">Triceps</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Legs">Legs</option>
        <option value="Abs">Abs</option>
      </select>
    </div>


        <div className="ExercisesList">

     <div className="Chest">
               
     {exercises.map((exercise) => {
         

              return (
                <div className="ProjectCard card" key={exercise._id} >
                <h3>{exercise.nameOfExercise}</h3>
              <p>{exercise.description}</p>
              <p>{exercise.category}</p>
                
                </div>
              );

      })}  
</div> 

  </div>

</div>
      
     
    );
  }
   
  export default Exercises;