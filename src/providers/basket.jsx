import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState({
    items: [
      {
        id: 1,
        name: "sabonete",
        price: 1,
        quantity: 1,
        subTotal: 1,
      },
    ],
    total: 1,
  });

  const calculateTotal = () => {
    setBasket((prevBasket) => {
      const newBasket = { ...prevBasket };

      newBasket.total = newBasket.items.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.subTotal;
      }, 0);

      localStorage.setItem("basket", JSON.stringify(newBasket));

      return newBasket;
    });
  };

  const addItem = ({ name, price, quantity }) => {
    const newBasket = { ...basket };
    newBasket.items.push({
      id: newBasket.items.length + 1,
      name,
      price: Number(price),
      quantity: Number(quantity),
      subTotal: Number(price) * Number(quantity),
    });

    setBasket(newBasket);
    calculateTotal();
  };

  const updateItem = ({ id, name, price, quantity }) => {
    const newBasket = { ...basket };
    newBasket.items.map((item) => {
      if (item.id === id) {
        item.name = name;
        item.price = Number(price);
        item.quantity = Number(quantity);
        item.subTotal = Number(price * quantity);
      }
    });

    setBasket(newBasket);
    calculateTotal();
  };

  const deleteItem = ({ id }) => {
    setBasket((prevBasket) => ({
      ...prevBasket,
      items: prevBasket.items.filter((item) => item.id !== id),
    }));
    calculateTotal();
  };

  const resetBasket = () => {
    setBasket({
      items: [],
      total: 0,
    });
  };

  useEffect(() => {
    const basket = localStorage.getItem("basket");

    if (basket) {
      setBasket(JSON.parse(basket));
      calculateTotal();
    }
  }, []);

  return (
    <BasketContext.Provider
      value={{
        ...basket,
        addItem,
        updateItem,
        deleteItem,
        resetBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}
