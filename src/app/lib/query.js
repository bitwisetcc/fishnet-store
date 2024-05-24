const prods = {
  items: [
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
  ],
};

/**
 * 
 * @returns {Array}
 */
export function listAllProducts() {
  return prods.items;
}

export function getProductById(id) {
  return prods.items.find((prod) => prod.id == id);
}