import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Alert from "./Alert";
import FavouriteCard from "./FavouriteCard";

const Favourites = (userID) => {
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

  const handleDeleteFavourite = (_id) => {
    axios.delete(`http://localhost:4000/api/v1/Favourite/${_id}`).then(() => {
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
    });
    // .catchfor delete
  };

  if (!userID) return <p> Please sign in to view your favourites! </p>;

  return (
    <div className="favourites">
      <Alert message={alert.message} success={alert.isSuccess} />
      Favourites Page
      <Sidebar />
      {favourites.map((response) => (
        <div key={response._id} className="item">
          <FavouriteCard {...response} onDelete={handleDeleteFavourite} />
        </div>
      ))}
    </div>
  );
};

export default Favourites;
