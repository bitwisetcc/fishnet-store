const API_URL = "https://fishnet-api-py.onrender.com"

function parseProduct(prod) {
  return {
    ...prod,
    id: prod._id,
    quantity: 5,
    feeding: String(prod.feeding),
    tankSize: String(prod.tank_size),
    sizes: prod.size.match(/(\d*\scm)+/g) || ["Tamanho não informado"],
  };
}

export async function listAllProducts(page = 1, limit = 10) {
  try {
    const data = await fetch(`${API_URL}/prods`);
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
  const data = await fetch(`${API_URL}/prods/${id}`);
  const prod = await data.json();
  return parseProduct(prod);
}

let cachedProducts = null;

export async function listProductNames(query = "", page = 1, limit = 10) {
  if (cachedProducts === null) {
    try {
      const response = await fetch(`${API_URL}/prods`);
      if (!response.ok) {
        throw new Error('Erro ao buscar produtos: ' + response.statusText);
      }
      const prods = await response.json();
      console.log("Resposta da API:", prods);
      cachedProducts = prods;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error.message);
      return [];
    }
  }

  const filteredProds = cachedProducts.filter(prod =>
    prod.name.toLowerCase().includes(query.toLowerCase())
  );

  const start = (page - 1) * limit;
  const end = start + limit;

  return filteredProds.slice(start, end).map(prod => ({
    id: prod._id || "ID não disponível",
    name: prod.name || "Nome não disponível"
  }));
}
