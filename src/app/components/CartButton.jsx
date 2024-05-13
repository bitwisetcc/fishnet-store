import CartDropdown from "./CartDropdown";

async function fetchCart() {
  // const cart = await fetch("api/cart/blahblahblah").then((res) => res.json());
  // return cart.items !== undefined && cart.items.length ? cart : null;
  return { items: [{ id: 1, name: "Nemo", price: 200.5 }] };
}

export default async function CartButton() {
  const cart = await fetchCart();
  return <CartDropdown cart={cart} />;
}
