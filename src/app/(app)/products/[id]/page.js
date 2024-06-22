"use client";

import Image from "next/image";
import { getProductById } from "../../../lib/query";
import { useParams } from "next/navigation";
import Options from "../../components/Options";
import { useEffect, useState } from "react";
import { price } from "@/app/lib/format";
import { addCartItem, ensureCart } from "@/app/lib/cart";
import Counter from "../../components/Counter";

export default () => {
  const { id } = useParams();
  const [prod, setProd] = useState(undefined);

  useEffect(() => {
    getProductById(id).then((p) => setProd(p));
  }, []);

  return prod === undefined ? (
    <h1>Produto não encontrado</h1>
  ) : (
    <section className="lg:grid grid-cols-3 place-content-center h-full gap-16 p-8 pr-12">
      <ProductOverview prod={prod} />
      <Image
        src={prod.img}
        alt={prod.name}
        width={500}
        height={500}
        className="rounded-lg shadow-lg shadow-stone-300 border border-stone-500 mt-2"
        priority
      />
      <ProductOptions prod={prod} />
    </section>
  );
};

function ProductOverview({ prod }) {
  return (
    <article>
      <h2 className="text-lg text-stone-400 mb-3">{prod.category}</h2>
      <h1 className="text-3xl mb-3">{prod.name}</h1>
      <p className="text-sm text-stone-700 leading-6">{prod.description}</p>

      <hr className="my-6" />

      <ul className="product-description">
        <li>
          <h4>Nome científico</h4>
          <p className="italic">{prod.scientificName}</p>
        </li>
        <li>
          <h4>Alimentação</h4>
          <p>{prod.feeding}</p>
        </li>
        <li>
          <h4>Tamanho de tanque</h4>
          <p>{prod.tankSize}</p>
        </li>
      </ul>
    </article>
  );
}

function ProductOptions({ prod }) {
  let sizeState = useState(prod.sizes[0]);
  let [size] = sizeState;
  let quantityState = useState(1);
  let [quantity] = quantityState;

  let [done, setDone] = useState(false);

  function addToCart() {
    ensureCart();
    addCartItem(prod.id, size, quantity);
    setDone(true);
  }

  return (
    <article className="mt-10">
      <h2 className="text-2xl mb-3">Opções</h2>
      <div>
        <h3 className="text-lg mb-2">Tamanho</h3>
        <Options options={prod.sizes} state={sizeState} />
      </div>

      <hr className="my-5" />

      <div className="flex justify-between items-center">
        <span className="text-xl font-semibold">{price(prod.price)}</span>
        <Counter state={quantityState} max={prod.quantity} />
      </div>

      <hr className="my-5" />

      {prod.warning && (
        <>
          <div className="bg-yellow-100 border border-yellow-500 p-4 rounded-lg">
            <p className="text-yellow-700 font-semibold mb-2">Atenção</p>
            <p className="text-yellow-600">{prod.warning}</p>
          </div>
          <hr className="my-5" />
        </>
      )}

      <button
        disabled={prod.quantity <= 0 || done}
        className="secondary buy text-stone-100 bg-slate-900 inline w-full"
        onClick={addToCart}
      >
        Adicionar ao carrinho
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-6 ml-3 inline transition-opacity duration-500 ${
          done ? "opacity-80" : "opacity-0"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </article>
  );
}
