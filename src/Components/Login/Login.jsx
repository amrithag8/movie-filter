import "./Login.css";
import ProtectedRoute from "../ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      e.target.username.value === "test" &&
      e.target.password.value === "test"
    ) {
      login();
      navigate("/"); 
    } else {
      alert("Invalid username/password");
    }
  };

  return (
    <div className="login">
      <div className="login-page">
        <h2>Sign In</h2>
        <form className="form-page" onSubmit={(e) => formSubmitHandler(e)}>
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

          <button type="submit">Sign In</button>

          <Link to="/forgotpass"><p className="forgot-pass">Forgot Pasword?</p></Link>
          <Link to="/signup"><p className="sign-up">New to Debug Media? Sign up now.</p></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
