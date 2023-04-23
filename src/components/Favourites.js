import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Alert from "./Alert";
import FavouriteCard from "./FavouriteCard";

const Favourites = ({ _id, title }) => {
  const [favourites, setFavourites] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/Favourite/?populate=propertyListing")
      .then(({ data }) => {
        setFavourites(data);
      })
      .catch(() =>
        setAlert({
          message: "Server error. Please come back later =(",
          isSuccess: false,
        })
      );
  }, []);

  return (
    <div className="favourites">
      <Alert message={alert.message} success={alert.isSuccess} />
      Favourites Page test
      {title}
      <Sidebar />
      {favourites.map((response) => (
        <div key={response._id} className="item">
          <FavouriteCard {...response} />
          <div>{_id} </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
