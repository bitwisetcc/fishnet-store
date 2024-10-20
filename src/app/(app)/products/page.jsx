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
  const [noResults, setNoResults] = useState(false);
  const params = useParams();
  const PRODUCTS_PER_PAGE = 20;

  const loadProducts = useCallback(
    async (page, limit) => {
      setLoading(true);
      let data;
      if (Object.keys(filters).length > 0) {
        data = await getProductByFilter(filters);
      } else {
        data = await listAllProducts(page, limit);
      }

      if (data.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }

      setProds(data);
      setLoading(false);
    },
    [filters]
  );

  useEffect(() => {
    loadProducts(page, PRODUCTS_PER_PAGE);
  }, [loadProducts, page]);

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
    setPage(1);
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilter }));
  };

  const clearFilters = async () => {
    setFilters({}); // Limpar todos os filtros
    setNoResults(false); // Resetar o estado de produtos não encontrados
    await loadProducts(1, PRODUCTS_PER_PAGE); // Recarregar produtos sem filtros
    setProds([]); // Limpar produtos exibidos
    setPage(1); // Resetar a página para 1

    // Resetar valores de ordenação e campos de preço
    document.getElementById("order-select").value = ""; // Resetar ordenação para "Selecione"
    document.getElementById("min-price").value = ""; // Limpar campo de preço mínimo
    document.getElementById("max-price").value = ""; // Limpar campo de preço máximo
  };

  return (
    <div className="h-full bg-slate-50 p-7 md:flex md:p-12 lg:p-16">
      <SideBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
      />
      <hr className="my-5 border-stone-200 md:hidden" />
      <div className="md:pl-10">
        <h1 className="mb-5 text-3xl font-semibold text-stone-800">Produtos</h1>

        {noResults ? (
          <div className="text-red-500">Nenhum produto encontrado ou existente</div>
        ) : (
          <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {prods.map((prod, index) => (
              <ProductPreview product={prod} key={`${prod.id}-${index}`} />
            ))}
          </section>
        )}

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

        {prods.length > 0 && !loading && (
          <button
            onClick={loadMore}
            className="bg-white-500 mt-5 rounded border border-black px-4 py-2 text-black hover:bg-black hover:text-white"
            disabled={loading}
          >
            Ver mais
          </button>
        )}
      </div>
    </div>
  );
}

function SideBar({ filters, onFilterChange, onClearFilters }) {
  const handleFilterClick = (filter) => {
    onFilterChange(filter);
  };

  const handlePriceChange = (e, type) => {
    const value = e.target.value;
    handleFilterClick({ [type]: value });
  };

  return (
    <aside className="w-64 min-w-[16rem] max-w-[16rem] border-stone-200 text-stone-600 md:border-b-0 md:border-r md:pr-12">
      <ul className="flex flex-col gap-3 text-sm">
        <Category
          title="Ordenar"
          items={[
            <select
              id="order-select" // Adicionando o id para resetar o select
              onChange={(e) => handleFilterClick({ ordem: e.target.value })}
              value={filters.ordem || ""} // Seleciona o valor baseado no filtro
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                filters.ordem ? "bg-blue-100 border-blue-500" : ""
              }`} // Destaque se filtro estiver ativo
            >
              <option value="">Selecione</option> {/* Opção padrão */}
              <option value="A-Z">Ordem alfabética A-Z</option>
              <option value="Z-A">Ordem alfabética Z-A</option>
              <option value="crescente">Menor preço</option>
              <option value="decrescente">Maior preço</option>
            </select>,
          ]}
        />

        <Category
          title="Ambiente"
          items={[
            <button
              onClick={() => handleFilterClick({ tags: "fresh" })}
              className={`w-full p-2 border rounded-md hover:bg-blue-100 ${
                filters.tags === "fresh" ? "bg-blue-100 border-blue-500" : ""
              }`} // Destaque se filtro estiver ativo
            >
              🌿 Água doce
            </button>,
            <button
              onClick={() => handleFilterClick({ tags: "salt" })}
              className={`w-full p-2 border rounded-md hover:bg-blue-100 ${
                filters.tags === "salt" ? "bg-blue-100 border-blue-500" : ""
              }`} // Destaque se filtro estiver ativo
            >
              🌊 Água salgada
            </button>,
          ]}
        />

        <Category
          title="Alimentação"
          items={[
            <button
              onClick={() => handleFilterClick({ feeding: "Herb" })}
              className={`w-full p-2 border rounded-md hover:bg-blue-100 ${
                filters.feeding === "Herb" ? "bg-blue-100 border-blue-500" : ""
              }`} // Destaque se filtro estiver ativo
            >
              🌱 Herbívoro
            </button>,
            <button
              onClick={() => handleFilterClick({ feeding: "Omni" })}
              className={`w-full p-2 border rounded-md hover:bg-blue-100 ${
                filters.feeding === "Omni" ? "bg-blue-100 border-blue-500" : ""
              }`} // Destaque se filtro estiver ativo
            >
              🍽️ Onívoro
            </button>,
            <button
              onClick={() => handleFilterClick({ feeding: "Carn" })}
              className={`w-full p-2 border rounded-md hover:bg-blue-100 ${
                filters.feeding === "Carn" ? "bg-blue-100 border-blue-500" : ""
              }`} // Destaque se filtro estiver ativo
            >
              🍖 Carnívoro
            </button>,
          ]}
        />

        <Category
          title="Valores"
          items={[
            <>
              <label htmlFor="min-price" className="block mb-1">
                Preço mínimo: R$
              </label>
              <input
                type="number"
                id="min-price" // Adicionando o id para resetar o campo
                min={0}
                step={10}
                value={filters.minPrice || ""} // Preenche com o valor do filtro ou vazio
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  filters.minPrice ? "bg-blue-100 border-blue-500" : ""
                }`} // Destaque se filtro estiver ativo
                onChange={(e) => handlePriceChange(e, "minPrice")} // Atualiza o estado ao mudar o valor
              />

              <label htmlFor="max-price" className="block mb-1">
                Preço máximo: R$
              </label>
              <input
                type="number"
                id="max-price" // Adicionando o id para resetar o campo
                min={0}
                step={10}
                value={filters.maxPrice || ""} // Preenche com o valor do filtro ou vazio
                className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  filters.maxPrice ? "bg-blue-100 border-blue-500" : ""
                }`} // Destaque se filtro estiver ativo
                onChange={(e) => handlePriceChange(e, "maxPrice")} // Atualiza o estado ao mudar o valor
              />
            </>,
          ]}
        />

        <Category
          title="Comportamento Social"
          items={[
            <button
              onClick={() => handleFilterClick({ behavior: "peaceful" })}
              className={`w-full p-2 border rounded-md hover:bg-blue-100 ${
                filters.behavior === "peaceful" ? "bg-blue-100 border-blue-500" : ""
              }`} // Destaque se filtro estiver ativo
            >
              🕊️ Pacífico
            </button>,
            <button
              onClick={() => handleFilterClick({ behavior: "aggressive" })}
              className={`w-full p-2 border rounded-md hover:bg-blue-100 ${
                filters.behavior === "aggressive" ? "bg-blue-100 border-blue-500" : ""
              }`} // Destaque se filtro estiver ativo
            >
              🦈 Agressivo
            </button>,
            <button
              onClick={() => handleFilterClick({ behavior: "schooling" })}
              className={`w-full p-2 border rounded-md hover:bg-blue-100 ${
                filters.behavior === "schooling" ? "bg-blue-100 border-blue-500" : ""
              }`} // Destaque se filtro estiver ativo
            >
              🐟 Em cardume
            </button>,
          ]}
        />

        {/* Botão Limpar Filtros */}
        <button
          onClick={onClearFilters}
          className="mt-4 bg-red-500 text-white rounded px-4 py-2"
        >
          Limpar Filtros
        </button>
      </ul>
    </aside>
  );
}

function Category({ title, items }) {
  return (
    <li className="rounded-lg bg-stone-100 p-4">
      <h3 className="mb-3 text-base font-semibold">{title}</h3>
      <ul className="space-y-2">{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </li>
  );
}
