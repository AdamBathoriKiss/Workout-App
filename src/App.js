
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Exercises from './pages/Exercises';
import Workouts from './pages/Workouts';
import ErrorPage from './pages/Errorpage';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
     <Navbar />

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/> 
    <Route path="/exercises" element={<Exercises/>}/>
    <Route path="/workouts" element={<Workouts/>}/>  
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>

    </div>
  );
}

export default App;
