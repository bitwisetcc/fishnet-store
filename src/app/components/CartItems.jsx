import { price } from "@/app/lib/format";
import { TrashIcon } from "@heroicons/react/24/outline";
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
              <th>Total</th>
              <th className="text-end">Ações</th>
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
          src={cartItem.pictures[0]}
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
          <span>{cartItem.quantity}</span>
        </div>
      </td>
      <td>{price(cartItem.price * cartItem.quantity)}</td>
      <td className="text-end pr-3">
        <button
          className="text-stone-600 hover:text-stone-700"
          onClick={() => onRemove(cartItem.id)}
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      </td>
    </tr>
  );
}

export default CartItems;
