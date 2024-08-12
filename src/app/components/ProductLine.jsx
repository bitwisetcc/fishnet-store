import Image from "next/image";
import { price } from "@/app/lib/format";

export default function ProductPreview({ product }) {
  return (
    <div className="relative flex items-center justify-between text-sm">
      <a href={`/products/${product.id}`} className="group">
        <Image
          src={product.img}
          height={40}
          width={60}
          style={{ width: "auto" }}
          className="rounded-lg border border-stone-400 shadow-sm"
        />
      </a>

      <div className="ml-5 flex-1">
        <span className="text-stone-800">{product.name}</span>
      </div>

      <div>
        <p className="text-stone-500">
          {product.quantity}x {price(product.price)}
        </p>
        <p className="text-right text-stone-700">
          {price(product.quantity * product.price)}
        </p>
      </div>
    </div>
  );
}
