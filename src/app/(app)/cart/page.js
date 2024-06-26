"use client";

import { getProductById } from "@/app/lib/query";
import { useEffect, useState } from "react";
import CartSummary from "../components/CartSummary";
import {
  ensureCart,
  removeFromCart,
  addCartItem,
  listCartItems,
} from "@/app/lib/cart";
import CartItems from "../components/CartItems";

export default function CartPage() {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchCartItems = async () => {
      try {
        const cartItems = await listCartItems(signal); // Fetch cart items
        const fullCartItems = await Promise.all(
          cartItems.map(async (item) => {
            const product = await getProductById(item.id);
            return { ...product, ...item };
          }),
        );
        setProds(fullCartItems || []); // Ensure fullCartItems is an array
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();

    return () => {
      abortController.abort(); // Cancels the request when the component is unmounted
    };
  }, []);

  const handleAddToCart = (productId, size, quantity) => {
    getProductById(productId).then((prod) => {
      const productToAdd = {
        id: productId,
        name: prod.name,
        quantity: quantity,
        price: prod.price,
        img: prod.img,
      };
      setProds((prevProds) => {
        const existingItem = prevProds.find((item) => item.id === productId);
        if (existingItem) {
          return prevProds.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        } else {
          return [...prevProds, productToAdd];
        }
      });
      addCartItem(productId, size, quantity);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setProds((prevProds) => {
      const updatedProds = prevProds
        .map((item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null; // Flag for removal
            }
          }
          return item;
        })
        .filter(Boolean); // Remove flagged items
      if (!updatedProds.find((item) => item.id === productId)) {
        removeFromCart(productId);
      }
      return updatedProds;
    });
  };

  const handleConfirmRemove = (productId) => {
    setProds((prevProds) => {
      const updatedProds = prevProds.filter((item) => item.id !== productId);
      removeFromCart(productId); // Remove from backend or cart storage
      return updatedProds;
    });
  };

  const calculateTotal = () => {
    return prods
      ? prods.reduce((total, prod) => total + prod.price * prod.quantity, 0)
      : 0;
  };

  return (
    <section className="gap-16 p-5 lg:mr-16 lg:flex">
      <CartItems prods={prods} onConfirmRemove={handleConfirmRemove} onRemove={handleRemoveFromCart} />
      <CartSummary subtotal={calculateTotal()} follow />
    </section>
  );
}

// Assuming price function is defined elsewhere
function price(amount) {
  // Implement your price formatting logic here
  return `$${amount.toFixed(2)}`;
}
