import React from "react";
import "./card-list.style.css";

import CardDetail from "../card/card.component";

const cardlist = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <CardDetail key={monster.id} monster={monster}></CardDetail>;
      })}
    </div>
  );
};

export default cardlist;
