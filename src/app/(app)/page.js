"use client";

import ProductRail from "./components/ProductRail";
import { listAllProducts } from "../lib/query";
import { useEffect, useState } from "react";


export default () => {
  let [prods, setProds] = useState([]);

  useEffect(() => {
    listAllProducts().then((data) => setProds(data));
  }, []);

  return (
    <>
      <SlideShow />

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
};

function SlideShow() {
  <div
    class="slideshow js-slideshow slideshow--transition-slide"
    data-swipe="on"
  >
    <p class="sr-only">Slideshow Items</p>

    <ul class="slideshow__content">
      <li class="slideshow__item bg-white js-slideshow__item" style="">
        <div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-3xl">
          <div>
            <h1 class="text-4xl mb-2">Slide Number One</h1>
            <p class="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              quo dolores dolor reprehenderit iure laborum atque.
            </p>
          </div>
        </div>
      </li>

      <li class="slideshow__item bg-white js-slideshow__item" style="">
        <div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-3xl">
          <div>
            <p class="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              expedita eius eos maiores consectetur autem ratione voluptatem
              sequi, id eveniet.
            </p>
          </div>
          <div class="mt-5 lg:mt-8">
            <div class="flex flex-wrap justify-center items-center gap-3 lg:gap-5">
              <a
                href="#0"
                class="bg-indigo-700 text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
              >
                Download
              </a>
              <a href="#0" class="text-inherit">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </li>

      <li class="slideshow__item bg-white js-slideshow__item" style="">
        <div class="w-[calc(100%_-_2.5rem)] lg:w-[calc(100%_-_4rem)] mx-auto max-w-3xl">
          <div class="text-center">
            <h1 class="text-4xl">Slide Four</h1>
          </div>
        </div>
      </li>
    </ul>

    <ul>
      <li class="slideshow__control js-slideshow__control">
        <button class="slideshow__btn js-tab-focus">
          <svg
            class="icon h-[1.6em] w-[1.6em] inline-block text-inherit fill-current leading-none shrink-0"
            viewBox="0 0 32 32"
          >
            <title>Show previous slide</title>
            <path d="M20.768,31.395L10.186,16.581c-0.248-0.348-0.248-0.814,0-1.162L20.768,0.605l1.627,1.162L12.229,16 l10.166,14.232L20.768,31.395z"></path>
          </svg>
        </button>
      </li>

      <li class="slideshow__control js-slideshow__control">
        <button class="slideshow__btn js-tab-focus">
          <svg
            class="icon h-[1.6em] w-[1.6em] inline-block text-inherit fill-current leading-none shrink-0"
            viewBox="0 0 32 32"
          >
            <title>Show next slide</title>
            <path d="M11.232,31.395l-1.627-1.162L19.771,16L9.605,1.768l1.627-1.162l10.582,14.813 c0.248,0.348,0.248,0.814,0,1.162L11.232,31.395z"></path>
          </svg>
        </button>
      </li>
    </ul>
  </div>;
}
