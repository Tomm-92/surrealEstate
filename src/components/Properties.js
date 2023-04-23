import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import Sidebar from "./Sidebar";
import "../styles/properties.css";

const Properties = ({ userID }) => {
  const initialState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);
  const { search } = useLocation();

  const handleSaveProperty = (propertyId) => {
    setAlert({ message: "", isSuccess: false });
    axios
      .post("http://localhost:4000/api/v1/Favourite", {
        propertyListing: propertyId,
        fbUserId: userID,
      })
      .then(() => {
        setAlert({
          message: "Property saved to your favourites",
          isSuccess: true,
        });
      })
      .catch(() =>
        setAlert({
          message: "Server error. Please come back later =(",
          isSuccess: false,
        })
      );
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then(({ data }) => {
        setProperties(data);
      })
      .catch(() =>
        setAlert({
          message: "Server error. Please come back later =(",
        })
      );
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({
          message: "Server error. Please come back later =(",
        })
      );
  }, [search]);

  return (
    <div className="properties">
      <Alert message={alert.message} />
      <Sidebar />
      {properties.map((response) => (
        <div key={response._id} className="item">
          <PropertyCard
            userID={userID}
            {...response}
            onSaveProperty={handleSaveProperty}
          />
        </div>
      ))}
    </div>
  );
};

export default Properties;
