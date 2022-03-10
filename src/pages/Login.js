import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context';
 


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    
    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);
   
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
   
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };
     
        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
          .then((response) => {
          // Request to the server's endpoint `/auth/login` returns a response
          // with the JWT string ->  response.data.authToken
            console.log('JWT token', response.data.authToken );

            storeToken(response.data.authToken); 
            authenticateUser();  
            navigate('/');                                
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
      };

    return (
      <div className="LoginPage">
          <form onSubmit={handleLoginSubmit}>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email}
          onChange={handleEmail}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"  value={password}
          onChange={handlePassword}/>
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                
            </form>

            { errorMessage && <p className="error-message">{errorMessage}</p> }
            <p>Don't have an account yet?</p>
            <Link to={"/signup"}> Sign Up</Link>

      </div>
    );
  }
   
  export default Login;