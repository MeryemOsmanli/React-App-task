import React from "react";
import { useContext } from "react";
import { MainContext } from "../context/MainProvider";

function BasketProfile() {
  const { basket, addBasket, decreaseBasket, removeBasket, getTotal } =
    useContext(MainContext);
  return (
    <div>
      <h1>BasketProfile</h1>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {basket.map((x) => (
          <div key={x.id} style={{ width: "23%", border: "1px solid black" }}>
            <img src={x.image} alt="" width={"100%"} />
            <div>{x.title} </div>
            <div>{x.price}</div>
            <div>count :{x.count}</div>
            <button onClick={() => removeBasket(x)}>x</button>
            <button onClick={() => addBasket(x)}>+</button>
            <button onClick={() => decreaseBasket(x)}>-</button>
          </div>
        ))}
      </div>
      <div>Total:{getTotal()}</div>
    </div>
  );
}

export default BasketProfile;
