import { price } from "@/app/lib/format";
import Image from "next/image";

function CartItems({ prods, onRemove, onConfirmRemove }) {
  return (
    <article className="mt-10 flex-[3] md:mx-16">
      <h1 className="mb-8 text-2xl font-semibold">Carrinho</h1>
      {prods.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="border-b border-b-stone-300 text-sm md:text-base">
              <th className="h-10">Produto</th>
              <th>Quantidade</th>
              <th className="text-end">Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {prods.map((cartItem) => (
              <CartItem
                cartItem={cartItem}
                key={cartItem.id}
                onRemove={(productId) => {
                  if (cartItem.quantity > 1) {
                    onRemove(productId);
                  } else {
                    onConfirmRemove(productId);
                  }
                }}
              />
            ))}
          </tbody>
        </table>
      )}
    </article>
  );
}

function CartItem({ cartItem, onRemove }) {
  return (
    <tr className="max-h-10 border-b border-b-stone-300 transition-colors duration-300 hover:bg-slate-100">
      <td className="flex items-center gap-3 py-3 md:gap-4">
        <Image
          src={cartItem.picture}
          alt={cartItem.name}
          width={150}
          height={100}
          className="w-20 rounded-lg shadow-sm md:w-36"
        />
        <div>
          <h3 className="text-sm md:text-base">{cartItem.name}</h3>
        </div>
      </td>
      <td>
        <div className="ml-3 flex w-max items-center gap-2 md:m-0">
          <button
            className="text-stone-600 hover:text-stone-700"
            onClick={() => onRemove(cartItem.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <span>{cartItem.quantity}</span>
        </div>
      </td>
      <td className="text-end">{price(cartItem.price * cartItem.quantity)}</td>
    </tr>
  );
}

export default CartItems;
