import React from "react";
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
import PropertyCard from "./PropertyCard";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Properties />
                <PropertyCard
                  title=" 6 bedroom family property"
                  type="House"
                  bathrooms="3"
                  bedrooms="6"
                  price="£500,000"
                  city="Manchester"
                  email="tom@gmail.com"
                />
              </>
            }
          />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </div>
    </Router>
  );
};

library.add(faHouse, faBath, faBed, faEnvelope);
export default App;
