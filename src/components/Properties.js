import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import Sidebar from "./Sidebar";
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

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="properties">
      <Alert message={alert.message} />
      <Sidebar />
      {properties.map((response) => (
        <div key={response._id} className="item">
          <PropertyCard {...response} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
