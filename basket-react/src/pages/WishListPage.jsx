import React from "react";
import { WishListContext } from "../context/WishListProvider";
import { useContext } from "react";

function WishListPage() {
  const { wishList, addwishList, isExistAddwishList } =
    useContext(WishListContext);
  return (
    <div>
      <h1>WishListPage</h1>

      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {wishList.map((x) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishListPage;
