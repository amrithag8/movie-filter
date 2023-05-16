import { Link } from "react-router-dom";
import "../Login/Login.css";
export const Signup=()=>{
    return(
        <div className="login-page">
        <h2>Sign Up</h2>
        <form className="form-page">
          <div className="username">
            <input
              type="text"
              name="username"
              placeholder="Email or Phone Number"
            />
          </div>

          <div className="password">
            <input type="password" name="password" placeholder="Password" />
          </div>

          <div className="password">
            <input type="password" name="password" placeholder="Confirm Password" />
          </div>

          

          <button type="submit">Sign Up</button>

          <Link to="/login"><p className="sign-up">Already have an account? Go to Login.</p></Link>
          </form>
          </div>
    )
}