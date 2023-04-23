import React from "react";
import axios from "axios";

const FavouriteCard = ({ _id, propertyListing }) => {
  const handleDeleteFavourite = () => {
    axios.delete(`http://localhost:4000/api/v1/Favourite/${_id}`);
  };
  return (
    <div className="favourite-card">
      <div> {propertyListing._id} </div>
      <div>{propertyListing.title} </div>
      <div>{propertyListing.city} </div>
      <div> {propertyListing.price} </div>
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
