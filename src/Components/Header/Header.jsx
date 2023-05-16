import "./Header.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const [mode, setMode] = useState("dark");
  const navigate = useNavigate();
  let modeValue = localStorage.getItem("theme");

  useEffect(() => {
    if (modeValue !== "") {
      document.documentElement.setAttribute("data-theme", modeValue);
      setMode(modeValue);
    }
  }, []);

  const changeModeHandler = () => {
    let theme = document.documentElement.dataset.theme;

    if (theme === "light" || modeValue === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      setMode("dark");
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark" || modeValue === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setMode("light");
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <img src="./images/logo.png" alt="" />
        <h1>DebugMedia</h1>
      </div>
      <div className="mode-logout">
        {mode === "dark" ? (
          <i className="fa fa-sun-o" onClick={changeModeHandler}></i>
        ) : (
          <i className="fa fa-moon-o" onClick={changeModeHandler}></i>
        )}

        {localStorage.getItem("token") && (
          <button
            onClick={() => {
              logout();

              navigate("/login");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
