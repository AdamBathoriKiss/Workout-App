import mainlogo from '../images/mainlogo.png';
import { Link } from "react-router-dom";
import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context";


function Navbar() {
  const { isLoggedIn, user } = useContext(AuthContext);

    return (
      <nav className="Navbar">
      
          <img src={mainlogo} className="navImage"></img>

              {isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>        
          <button>Logout</button>
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button className="signup" role="button">Signup</button> </Link>
          <Link to="/login"> <button className="login" role="button">Login</button> </Link>
        </>
      )} 

      </nav>
    );
  }
   
  export default Navbar;