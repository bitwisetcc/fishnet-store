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

export async function listAllProducts(page = 1, limit = 10) {
  try {
    const data = await fetch("https://fishnet-api.onrender.com/fishs");
    const prods = await data.json();
    const start = (page - 1) * limit;
    const end = start + limit;
    return prods.slice(start, end).map(parseProduct);
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

export async function getProductById(id) {
  const data = await fetch("https://fishnet-api.onrender.com/fishs/" + id);
  const prod = await data.json();
  return parseProduct(prod);
}

