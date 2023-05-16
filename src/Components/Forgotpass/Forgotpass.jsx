import { Link } from "react-router-dom";
import "../Login/Login.css";
export const Forgotpass=()=>{
    return(
<div className="login-page">
        <h2>Reset Password</h2>
        <form className="form-page">

          <div className="password">
            <input type="password" name="password" placeholder="Password" />
          </div>

          <div className="password">
            <input type="password" name="password" placeholder="Confirm Password" />
          </div>

          

          <button type="submit">Reset Password</button>

          <Link to="/login"><p className="sign-up">Back to Login.</p></Link>
          </form>
          </div>
    )
}