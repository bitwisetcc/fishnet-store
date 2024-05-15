import Image from "next/image";

export default async function ProductPreview({ product }) {
  return (
    <a href={`/products/${product.id}`} className="group">
      <div className="relative">
        <Image
          src={product.img}
          height={100}
          width={200}
          style={{ width: "100%", height: "auto" }}
          className="rounded-lg group-hover:shadow-lg transition-shadow duration-300 ease-in-out border border-stone-300"
        />
        <div className="flex mt-4 justify-between">
          <p className="text-stone-700">{product.name}</p>
          <div className="flex items-center gap-x-2">
            <p className="text-stone-500">{product.price}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
