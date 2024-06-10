import { getProductById } from "./query";

export function ensureCart() {
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}

export function listCartItems() {
  ensureCart();
  return JSON.parse(localStorage.getItem("cart"));
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
  localStorage.setItem("cart", JSON.stringify(newCart));
}
