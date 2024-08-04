import ProductPreview from "./ProductPreview";

export default ({ products, title, link, ai }) => {
  return (
    <div className="small:py-24 content-center bg-slate-50 py-8">
      <div className="mb-8 flex justify-between">
        <p className="text-lg text-stone-700">{title}</p>
        {link && (
          <a
            href="/products"
            className="flex items-center gap-1 text-indigo-400"
          >
            Ver todos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 stroke-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        )}
      </div>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
        {products.length && products.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
