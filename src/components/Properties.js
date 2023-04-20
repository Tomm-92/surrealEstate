import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

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
  return (
    <div className="properties">
      <Alert message={alert.message} />
      {properties.map((response) => (
        <div key={response._id} className="item">
          <PropertyCard {...response} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
