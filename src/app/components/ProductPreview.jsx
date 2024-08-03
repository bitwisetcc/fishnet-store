import Image from "next/image";
import { price } from "@/app/lib/format";

export default function ProductPreview({ product }) {
  return (
    <a href={`/products/${product.id}`} className="group">
      <div className="relative">
        <Image
          src={product.img}
          height={100}
          width={200}
          style={{ width: "100%", height: "160px" }}
          className="rounded-lg border border-stone-300 object-cover transition-shadow duration-300 ease-in-out group-hover:shadow-lg"
          alt={`Imagem de ${product.name}`}
        />
        <div className="mt-4 justify-between md:flex">
          <p className="truncate text-stone-700">{product.name}</p>
          <div className="flex items-center gap-x-2">
            <p className="text-stone-500">{price(product.price)}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
