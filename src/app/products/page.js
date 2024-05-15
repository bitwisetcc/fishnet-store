import ProductPreview from "../components/ProductPreview";

export default () => {
  const prods = {
    items: [
      {
        id: 1,
        name: "Nemo",
        price: 200.5,
        img: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2070",
      },
      {
        id: 2,
        name: "Dori",
        price: 300.0,
        img: "https://images.unsplash.com/photo-1602345726771-5abd3172481f?q=80&w=2070",
      },
      {
        id: 3,
        name: "Bruce",
        price: 3000.0,
        img: "https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?q=80&w=2042",
      },
    ],
  };

  return (
    <article className="flex h-full bg-slate-50">
      <aside className="border border-stone-200 p-7 px-16 text-stone-600 min-w-fit">
        <ul className="text-sm flex flex-col gap-3">
          <li>
            <a href="/products?sort=last" className="text-stone-900">
              Lançamento
            </a>
          </li>
          <li>
            <a href="/products?sort=az">Alfabético A-Z</a>
          </li>
          <li>
            <a href="/products?sort=za">Alfabético Z-A</a>
          </li>
        </ul>
      </aside>
      <div className="p-14">
        <h1 className="col-span-4 text-3xl text-stone-800 font-semibold mb-5">
          Produtos
        </h1>
        <section className="grid grid-cols-4 gap-4 bg-slate-50">
          {prods.items.map((prod) => (
            <ProductPreview product={prod} />
          ))}
        </section>
      </div>
    </article>
  );
};
