"use client";

import { useParams } from "next/navigation";
import ProductPreview from "../components/ProductPreview";
import { useEffect } from "react";

import { listAllProducts } from "../../lib/query";

export default () => {
  let prods = listAllProducts();

  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);

  if (params.sort == "az") prods.sort((a, b) => a.name < b.name);
  if (params.sort == "za") prods.sort((a, b) => a.name > b.name);

  return (
    <article className="md:flex h-full bg-slate-50 p-7 md:p-12 lg:p-16">
      <aside className="md:border-b-0 md:border-r md:pr-12 border-stone-200 text-stone-600 min-w-fit">
        <ul className="text-sm flex flex-col gap-3">
          <li>
            <a href="/products?sort=last" className="text-stone-900">
              Lançamento
            </a>
          </li>
          <li>
            <a href="/products?sort=az">Alfabético A-Z</a>
          </li>
          <li>
            <a href="/products?sort=za">Alfabético Z-A</a>
          </li>
        </ul>
      </aside>
      <hr className="md:hidden border-stone-200 my-5" />
      <div className="md:pl-10">
        <h1 className="col-span-4 text-3xl text-stone-800 font-semibold mb-5">
          Produtos
        </h1>
        <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 bg-slate-50">
          {prods.map((prod) => (
            <ProductPreview product={prod} />
          ))}
        </section>
      </div>
    </article>
  );
};
