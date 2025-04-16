import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart'); //ahiya jo koi already save product hase to ae retrive ksrse 
    return savedCart ? JSON.parse(savedCart) : []; //if save product hase to ae return karse ny to empty array
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product, quantity = 1) => {
    console.log("Adding product to cart ==", product);
    console.log("Product ID ==", product._id);

    setCart(prevCart => {
      //prevcart means current state ma je values che ae
      const existingItemIndex = prevCart.findIndex(item => item.id === product._id);
      console.log("Existing pro index == ", existingItemIndex);
      //findindex ne jo product male to ae index (0,1,2..) return kare ny to -1
      if (existingItemIndex !== -1) {
        //update quantity existing product ni quantity vadhare che
        const newCart = [...prevCart];  //spread operator 
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newCart[existingItemIndex].quantity + quantity
        };
        return newCart;
      } else {
        //add new product with prevcart 
        return [...prevCart, {
          ...product,
          id: product._id,
          quantity //by default 1
        }];
      }
    });
  };


  // ahiya filter karse setcart data ne badhi j item.id hold karse je productid sathe match nathi thati and productid ne remove karse
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update product quantity
  const updateQuantity = (productId, newQuantity) => {
    console.log("Updating product ID:", productId, "to quantity:", newQuantity);

    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      return prevCart.map(item => {
        console.log("comparing item id =", item.id, "with productId =", productId);
        return item.id === productId ? { ...item, quantity: newQuantity } : item;
      });
    });
  };

  //calculate total price
  //reduce javascript fun che je array par loop chalave and 1 value return karse 
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get number of items in cart
  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotal,
      getItemCount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};