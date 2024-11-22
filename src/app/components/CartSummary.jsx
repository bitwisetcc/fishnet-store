import { price } from "@/app/lib/format";

export default function CartSummary({ subtotal, tax, shipping, follow }) {
  const total = subtotal + shipping + tax;

  return (
    <article className="mt-10 flex-1">
      <h2 className="pb-5 text-2xl">Resumo</h2>
      <ul className="flex flex-col gap-6 border-y border-y-stone-300 py-8">
        <li className="flex justify-between text-sm">
          <span>Subtotal:</span>
          <span>{price(subtotal)}</span>
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
      <div className="flex justify-between gap-6 border-b border-b-stone-300 py-8">
        <span>Total:</span>
        <span>{price(total)}</span>
      </div>
      {follow && (
        <button className="action">
          <a href="/checkout">Finalizar compra</a>
        </button>
      )}
    </article>
  );
}
