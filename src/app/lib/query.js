const prods = {
  items: [
    {
      id: 1,
      quantity: 2,
      name: "Peixe-palhaço",
      scientificName: "Amphiprion ocellaris",
      feeding: "Onívoro",
      tank_size: "100L",
      category: "Peixe",
      price: 200.5,
      img: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2070",
      sizes: ["5cm", "10cm", "15cm"],
      description: "Nemo é um peixe-palhaço jovem e aventureiro, com uma barbatana direita menor que a esquerda devido a um ataque de barracuda quando era apenas um ovo. Ele é cheio de vida e curiosidade, mas também pode ser teimoso e desobediente. Nemo vive com seu pai superprotetor, Marlin, em um anêmona na Grande Barreira de Coral.",
    },
    {
      id: 2,
      quantity: 3,
      name: "Peixe-anjo",
      scientificName: "Paracanthurus hepatus",
      feeding: "Onívoro",
      tank_size: "200L",
      category: "Peixe",
      price: 300.0,
      img: "https://images.unsplash.com/photo-1602345726771-5abd3172481f?q=80&w=2070",
      sizes: ["5cm", "10cm", "15cm"],
      description: "Dori é um peixe-anjo-real azul com perda de memória recente. Ela é otimista, bondosa e sempre disposta a ajudar, apesar de sua memória curta. Dori se torna amiga de Marlin na busca por Nemo e usa sua memória fragmentada e habilidades únicas para ajudá-los em sua jornada."
    },
    {
      id: 3,
      quantity: 1,
      name: "Tubarão branco",
      scientificName: "Carcharodon carcharias",
      feeding: "Carnívoro",
      tank_size: "500L",
      category: "Tubarão",
      price: 3000.0,
      img: "https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?q=80&w=2042",
      sizes: ["1m", "1,5m", "2m"],
      description: "Bruce é um tubarão-branco grande e amigável que frequenta o Clube dos Tubarões Vegetarianos. Ele é gentil e compassivo, apesar de sua aparência intimidante. Bruce se torna mentor de Marlin e Dori, ensinando-lhes sobre o oceano e ajudando-os em sua busca por Nemo."
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