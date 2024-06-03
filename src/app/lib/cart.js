import { getProductById } from "./query";

export function ensureCart() {
  if (window.localStorage.getItem("cart") === null) {
    window.localStorage.setItem("cart", JSON.stringify([]));
  }
}

export function listCartItems() {
  ensureCart();
  return JSON.parse(window.localStorage.getItem("cart"));
}

export function listFullCartItems() {
  ensureCart();
  const cart = listCartItems();
  return cart.map((item) => {
    const product = getProductById(item.id);
    return { ...product, ...item };
  });
}

export function removeFromCart(id) {
  const cart = listCartItems();
  const newCart = cart.filter((item) => item.id !== id);
  window.localStorage.setItem("cart", JSON.stringify(newCart));
}
