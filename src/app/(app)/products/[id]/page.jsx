"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { addCartItem, ensureCart, DOLAR } from "@/app/lib/cart";
import { getProductById } from "@/app/lib/query";
import { price } from "@/app/lib/format";
import Counter from "@/app/components/Counter";
import Options from "@/app/components/Options";

export default () => {
  const { id } = useParams();
  const [prod, setProd] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [imgDialogOpen, setImgDialogOpen] = useState(false);

  useEffect(() => {
    getProductById(id)
      .then((p) => setProd(p))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-200">
        <img
          src="/static/loading.gif"
          width={40}
          height={40}
          alt="Loading..."
        />
      </div>
    );

  if (!prod) return <h1>Produto não encontrado</h1>;

  return (
    <div className="h-full p-8">
      <ImageDialog
        prod={prod}
        open={imgDialogOpen}
        setOpen={setImgDialogOpen}
      />
      <ProductOverview prod={prod} />
      <ProductDescription prod={prod} />
    </div>
  );
};

function ProductOverview({ prod }) {
  let sizeState = useState(prod.sizes[0]);
  let [size] = sizeState;
  let quantityState = useState(1);
  let [quantity] = quantityState;

  let [done, setDone] = useState(false);

  const hasWarning = (p) => p.feeding.toLowerCase().includes("nivor");

  function addToCart() {
    ensureCart();
    addCartItem(prod.id, size, quantity);
    setDone(true);
    console.log(addCartItem);
  }

  return (
    <article className="mb-8 grid-cols-2 place-content-center gap-16 pr-12 lg:grid">
      <Image
        src={prod.img}
        alt={prod.name}
        width={500}
        height={500}
        className="mt-2 cursor-zoom-in rounded-lg border border-stone-500 shadow-lg shadow-stone-300"
        onClick={() => setImgDialogOpen(true)}
        priority
      />

      <section>
        <h1 className="text-3xl mb-2">{prod.name}</h1>
        <p className="text-xs text-stone-500">ID: {prod.id}</p>

        <hr className="my-5" />

        <div className="flex flex-col gap-4 mb-5">
          <h2 className="text-2xl font-semibold">
            {price(prod.price * DOLAR)}
          </h2>

          <div className="flex items-center justify-between gap-2">
            <Counter state={quantityState} max={prod.quantity} />
            <button
              disabled={prod.quantity <= 0 || done}
              className="action inline w-full font-semibold"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </button>
            <a href="/cart">
              <ShoppingCartIcon
                className={`ml-3 inline size-6 transition-opacity duration-500 ${done ? "opacity-80" : "opacity-0"}`}
              />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <h3 className="text-lg">Tamanho:</h3>
            <Options options={prod.sizes} state={sizeState} />
          </div>
        </div>

        {prod.warning && (
          <>
            <div className="rounded-lg border border-yellow-500 bg-yellow-100 p-4">
              <p className="mb-2 font-semibold text-yellow-700">Atenção</p>
              <p className="text-yellow-600">{prod.warning}</p>
            </div>
          </>
        )}
        {hasWarning(prod) && (
          <>
            <div className="rounded-lg border border-yellow-500 bg-yellow-100 p-4">
              <p className="mb-2 font-semibold text-yellow-700">Atenção</p>
              <p className="text-yellow-600">
                Pode ser predador de espécies menores. De preferência, separe um
                aquário reservado.
              </p>
            </div>
          </>
        )}
      </section>
    </article>
  );
}

function ProductDescription({ prod }) {
  return (
    <article className="grid-cols-3 lg:grid">
      <section className="col-span-2">
        <h2 className="mb-4 text-3xl">Descrição</h2>
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
      </section>
    </article>
  );
}

function ImageDialog({ prod, open, setOpen }) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-20"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-slate-800/80 pt-10">
        <DialogPanel className="relative">
          <Image
            src={prod.img}
            alt={prod.name}
            width={500}
            height={500}
            className="cursor-zoom-out shadow-lg"
            onClick={() => setOpen(false)}
          />
          <button
            onClick={() => setOpen(false)}
            className="absolute right-2 top-2 rounded-full bg-black p-1 text-white"
          >
            <XMarkIcon className="size-5" />
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
