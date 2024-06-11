import { price } from "../lib/format";

export default ({ total, follow }) => {
  const shipping = 5;
  const tax = 0;
  return (
    <article className="flex-1 mt-10">
      <h2 className="text-2xl pb-5">Resumo</h2>
      <ul className="border-y border-y-stone-300 py-8 flex flex-col gap-6">
        <li className="flex justify-between text-sm">
          <span>Subtotal:</span>
          <span>{price(total)}</span>
        </li>
        <li className="flex justify-between text-sm">
          <span>Frete:</span>
          <span>{price(shipping)}</span>
        </li>
        <li className="flex justify-between text-sm">
          <span>Impostos:</span>
          <span>{price(tax)}</span>
        </li>
      </ul>
      <div className="border-b border-b-stone-300 py-8 flex gap-6 justify-between">
        <span>Total:</span>
        <span>{price(total + shipping + tax)}</span>
      </div>
      {follow && (
        <button className="action">
          <a href="/checkout">Finalizar compra</a>
        </button>
      )}
    </article>
  );
};
