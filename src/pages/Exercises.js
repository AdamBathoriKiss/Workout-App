import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const API_URL = "http://localhost:5005";

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [buttonType, setButtonType] = useState([]);

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

 

 

    return (
      <div className="ExercisesPage">

        <div className="Bodyparts">

          <ul>

              <li>Chest</li>
              <li>Biceps</li>    
              <li>Triceps</li>
              <li>Shoulders</li>
              <li>Abs</li>
              <li>Legs</li>

          </ul>

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