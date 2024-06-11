import ProductPreview from "./ProductPreview";

export default ({ products }) => {
  return (
    <div className="content-center bg-slate-50 py-12 small:py-24 px-10">
      <div className="flex justify-between mb-8">
        <p className="text-lg text-stone-700">Produtos recentes</p>
        <a href="/products" className="text-indigo-400 flex items-center gap-1">
          Ver todos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
        {products.map((product) => (
          <li key={product.id}>
            <ProductPreview product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
