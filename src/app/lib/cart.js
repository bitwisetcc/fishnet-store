import { getProductById } from "./query";

const no_local = false;

export function ensureCart() {
  if (no_local) return;

  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}

export function listCartItems() {
  if (no_local) return [];

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
  if (no_local) return;

  const cart = listCartItems();
  const newCart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(newCart));
}

export function addCartItem(id, size, quantity) {
  if (no_local) return;

  ensureCart();
  const cart = listCartItems();
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id, size, quantity });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
