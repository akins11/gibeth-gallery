"use client";

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const [itemAmount, setItemAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acummulator, currentItem) => {
      return acummulator + currentItem.price
    }, 0);

    setTotal(total)
  });

  useEffect(() => {

    if (cart) {

      const amount = cart.reduce((acummulator, currentItem) => {
        return acummulator + currentItem.amount
      }, 0);

      setItemAmount(amount)
    }

  }, [cart]);

  // Add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id
    })

    // If item is already in the cart
    if (cartItem) {

      const newCart = [...cart].map((item) => {

        if (item.id === id) {

          return { ...item, amount: cartItem.amount + 1 }

        } else {

          return item

        }

      })

      setCart(newCart);

    } else {

      setCart([...cart, newItem]);

    }
  }

  // Remove item from cart
  const removeFromCart = (id) => {

    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
  }

  // Clear cart
  const clearCart = () => {
    setCart([]);
  }


  return (
    <CartContext.Provider
      value={{
        cart, 
        addToCart, 
        removeFromCart,
        itemAmount,
        total,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;