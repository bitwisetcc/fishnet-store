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
      setProds((prevProds) => [...prevProds].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (params.sort === "za") {
      setProds((prevProds) => [...prevProds].sort((a, b) => b.name.localeCompare(a.name)));
    }
  }, [params.sort]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

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
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-slate-50">
          {prods.map((prod, index) => (
            <ProductPreview product={prod} key={`${prod.id}-${index}`} />
          ))}
        </section>
        {loading && (
          <div>
            <img src="/static/loading.gif" width={40} height={40} alt="Loading..." />
          </div>
        )}
        <button 
          onClick={loadMore} 
          className="mt-5 px-4 py-2 bg-white-500 border border-black text-black rounded hover:bg-black hover:text-white"
          disabled={loading}
        >
          Ver mais
        </button>
      </div>
    </article>
  );
};
