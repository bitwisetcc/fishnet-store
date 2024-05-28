"use client";

import Image from "next/image";
import { getProductById, listAllProducts } from "../../lib/query";
import { useParams } from "next/navigation";
import Options from "@/app/components/Options";
import { useState } from "react";

export default () => {
  const { id } = useParams();
  const prod = getProductById(id);

  const prods = listAllProducts();
  return prod === undefined ? (
    <h1>Produto não encontrado</h1>
  ) : (
    <section className="grid grid-cols-3 place-content-center h-full gap-16 p-8 pr-12">
      <ProductOverview prod={prod} />
      <Image
        src={prod.img}
        alt={prod.name}
        width={500}
        height={500}
        className="rounded-lg shadow-lg shadow-stone-300 border border-stone-500"
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
          <p>{prod.scientificName}</p>
        </li>
      </ul>
    </article>
  );
}

function ProductOptions({ prod }) {
  let sizeState = useState(prod.sizes[0]);
  return (
    <article>
      <h2 className="text-2xl mb-3">Opções</h2>
      <div>
        <h3 className="text-lg mb-2">Tamanho</h3>
        <Options options={prod.sizes} state={sizeState} />
      </div>
    </article>
  );
}
