
function Signup() {
    return (
      <div className="SignupPage">
          <form>
                <h3>Signup</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>
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
                <button type="submit" className="btn btn-primary btn-block">Signup</button>
                
                <h5>All fields are mandatory!</h5>
                
            </form>

            

      </div>
    );
  }
   
  export default Signup;