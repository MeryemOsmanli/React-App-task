import React from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// contect yarandi
export const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishList, setwishList] = useLocalStorage("wishList", []);
  function addwishList(item) {
    const index = wishList.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      setwishList(wishList.filter((x) => x.id !== item.id));
    } else {
      setwishList([...wishList, { ...item }]);
    }
  }

  function isExistAddwishList(item) {
    return wishList.findIndex((x) => x.id === item.id) !== -1;
  }

  return (
    <>
      <WishListContext.Provider
        value={{
          wishList,
          addwishList,
          isExistAddwishList,
        }}
      >
        {children}
      </WishListContext.Provider>
    </>
  );
}

export default WishListProvider;
