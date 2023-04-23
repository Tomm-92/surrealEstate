import React, { useState } from "react";
import "../styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHouse,
  faBed,
  faBath,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  const [userID, setUserID] = useState("");
  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  const handleLogout = () => {
    window.FB.logout(setUserID(""));
  };

  return (
    <Router>
      <div className="App">
        <NavBar userID={userID} onLogin={handleLogin} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Properties userID={userID} />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </Router>
  );
};

library.add(faHouse, faBath, faBed, faEnvelope);
export default App;
