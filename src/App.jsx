import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Errorpage } from "./Pages/ErrorPage";
import ProtectedRouteLoggedIn from "./Components/ProtectedRouteLoggedIn";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import "./App.css";
import { useNavigate, Navigate } from "react-router-dom";
import { Signuppage } from "./Pages/Signuppage";
import { Forgotpasspage } from "./Pages/Forgotpasspage";
import { Emailcheckpage } from "./Pages/Emailcheckpage";
import { Moviedetailspage } from "./Pages/Moviedetailspage";

function App() {
  return (
    <div className="App-container">
      <div className="header-home-container">
        <Header />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Homepage />} />
          </Route>

          <Route element={<ProtectedRouteLoggedIn />}>
            <Route path="/login" element={<Loginpage />} />
            <Route path="/signup" element={<Signuppage/>}/>
            <Route path="/forgotpass" element={<Emailcheckpage/>}/>
          <Route path="/resetpass" element={<Forgotpasspage/>}/>
          </Route>

          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage/>}/>
          <Route path="/forgotpass" element={<Emailcheckpage/>}/>
          <Route path="/resetpass" element={<Forgotpasspage/>}/>
          <Route path="/movie/:id" element={<Moviedetailspage/>}/>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </div>
      
      
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
