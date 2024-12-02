"use client";

import CartItems from "@/app/components/CartItems";
import CartSummary from "@/app/components/CartSummary";
import { listCartItems, removeFromCart } from "@/app/lib/cart";
import { getProductById } from "@/app/lib/query";
import { useEffect, useState } from "react";

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

    return () => abortController.abort();
  }, []);

  const handleRemoveFromCart = (productId) => {
    setProds((prev) =>
      prev.filter((item) => {
        if (item.id === productId) {
          removeFromCart(productId);
          return false;
        }
        return true;
      }),
    );
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

  const subtotal = calculateTotal();
  const tax = subtotal * 0.05;
  const shipping = subtotal > 0 ? 29.99 : 0;

  return (
    <section className="gap-16 p-5 lg:mr-16 lg:flex">
      <CartItems
        prods={prods}
        onConfirmRemove={handleConfirmRemove}
        onRemove={handleRemoveFromCart}
      />
      <CartSummary subtotal={subtotal} tax={tax} shipping={shipping} follow />
    </section>
  );
}
