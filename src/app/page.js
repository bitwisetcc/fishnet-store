import ProductRail from "./components/ProductRail";
import { listAllProducts } from "./lib/query";

export default () => {
  let prods = listAllProducts();

  return (
    <>
      <div className="h-[75vh] w-full border-b relative bg-slate-100">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center sm:p-32 gap-6">
          <span>
            <h1 className="text-3xl leading-10 text-stone-800 font-normal">
              FinFusion Store
            </h1>
            <h2 className="text-3xl leading-10 text-stone-700 font-normal">
              Powered by Next.js
            </h2>
          </span>
          <a
            href="https://github.com/medusajs/nextjs-starter-medusa"
            target="_blank"
          >
            <button className="secondary">
              View on GitHub
              <a
                href="https://github.com/bitwisetcc/finfusion-store"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
              </a>
            </button>
          </a>
        </div>
      </div>
      <ProductRail products={prods} />
    </>
  );
}
