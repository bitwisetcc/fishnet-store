import { getProductById, listAllProducts } from "./query";

const no_local = true;

const defaults = [
  {
    id: 1,
    quantity: 2,
    name: "Nemo",
    price: 200.5,
    img: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2070",
  },
  {
    id: 2,
    quantity: 3,
    name: "Dori",
    price: 300.0,
    img: "https://images.unsplash.com/photo-1602345726771-5abd3172481f?q=80&w=2070",
  },
  {
    id: 3,
    quantity: 1,
    name: "Bruce",
    price: 3000.0,
    img: "https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?q=80&w=2042",
  },
];

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

export function listFullCartItems() {
  ensureCart();
  // return listAllProducts();
  const cart = listCartItems();
  return cart.map((item) => {
    const product = getProductById(item.id);
    return { ...product, ...item };
  });
}

export function removeFromCart(id) {
  if (no_local) return;

  // const cart = listCartItems();
  // const newCart = cart.filter((item) => item.id !== id);
  // localStorage.setItem("cart", JSON.stringify(newCart));
}

export function addToCart(id, size, quantity) {
  if (no_local) return;

  // ensureCart();
  // const cart = listCartItems();
  // cart.push({ id, size, quantity });
  // localStorage.setItem("cart", JSON.stringify(cart));
}
