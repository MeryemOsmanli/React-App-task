import React from "react";
import SingleCard from "../card/SingleCard";

function Cards({ sendData }) {
  //   console.log(sendData);
  return (
    <>
      {sendData.map((x) => {
        return <SingleCard key={x.id} element={x} />;
      })}
    </>
  );
}

export default Cards;
