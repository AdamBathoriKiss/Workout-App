import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
const API_URL = "http://localhost:5005";

function Signup(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
   
    const navigate = useNavigate();
    
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
   
    
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Create an object representing the request body
        const requestBody = { email, password, name };
     
        // Make an axios request to the API
        // If POST request is successful redirect to login page
        // If the request resolves with an error, set the error message in the state
        axios.post(`${API_URL}/auth/signup`, requestBody)
          .then((response) => {
            navigate('/login');
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
      };

    return (
      <div className="SignupPage">
          <form onSubmit={handleSignupSubmit}>
                <h3>Signup</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username"  value={name}
          onChange={handleName} />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email}
          onChange={handleEmail} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password}
          onChange={handlePassword} />
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="btn btn-primary btn-block" >Signup</button>

                { errorMessage && <p className="error-message">{errorMessage}</p> }
                
                <h5>All fields are mandatory!</h5>

                <p>Already have account?</p>
                <Link to={"/login"}> Login</Link>
                
            </form>

            

      </div>
    );
  }
   
  export default Signup;