import Image from "next/image";
import { useState } from "react";
import { price } from "@/app/lib/format";

export default function ProductPreview({ product }) {
  const [favorited, setFavorited] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setFavorited(!favorited);
  };

  // Verifica se o produto tem desconto
  const hasDiscount = product.discount > 0;

  // Calcula o preço com desconto
  const discountedPrice = hasDiscount ? product.price * (1 - product.discount / 100) : null;

  return (
    <div className="group block rounded-lg shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg border relative group-hover:scale-105">
      <a
        href={`/products/${product.id}`}
        className="block relative overflow-hidden rounded-t-lg"
      >
        <Image
          src={product.picture}
          height={100}
          width={200}
          style={{ width: "100%", height: "160px" }}
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          alt={`Imagem de ${product.name}`}
        />
      </a>
      <button
        className={`favorite-button absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors ${
          favorited ? "text-red-500 border-red-500" : ""
        }`}
        onClick={handleFavoriteClick}
        style={{
          borderColor: favorited ? "red" : "transparent",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={favorited ? "red" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>

      <a
        href={`/products/${product.id}`}
        className="block m-2 flex flex-col justify-between"
      >
        <p className="truncate text-lg font-semibold text-gray-800">{product.name}</p>
        <p className="mt-4 text-sm text-gray-500">Preço:</p>
        <div className="flex items-center justify-between">
          {hasDiscount ? (
            <div className="flex flex-col items-start">
              <p className="text-md font-bold text-gray-600 line-through">{price(product.price)}</p>
              <p className="text-lg font-bold text-green-500">{price(discountedPrice)}</p>
            </div>
          ) : (
            <p className="text-lg font-bold text-gray-600">{price(product.price)}</p>
          )}
        </div>
      </a>
    </div>
  );
}
