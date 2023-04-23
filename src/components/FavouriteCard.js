import React from "react";
import axios from "axios";

const FavouriteCard = ({ propertyListing, _id, title, price, city }) => {
  const handleDeleteFavourite = () => {
    axios.delete(
      `http://localhost:4000/api/v1/Favourite/644526c94d7cd867b8199044`
    );
    console.log(propertyListing);
    console.log(_id);
  };
  return (
    <div className="favourite-card">
      <div> {_id} </div>
      <div>{title} </div>
      <div>{city} </div>
      <div> {price} </div>
      <button
        onClick={handleDeleteFavourite}
        type="submit"
        className="remove-favourite__submit-button"
      >
        Remove Favourite
      </button>
    </div>
  );
};

export default FavouriteCard;
