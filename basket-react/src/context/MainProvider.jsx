import React from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// contect yarandi
export const MainContext = createContext();

function MainProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);
  function addBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }
  function decreaseBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    const element = basket[index];
    if (element.count > 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }
  function removeBasket(item) {
    setBasket(basket.filter((x) => x.id !== item.id));
  }
  function isExistAddBasket(item) {
    return basket.findIndex((x) => x.id === item.id) !== -1;
  }
  function getCountFromBasket(item) {
    return basket.find((x) => x.id === item.id).count;
  }
  function getTotal() {
    return basket
      .reduce((prev, inital) => prev + inital.price * inital.count, 0)
      .toFixed(2);
  }
  return (
    <>
      <MainContext.Provider
        value={{
          basket,
          addBasket,
          removeBasket,
          decreaseBasket,
          getTotal,
          isExistAddBasket,
          getCountFromBasket,
        }}
      >
        {children}
      </MainContext.Provider>
    </>
  );
}

export default MainProvider;
