import React from "react";
import "./card.style.css";

export default (props) => {
  return (
    <div className="card-container">
      <img
        alt={props.monster.name}
        src={`https://robohash.org/${props.monster.id}?size=180x180&set=set2`}
      ></img>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
