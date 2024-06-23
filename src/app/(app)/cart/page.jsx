"use client";

import Image from "next/image";
import { listAllProducts } from "@/app/lib/query";
import { price } from "@/app/lib/format";
import { useEffect, useState } from "react";
import CartSummary from "../components/CartSummary";
// import { ensureCart, removeFromCart } from "@/app/lib/cart";

export default () => {
  let [prods, setProds] = useState([]);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    listAllProducts()
      .then((data) =>
        data.filter(
          (prod) =>
            prod.id == "665df63d63d2f7c6c73305f9" ||
            prod.id == "665df63d63d2f7c6c7330629" ||
            prod.id == "665df63d63d2f7c6c7330619"
        )
      )
      .then((res) => {
        setProds(res);
        setTotal(res.reduce((a, b) => a + b.price * b.quantity, 0));
      });
  }, []);

  return (
    <section className="lg:flex gap-16 p-5 lg:mr-16">
      <CartItems prods={prods} />
      <CartSummary total={total} follow />
    </section>
  );
};

function CartItems({ prods }) {
  // useEffect(() => ensureCart, []);

  return (
    <article className="flex-[3] md:mx-16 mt-10">
      <h1 className="text-2xl font-semibold mb-8">Carrinho</h1>
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="text-sm border-b border-b-stone-300 md:text-base">
            <th className="h-10">Produto</th>
            <th>Quantidade</th>
            <th className="text-end">Total</th>
          </tr>
        </thead>
        <tbody>
          {prods.map((prod) => (
            <CartItem prod={prod} key={prod.id} />
          ))}
        </tbody>
      </table>
    </article>
  );
}

function CartItem({ prod }) {
  // const prod = getProductById(cartItem.id);

  function remove() {
    // removeFromCart(cartItem.id);
    location.reload();
  }

  return (
    <tr className="max-h-10 border-b border-b-stone-300 hover:bg-slate-100 transition-colors duration-300">
      <td className="flex gap-3 md:gap-4 py-3 items-center">
        <Image
          src={prod.img}
          alt={prod.name}
          width={150}
          height={100}
          className="rounded-lg shadow-sm w-20 md:w-36"
          priority
        />
        <div>
          <h3 className="text-sm md:text-base">{prod.name}</h3>
        </div>
      </td>
      <td>
        <div className="ml-3 md:m-0 flex items-center gap-2 w-max">
          <button
            className="text-stone-600 hover:text-stone-700"
            onClick={remove}
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
      {/* <td>{price(prod.price)}</td> */}
      <td>{price(prod.price * prod.quantity)}</td>
    </tr>
  );
}
