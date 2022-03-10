import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from 'react-router-dom';
import FilterExercises from "../components/FilterExercises";
import Addingexer from "../components/Addingexer";

//import { Link } from "react-router-dom";
 


function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [exerData,setExerData] = useState([]);

  const getAllExercises = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/exercises`)
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
                <div className="ProjectCard" key={exercise._id} >
                <h3>{exercise.nameOfExercise}</h3>
              <p>{exercise.description}</p>
              <h5>{exercise.category}</h5>

        <Link to={`/exercises/${exercise._id}`}>

                              <h3 className="Addbutn">Add</h3>
                                  </Link>
                             
                </div>
              );

      })} 

  </div>

</div>
      
     
    );
  }
   
  export default Exercises;