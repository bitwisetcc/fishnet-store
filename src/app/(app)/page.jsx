"use client";

import ProductRail from "@/app/components/ProductRail";
import { listAllProducts } from "@/app/lib/query";
import {
  ArchiveBoxIcon,
  CreditCardIcon,
  HandThumbUpIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Page() {
  let [prods, setProds] = useState([]);

  useEffect(() => {
    listAllProducts().then((data) => setProds(data));
  }, []);

  return (
    <>
      <SlideShow />
      <Shipping />
      <article className="px-10">
        <ProductRail
          products={prods.slice(0, 3)}
          title="Produtos recentes"
          link
        />
        <hr />
        <ProductRail
          products={prods.slice(3, 6)}
          title="Sugerido com base na suas buscas ✨"
        />
      </article>
    </>
  );
}

function SlideShow() {
  const images = [
    "static/banner-lançamentos.png",
    "static/banner-betta.png",
    "https://www.petz.com.br/blog/wp-content/uploads/2017/02/tipos-de-peixe-pet.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div
      className="slideshow js-slideshow slideshow--transition-slide relative"
      data-swipe="on"
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "375px",
        overflow: "hidden",
      }}
      // 50% da altura da tela
      // Ocupa toda a largura da tela e define uma altura fixa
    >
      <p className="sr-only">Slideshow Items</p>

      <ul className="slideshow__content">
        <li className="slideshow__item js-slideshow__item flex h-full items-center justify-center bg-white">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="h-full w-full object-cover" // Ajusta a imagem para cobrir o espaço
          />
        </li>
      </ul>

      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
        onClick={prevSlide}
      >
        <svg
          className="icon inline-block h-[1.6em] w-[1.6em] shrink-0 fill-current leading-none text-inherit"
          viewBox="0 0 32 32"
        >
          <title>Show previous slide</title>
          <path d="M20.768,31.395L10.186,16.581c-0.248-0.348-0.248-0.814,0-1.162L20.768,0.605l1.627,1.162L12.229,16 l10.166,14.232L20.768,31.395z"></path>
        </svg>
      </button>

      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md"
        onClick={nextSlide}
      >
        <svg
          className="icon inline-block h-[1.6em] w-[1.6em] shrink-0 fill-current leading-none text-inherit"
          viewBox="0 0 32 32"
        >
          <title>Show next slide</title>
          <path d="M11.232,31.395l-1.627-1.162L19.771,16L9.605,1.768l1.627-1.162l10.582,14.813 c0.248,0.348,0.248,0.814,0,1.162L11.232,31.395z"></path>
        </svg>
      </button>
    </div>
  );
}

function Shipping() {
  return (
    <section className="grid-cols-4 bg-accent-middle px-16 py-4 text-white lg:grid">
      <div className="flex items-center gap-3">
        <ArchiveBoxIcon className="size-10 text-golden-fish" />
        <div>
          <h3 className="font-semibold text-golden-fish">Frete grátis</h3>
          <span className="text-sm">Para itens retirados na loja</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MapPinIcon className="size-10 text-golden-fish" />
        <div>
          <h3 className="font-semibold text-golden-fish">Envio garantido</h3>
          <span className="text-sm">Entregamos para todo o Brasil</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <CreditCardIcon className="size-10 text-golden-fish" />
        <div>
          <h3 className="font-semibold text-golden-fish">Pagamentos</h3>
          <span className="text-sm">Aceitamos PIX, débito e crédito</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <HandThumbUpIcon className="size-10 text-golden-fish" />
        <div>
          <h3 className="font-semibold text-golden-fish">Converse conosco</h3>
          <span className="text-sm">Tire dúvidas por WhatsApp</span>
        </div>
      </div>
    </section>
  );
}
