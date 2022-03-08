import mainlogo from '../images/mainlogo.png';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context";


function Navbar() {
  const { 
    isLoggedIn,
    user,                   // <== UPDATE
    logOutUser              // <== UPDATE
  } = useContext(AuthContext);

    return (
      <nav className="Navbar">
      
          <img src={mainlogo} className="navImage"></img>

            <div className='Navelements'>

              {isLoggedIn && (
        <>
          <Link to="/">
            Homepage
          </Link> 
          <Link to="/Exercises">
            Exercises
          </Link>
          <Link to="/Workouts">
            Workouts
          </Link>                
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button className="signup" role="button">Signup</button> </Link>
          <Link to="/login"> <button className="login" role="button">Login</button> </Link>
        </>
      )} 

</div>
      </nav>
    );
  }
   
  export default Navbar;