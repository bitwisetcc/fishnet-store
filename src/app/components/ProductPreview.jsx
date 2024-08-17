import Image from "next/image";
import { price } from "@/app/lib/format";

export default function ProductPreview({ product }) {
  return (
    <a
      href={`/products/${product.id}`}
      className="group relative block rounded-lg border shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg"
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={product.picture}
          height={100}
          width={200}
          style={{ width: "100%", height: "160px" }}
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          alt={`Imagem de ${product.name}`}
        />
        <button className="absolute right-2 top-2 text-gray-400 transition-colors hover:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>

      <div className="m-2 flex flex-col justify-between">
        <p className="truncate text-lg font-semibold text-gray-800">
          {product.name}
        </p>
        <p className="mt-4 text-sm text-gray-500">Price:</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-600">
            {price(product.price)}
          </p>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </a>
  );
}
