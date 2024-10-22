"use client";

import ProductRail from "@/app/components/ProductRail";
import { listAllProducts } from "@/app/lib/query";
import {
  ArchiveBoxIcon,
  CreditCardIcon,
  HandThumbUpIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
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
      <Categories />
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
      
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
    <script src="https://files.bpcontent.cloud/2024/10/03/00/20241003004821-6U8LGXLF.js"></script>
    
    </>
  );
}

function SlideShow() {
  const images = [
    "static/banner-lançamentos.png",
    "static/banner-betta.png",
    "static/banner-tetra.png",
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
    >
      <p className="sr-only">Slideshow Items</p>

      <ul className="slideshow__content">
        <li className="slideshow__item js-slideshow__item flex h-full items-center justify-center bg-white">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="h-full w-full object-cover"
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
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-accent-middle px-4 py-4 text-white lg:px-16">
      <div className="flex items-center gap-3">
        <ArchiveBoxIcon className="h-6 w-6 text-golden-fish" />
        <div>
          <h3 className="text-sm font-semibold text-golden-fish">Frete grátis</h3>
          <span className="text-xs">Para itens retirados na loja</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MapPinIcon className="h-6 w-6 text-golden-fish" />
        <div>
          <h3 className="text-sm font-semibold text-golden-fish">Envio garantido</h3>
          <span className="text-xs">Entregamos para todo o Brasil</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <CreditCardIcon className="h-6 w-6 text-golden-fish" />
        <div>
          <h3 className="text-sm font-semibold text-golden-fish">Pagamentos</h3>
          <span className="text-xs">Aceitamos PIX, débito e crédito</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <HandThumbUpIcon className="h-6 w-6 text-golden-fish" />
        <div>
          <h3 className="text-sm font-semibold text-golden-fish">Converse conosco</h3>
          <span className="text-xs">Tire dúvidas por WhatsApp</span>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const categories = [
    {
      name: "Peixes Betta",
      image: "https://aquaticarts.com/cdn/shop/products/Deluxe-Beta-3_1800x1800.jpg",
      id: "betta",
    },
    {
      name: "Peixes Farpados",
      image: "https://aquaticarts.com/cdn/shop/products/RedPandaBarb5_1800x1800.jpg",
      id: "barb",
    },
    {
      name: "Peixes Tetra",
      image: "https://aquaticarts.com/cdn/shop/products/Silver-Tip-Tetra-Small-1_1800x1800.jpg",
      id: "tetra",
    },
    {
      name: "Peixes Tigre",
      image: "https://aquaticarts.com/cdn/shop/products/Tiger_Oscar_7_1800x1800.jpg",
      id: "tiger",
    },
    {
      name: "Carnívoros",
      image: "https://aquaticarts.com/cdn/shop/products/Blue-Zebra-Angelfish-3_1800x1800.jpg",
      id: "carnivore",
    },
    {
      name: "Onívoros",
      image: "https://aquaticarts.com/cdn/shop/products/Blue-Zebra-Angelfish-3_1800x1800.jpg",
      id: "omnivore",
    },
    {
      name: "Água doce",
      image: "https://aquaticarts.com/cdn/shop/products/Blue-Zebra-Angelfish-3_1800x1800.jpg",
      id: "freshwater",
    },
    {
      name: "Água salgada",
      image: "https://aquaticarts.com/cdn/shop/products/Blue-Zebra-Angelfish-3_1800x1800.jpg",
      id: "saltwater",
    },
  ];

  return (
    <section className="flex overflow-x-auto justify-center border-b border-slate-300 bg-slate-100 py-5 pt-8 shadow-inner shadow-slate-500">
  <div className="flex flex-nowrap justify-start gap-4 min-w-[375px]">
    {categories.map((category) => (
      <Link
        className="flex flex-col items-center gap-2 shrink-0 w-28" // Ajuste a largura conforme necessário
        key={category.id}
        href={`/products?category=${category.id}`}
      >
        <Image
          src={category.image}
          alt={category.name}
          width={100}
          height={100}
          className="aspect-square w-24 rounded-full object-cover border-2 border-accent-middle"
        />
        <span className="text-xs">{category.name}</span>
      </Link>
    ))}
  </div>
</section>



  
  );
}
