"use client"; // Marca o arquivo como um Client Component

import { useParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import ProductPreview from "../components/ProductPreview";
import { listAllProducts } from "../../lib/query";

export default () => {
  const [prods, setProds] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const PRODUCTS_PER_PAGE = 20;

  const loadProducts = useCallback(async (page, limit) => {
    setLoading(true);
    const data = await listAllProducts(page, limit);
    setProds((prevProds) => [...prevProds, ...data]);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadProducts(1, 10); // Load first 10 products initially
  }, []);

  useEffect(() => {
    if (page > 1) {
      loadProducts(page, PRODUCTS_PER_PAGE);
    }
  }, [page]);

  useEffect(() => {
    // Sort products based on params
    if (params.sort === "az") {
      setProds((prevProds) =>
        [...prevProds].sort((a, b) => a.name.localeCompare(b.name)),
      );
    } else if (params.sort === "za") {
      setProds((prevProds) =>
        [...prevProds].sort((a, b) => b.name.localeCompare(a.name)),
      );
    }
  }, [params.sort]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <article className="h-full bg-slate-50 p-7 md:flex md:p-12 lg:p-16">
      <aside className="min-w-fit border-stone-200 text-stone-600 md:border-b-0 md:border-r md:pr-12">
        <ul className="flex flex-col gap-3 text-sm">
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
          <li>
            <hr className="border-stone-200" />
          </li>
          <li>Água doce</li>
          <li>Água salgada</li>
          <li>
            <hr className="border-stone-200" />
          </li>
          <li>Herbívoro</li>
          <li>Onívoro</li>
          <li>Carnívoro</li>
          <li>
            <hr className="border-stone-200" />
          </li>
          <li>Ofertas</li>
        </ul>
      </aside>
      <hr className="my-5 border-stone-200 md:hidden" />
      <div className="md:pl-10">
        <h1 className="col-span-4 mb-5 text-3xl font-semibold text-stone-800">
          Produtos
        </h1>
        <section className="grid grid-cols-1 gap-10 bg-slate-50 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {prods.map((prod, index) => (
            <ProductPreview product={prod} key={`${prod.id}-${index}`} />
          ))}
        </section>
        {loading && (
          <div>
            <img
              src="/static/loading.gif"
              width={40}
              height={40}
              className="mt-3"
              alt="Loading..."
            />
          </div>
        )}
        <button
          onClick={loadMore}
          className="bg-white-500 mt-5 rounded border border-black px-4 py-2 text-black hover:bg-black hover:text-white"
          disabled={loading}
        >
          Ver mais
        </button>
      </div>
    </article>
  );
};
