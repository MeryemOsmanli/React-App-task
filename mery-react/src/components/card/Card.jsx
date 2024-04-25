import React from "react";

function Card({ name, description }) {
  //   const { name, description } = props;
  return (
    <div>
      <div className="box">
        {/* <p>{}</p> */}
        {/* <h1>{props.name}</h1> */}
        <h1>{name}</h1>
        {/* <p>{props.description}</p> */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
