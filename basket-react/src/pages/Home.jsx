import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MainContext } from "../context/MainProvider";
import { WishListContext } from "../context/WishListProvider";

function Home() {
  const [product, setProduct] = useState([]);
  const {
    addBasket,
    removeBasket,
    decreaseBasket,
    getCountFromBasket,
    isExistAddBasket,
  } = useContext(MainContext);

  const { wishList, addwishList, isExistAddwishList } =
    useContext(WishListContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((data) => setProduct(data))
    );
  }, []);

  return (
    <div>
      Home
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {product.map((x) => (
          <div key={x.id} style={{ width: "23%", border: "1px solid black" }}>
            <div onClick={() => addwishList(x)}>
              {" "}
              {isExistAddwishList(x) ? (
                <i className="fa-solid fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </div>
            <img src={x.image} alt="" width={"100%"} />
            <div>{x.title} </div>
            <div>{x.price}</div>

            {isExistAddBasket(x) ? (
              <>
                <button> {getCountFromBasket(x)}</button>
                <button onClick={() => removeBasket(x)}>x</button>
                <button onClick={() => addBasket(x)}>+</button>
                <button onClick={() => decreaseBasket(x)}>-</button>
              </>
            ) : (
              <>
                <button onClick={() => addBasket(x)}>Add Basket</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
