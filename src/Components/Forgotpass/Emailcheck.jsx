import { Link , useNavigate} from "react-router-dom";
import "../Login/Login.css";
export const Emailcheck=()=>{

    const navigate=useNavigate();
    return(
        <div className="login-page">
        <h2>Reset Password</h2>
        <form className="form-page">
          <div className="username">
            <input
              type="text"
              name="username"
              placeholder="Email or Phone Number"
            />
          </div>
          <button type="submit" onClick={()=>{
            navigate("/resetpass");
          }}>Continue</button>
          <Link to="/login"><p className="sign-up">Back to Login.</p></Link>
          </form>
          </div>
    )
}