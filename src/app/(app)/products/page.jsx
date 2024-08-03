"use client";

import { price } from "@/app/lib/format";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ProductPreview from "@/app/components/ProductPreview";
import { listAllProducts } from "@/app/lib/query";

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
    <article className="h-full bg-slate-50 p-6 md:flex md:p-12 lg:pr-16">
      <SideBar />

      <hr className="my-5 border-stone-200 md:hidden" />

      <div className="mb-5 md:pl-10">
        <header className="mb-5 flex w-full justify-between">
          <h1 className="text-3xl font-semibold text-stone-800">Produtos</h1>
          <OrderingDropdown />
        </header>

        <section className="grid grid-cols-1 gap-4 bg-slate-50 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

function SideBar() {
  const [maxPrice, setMaxPrice] = useState(250);

  return (
    <aside className="min-w-fit border-stone-200 text-stone-600 md:border-b-0 md:border-r md:pr-12">
      <ul className="flex flex-col gap-3 text-sm">
        <li className="font-semibold text-accent">Ambiente</li>
        <li>Água doce</li>
        <li>Água salgada</li>
        <li>
          <hr className="border-stone-200" />
        </li>
        <li className="font-semibold text-accent">Alimentação</li>
        <li>Herbívoro</li>
        <li>Onívoro</li>
        <li>Carnívoro</li>
        <li>
          <hr className="border-stone-200" />
        </li>
        <li className="font-semibold text-accent">Preços</li>
        <li>Ofertas</li>
        <li>
          <label htmlFor="price-range">Preço: {price(maxPrice)}</label>
          <br />
          <input
            type="range"
            name="price-range"
            id="price-range"
            list="price-marks"
            min={0}
            max={500}
            step={10}
            className="accent-golden-fish"
            onInput={(e) => setMaxPrice(e.target.value)}
          />
        </li>

        <datalist id="price-marks">
          <option value="0">R$0</option>
          <option value="250">R$250</option>
          <option value="500">R$500</option>
        </datalist>
      </ul>
    </aside>
  );
}

function OrderingDropdown() {
  const [ordering, setOrdering] = useState("hot");
  const [orderingTitle, setOrderingTitle] = useState("Relevância");

  const orderings = [
    { key: "hot", title: "Relevância" },
    { key: "top", title: "Mais vendidos" },
    { key: "+price", title: "Maior preço" },
    { key: "-price", title: "Menor preço" },
    { key: "date", title: "Mais recente" },
    { key: "az", title: "Alfabético" },
  ];

  return (
    <Menu>
      <MenuButton className="flex items-center gap-1 rounded-xl border border-accent-middle bg-accent-light px-2 py-1">
        Ordenar por: {orderingTitle}
        <ChevronDownIcon className="size-3 stroke-2" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="mt-2 w-52 rounded-xl border border-accent-middle bg-slate-100 px-3 py-2 text-accent shadow-lg"
      >
        {orderings.map((item) => (
          <MenuItem key={item.key}>
            <button
              onClick={() => {
                setOrdering(item.key);
                setOrderingTitle(item.title);
              }}
              className="block data-[focus]:bg-blue-100"
              href={`/products?sort=${item.key}`}
            >
              {item.title}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
