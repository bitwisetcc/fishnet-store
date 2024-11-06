import { price } from "@/app/lib/format";

export default function CartSummary({ subtotal, follow }) {
  const shipping = subtotal > 0 ? 29.99 : 0; // Frete só é cobrado se o subtotal for maior que 0
  const tax = subtotal * 0.05; // 10% de impostos sobre o subtotal
  const total = subtotal + shipping + tax;

  return (
    <article className="flex-1 mt-10">
      <h2 className="text-2xl pb-5">Resumo</h2>
      <ul className="border-y border-y-stone-300 py-8 flex flex-col gap-6">
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
      <div className="border-b border-b-stone-300 py-8 flex gap-6 justify-between">
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
