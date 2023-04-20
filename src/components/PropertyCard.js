import React from "react";
import "../styles/property-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PropertyCard = (props) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = props;
  return (
    <div className="property-card">
      <FontAwesomeIcon icon="house" />
      <div className="property-title">{title}</div>
      <div className="property-city">
        {type} - {city}
      </div>
      <div className="property-bathrooms">{bathrooms}</div>
      <FontAwesomeIcon icon="bath" />
      <div className="property-bedrooms">{bedrooms}</div>
      <FontAwesomeIcon icon="bed" />
      <div className="property-price">{price}</div>
      <div className="property-email">
        <FontAwesomeIcon icon="envelope" />
        <p>
          <a href={`mailto:${email}`}>Send email</a>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
