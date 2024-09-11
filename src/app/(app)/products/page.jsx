"use client";

import { price } from "@/app/lib/format";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ProductPreview from "@/app/components/ProductPreview";
import { listAllProducts, getProductByFilter } from "@/app/lib/query";

export default function ProductPage() {
  const [prods, setProds] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const params = useParams();
  const PRODUCTS_PER_PAGE = 20;

  const loadProducts = useCallback(async (page, limit) => {
    setLoading(true);
    let data;
    if (Object.keys(filters).length > 0) {
      data = await getProductByFilter(filters);
    } else {
      data = await listAllProducts(page, limit);
    }
    setProds((prevProds) => [...prevProds, ...data]);
    setLoading(false);
  }, [filters]);

  useEffect(() => {
    loadProducts(1, PRODUCTS_PER_PAGE); // Load first batch
  }, [loadProducts]);

  useEffect(() => {
    if (page > 1) {
      loadProducts(page, PRODUCTS_PER_PAGE);
    }
  }, [page, loadProducts]);

  useEffect(() => {
    // Sort products based on params
    if (params.sort) {
      const sortedProds = [...prods].sort((a, b) => {
        if (params.sort === "az") return a.name.localeCompare(b.name);
        if (params.sort === "za") return b.name.localeCompare(a.name);
      });
      setProds(sortedProds);
    }
  }, [params.sort, prods]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  const handleFilterChange = (newFilter) => {
    setPage(1); // Reset page on filter change
    setProds([]); // Clear products
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilter })); // Update filters
  };

  return (
    <div className="h-full bg-slate-50 p-7 md:flex md:p-12 lg:p-16">
      <SideBar onFilterChange={handleFilterChange} />
      <hr className="my-5 border-stone-200 md:hidden" />
      <div className="md:pl-10">
        <h1 className="mb-5 text-3xl font-semibold text-stone-800">Produtos</h1>
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
              className="mt-5"
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
    </div>
  );
}

function SideBar({ onFilterChange }) {
  const [maxPrice, setMaxPrice] = useState(250);

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <aside className="w-64 min-w-[16rem] max-w-[16rem] border-stone-200 text-stone-600 md:border-b-0 md:border-r md:pr-12">
      <ul className="flex flex-col gap-3 text-sm">
        <Category
          title="Ambiente"
          items={[
            <button onClick={() => handleFilterClick({ tags: "freshwater" })}>Água doce</button>,
            <button onClick={() => handleFilterClick({ tags: "agua-salgada" })}>Água salgada</button>,
          ]}
        />
        <Category
          title="Alimentação"
          items={[
            <button onClick={() => handleFilterClick({ feeding: "Herb" })}>Herbívoro</button>,
            <button onClick={() => handleFilterClick({ feeding: "Omni" })}>Onívoro</button>,
            <button onClick={() => handleFilterClick({ feeding: "Carn" })}>Carnívoro</button>,
          ]}
        />
        <Category
          title="Valores"
          items={[
            <>
              <label htmlFor="price-range">Preço: {price(maxPrice)}</label>
              <input
                type="range"
                name="price-range"
                id="price-range"
                min={0}
                max={500}
                step={10}
                value={maxPrice}
                onInput={(e) => {
                  setMaxPrice(Number(e.target.value));
                  handleFilterClick({ preco: `ate-${e.target.value}` });
                }}
                className="accent-golden-fish"
              />
            </>,
          ]}
        />
      </ul>
    </aside>
  );
}

function Category({ title, items }) {
  return (
    <>
      <li className="font-semibold text-accent">{title}</li>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
      <hr className="border-stone-200" />
    </>
  );
}
