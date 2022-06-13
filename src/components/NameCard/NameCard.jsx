import React from "react";
import "./NameCard.css";

const NameCard = ({ name }) => {
  const nameCheapURL =
    "https://www.namecheap.com/domains/registration/results/?domain=";
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="card-link"
      href={`${nameCheapURL}${name}`}
    >
      <div className="result-name-card">
        <p className="result-name">{name}</p>
      </div>
    </a>
  );
};

export default NameCard;
