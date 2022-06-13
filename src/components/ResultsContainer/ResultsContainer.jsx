import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultsContainer.css";

const ResultsContainer = ({ suggestedNames }) => {
  const suggestedNameJSX = suggestedNames.slice(0, 15).map((name) => {
    return <NameCard key={name} name={name}></NameCard>;
  });
  return <div className="results-container">{suggestedNameJSX}</div>;
};

export default ResultsContainer;
