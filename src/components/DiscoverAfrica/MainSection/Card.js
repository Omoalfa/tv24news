import React from "react";
import "./card.css";

const Card = ({ image, title, content }) => {
  return (
    <div className="main-section-card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="card-caption">
        <h3 className="card-caption-title"> {title} </h3>
        <p className="card-caption-content"> {content} </p>
      </div>
    </div>
  );
};

export default Card;
