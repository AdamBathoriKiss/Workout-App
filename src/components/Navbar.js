import mainlogo from '../images/mainlogo.png';



function Navbar(props) {
    return (
      <nav className="Navbar">
      
          <img src={mainlogo} className="navImage"></img>
          

          <div className='Links'>
              <a href={'login'}>
              <button className="login" role="button">Login</button>
              </a>

              <a href={'signup'}>
              <button className="signup" role="button">Signup</button>
              </a>
 

          </div>  

      </nav>
    );
  }
   
  export default Navbar;