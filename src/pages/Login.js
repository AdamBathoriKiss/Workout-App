
function Login() {
    return (
      <div className="LoginPage">
          <form>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
                
            </form>

      </div>
    );
  }
   
  export default Login;