import Image from "next/image";
import { price } from "@/app/lib/format";

export default function ProductPreview({ product }) {
  return (
    <div className="relative flex justify-between items-center text-sm">
      <a href={`/products/${product.id}`} className="group">
        <Image
          src={product.img}
          height={40}
          width={60}
          style={{ width: "auto" }}
          className="rounded-lg shadow-sm border border-stone-400"
        />
      </a>

      <div className="flex-1 ml-5">
        <span className="text-stone-800">{product.name}</span>
      </div>

      <div>
        <p className="text-stone-500">
          {product.quantity}x {price(product.price)}
        </p>
        <p className="text-stone-700 text-right">
          {price(product.quantity * product.price)}
        </p>
      </div>
    </div>
  );
}
