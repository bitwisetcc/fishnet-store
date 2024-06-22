const prods = {
  items: [
    {
      id: 1,
      quantity: 5,
      name: "Peixe-palhaço",
      scientificName: "Amphiprion ocellaris",
      feeding: "Onívoro",
      tank_size: "100L",
      category: "Peixe de água salgada",
      price: 200.5,
      img: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=2070",
      sizes: ["5cm", "10cm", "15cm"],
      description:
        "Nemo é um peixe-palhaço jovem e aventureiro, com uma barbatana direita menor que a esquerda devido a um ataque de barracuda quando era apenas um ovo. Ele é cheio de vida e curiosidade, mas também pode ser teimoso e desobediente. Nemo vive com seu pai superprotetor, Marlin, em um anêmona na Grande Barreira de Coral.",
    },
    {
      id: 2,
      quantity: 3,
      name: "Peixe-anjo",
      scientificName: "Paracanthurus hepatus",
      feeding: "Onívoro",
      tank_size: "200L",
      category: "Peixe de água salgada",
      price: 300.0,
      img: "https://images.unsplash.com/photo-1602345726771-5abd3172481f?q=80&w=2070",
      sizes: ["5cm", "10cm", "15cm"],
      description:
        "Dori é um peixe-anjo-real azul com perda de memória recente. Ela é otimista, bondosa e sempre disposta a ajudar, apesar de sua memória curta. Dori se torna amiga de Marlin na busca por Nemo e usa sua memória fragmentada e habilidades únicas para ajudá-los em sua jornada.",
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
      description:
        "Bruce é um tubarão-branco grande e amigável que frequenta o Clube dos Tubarões Vegetarianos. Ele é gentil e compassivo, apesar de sua aparência intimidante. Bruce se torna mentor de Marlin e Dori, ensinando-lhes sobre o oceano e ajudando-os em sua busca por Nemo.",
      warning:
        "Trate com cuidado e evite compartilhar o tanque com outras espécies.",
    },

    {
      id: 4,
      quantity: 1,
      name: "Peixe-Leão",
      scientificName: "Pterois volitans",
      feeding: "Carnívoro",
      tank_size: "400L",
      category: "Peixe de água salgada",
      price: 2000.0,
      img: "https://images.unsplash.com/photo-1560914369-3275292240f3?w=600",
      sizes: ["15cm", "25cm", "35cm"],
      description:
        "O Peixe-Leão é conhecido por suas cores vibrantes e barbatanas longas e pontiagudas que injetam veneno. Apesar da aparência ameaçadora, são relativamente dóceis com humanos, mas devem ser mantidos em tanques separados de outras espécies devido ao seu potencial predatório.",
      warning:
        "Manuseie com cuidado e evite contato com as barbatanas, pois o veneno pode causar dor e inchaço.",
    },
    {
      id: 5,
      quantity: 1,
      name: "Betta",
      scientificName: "Betta splendens",
      feeding: "Onívoro",
      tank_size: "20L",
      category: "Peixe de água doce",
      price: 50.0,
      img: "https://images.unsplash.com/photo-1616261855171-2fa9baff476e?w=600",
      sizes: ["5cm", "6cm", "7cm"],
      description:
        "O Betta Splendens, também conhecido como Betta Siamesa, é famoso por suas cores vibrantes e longas barbatanas fluidas. São peixes relativamente resistentes, mas machos devem ser mantidos em tanques separados para evitar brigas.",
      warning:
        "Evite superlotação e forneça esconderijos para reduzir o estresse.",
    },
    {
      id: 6,
      quantity: 10,
      name: "Guppy",
      scientificName: "Poecilia reticulata",
      feeding: "Onívoro",
      tank_size: "40L",
      category: "Peixe de água doce",
      price: 10.0,
      img: "https://images.unsplash.com/photo-1602143221967-ff9a1a490e00?q=80&w=1035",
      sizes: ["3cm", "4cm", "5cm"],
      description:
        "Os Guppies são peixes pequenos e coloridos, populares por sua facilidade de reprodução. São peixes pacíficos e vivem bem em grupos.",
      warning:
        "Mantenha a qualidade da água boa e forneça plantas aquáticas para esconderijos.",
    },
  ],
};

function parseProduct(prod) {
  return {
    id: prod._id,
    name: prod.name_species.match(/^[^\(]+/)[0],
    scientificName: prod.name_species.match(/(?<=\()[^\(|"]+/)[0],
    quantity: 10,
    feeding: prod.feeding,
    tankSize: prod.tank_size,
    sizes: prod.size.match(/(\d*\scm)+/g) || ["Tamanho não informado"],
    category: "Peixe",
    price: Number(prod.price.replace("$", "").trim()),
    img: "https:" + prod.picture,
    description: prod.description,
  };
}

export async function listAllProducts() {
  try {
    const data = await fetch("https://fishnet-api.onrender.com/fishs");
    const prods = await data.json();
    console.log(prods);
    return prods.slice(10, 40).map(parseProduct);
  } catch (error) {
    console.error(error.message);
  }
}

export async function getProductById(id) {
  const data = await fetch("https://fishnet-api.onrender.com/fishs/" + id);
  const prod = await data.json();
  return parseProduct(prod);
}
