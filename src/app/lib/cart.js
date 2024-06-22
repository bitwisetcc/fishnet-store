import { getProductById, listAllProducts } from "./query";

const no_local = true;

export function ensureCart() {
  if (no_local) return;

  // if (localStorage.getItem("cart") === null) {
  //   localStorage.setItem("cart", JSON.stringify([]));
  // }
}

export function listCartItems() {
  if (no_local) return defaults;

  // ensureCart();
  // return JSON.parse(localStorage.getItem("cart"));
}

export async function listFullCartItems() {
  // ensureCart();
  // return listAllProducts();
  // const prod1 = await getProductById("665df63d63d2f7c6c73305f9");
  // const prod2 = await getProductById("665df63d63d2f7c6c7330629");
  // const prod3 = await getProductById("665df63d63d2f7c6c7330619");
  const prods = await listAllProducts();
  return prods.filter(prod => prod.id == "665df63d63d2f7c6c73305f9" || prod.id == "665df63d63d2f7c6c7330629" || prod.id == "665df63d63d2f7c6c7330619");
}

export function removeFromCart(id) {
  if (no_local) return;

  // const cart = listCartItems();
  // const newCart = cart.filter((item) => item.id !== id);
  // localStorage.setItem("cart", JSON.stringify(newCart));
}

export function addCartItem(id, size, quantity) {
  if (no_local) return;

  // ensureCart();
  // const cart = listCartItems();
  // cart.push({ id, size, quantity });
  // localStorage.setItem("cart", JSON.stringify(cart));
}
