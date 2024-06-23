"use client";

import Image from "next/image";
import { getProductById } from "@/app/lib/query";
import { useEffect, useState } from "react";
import CartSummary from "../components/CartSummary";
import { ensureCart, removeFromCart, addCartItem, listCartItems } from "@/app/lib/cart";

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
          })
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
              : item
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
      const updatedProds = prevProds.map((item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; // Flag for removal
          }
        }
        return item;
      }).filter(Boolean); // Remove flagged items
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
    return prods ? prods.reduce((total, prod) => total + prod.price * prod.quantity, 0) : 0;
  };

  return (
    <section className="lg:flex gap-16 p-5 lg:mr-16">
      <CartItems prods={prods} onRemove={handleRemoveFromCart} onConfirmRemove={handleConfirmRemove} />
      <CartSummary subtotal={calculateTotal()} follow />
    </section>
  );
}

function CartItems({ prods, onRemove, onConfirmRemove }) {
  return (
    <article className="flex-[3] md:mx-16 mt-10">
      <h1 className="text-2xl font-semibold mb-8">Carrinho</h1>
      {prods.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="text-sm border-b border-b-stone-300 md:text-base">
              <th className="h-10">Produto</th>
              <th>Quantidade</th>
              <th className="text-end">Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {prods.map((cartItem) => (
              <CartItem
                cartItem={cartItem}
                key={cartItem.id}
                onRemove={(productId) => {
                  if (cartItem.quantity > 1) {
                    onRemove(productId);
                  } else {
                    onConfirmRemove(productId);
                  }
                }}
              />
            ))}
          </tbody>
        </table>
      )}
    </article>
  );
}

function CartItem({ cartItem, onRemove }) {
  return (
    <tr className="max-h-10 border-b border-b-stone-300 hover:bg-slate-100 transition-colors duration-300">
      <td className="flex gap-3 md:gap-4 py-3 items-center">
        <Image
          src={cartItem.img}
          alt={cartItem.name}
          width={150}
          height={100}
          className="rounded-lg shadow-sm w-20 md:w-36"
          priority
        />
        <div>
          <h3 className="text-sm md:text-base">{cartItem.name}</h3>
        </div>
      </td>
      <td>
        <div className="ml-3 md:m-0 flex items-center gap-2 w-max">
          <button
            className="text-stone-600 hover:text-stone-700"
            onClick={() => onRemove(cartItem.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <span>{prod.quantity}</span>
        </div>
      </td>
      <td className="text-end">{price(cartItem.price * cartItem.quantity)}</td>
    </tr>
  );
}

// Assuming price function is defined elsewhere
function price(amount) {
  // Implement your price formatting logic here
  return `$${amount.toFixed(2)}`;
}
