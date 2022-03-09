import { useState, useEffect } from "react";
import axios from "axios";
import FilterExercises from "../components/FilterExercises";

//import { Link } from "react-router-dom";
 
const API_URL = "http://localhost:5005";

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [exerData,setExerData] = useState([]);

  const getAllExercises = () => {
    axios
      .get(`${API_URL}/api/exercises`)
      .then((response) => { 
        setExercises(response.data)
        setExerData(response.data)
       })
      .catch((error) => console.log(error));
  };
  const filterExerciseList = str => {
    let exerciseCopy = [...exercises];
    let filteredExercise;
    console.log(str, 'String inside');
    if(str === 'All'){
      filteredExercise = exerciseCopy; 
    }else {
      filteredExercise = exerciseCopy.filter(exercise => {
        return exercise.category === str;
      });
    }

    setExerData(filteredExercise);

  }
  
  useEffect(() => {
    getAllExercises();
    
  }, [] );



    return (
      <div className="ExercisesPage">
 <FilterExercises filterExercises={filterExerciseList}/>   
        <div className="ExercisesList">

          
     {exerData.map((exercise) => {
              return (
                <div className="ProjectCard card" key={exercise._id} >
                <h3>{exercise.nameOfExercise}</h3>
              <p>{exercise.description}</p>
              <p>{exercise.category}</p>
                <button>Add</button>
                </div>
              );

      })} 

  </div>

</div>
      
     
    );
  }
   
  export default Exercises;