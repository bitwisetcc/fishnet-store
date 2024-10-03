const API_URL = "https://fishnet-api-py-dev.onrender.com"

function parseProduct(prod) {
  return {
    ...prod,
    id: prod._id,
    quantity: 5,
    feeding: String(prod.feeding || "Alimentação não informada"),
    tankSize: String(prod.tank_size || "Tamanho do tanque não informado"),
    sizes: (prod.size ? String(prod.size).match(/\d+\s*cm/g) : null) || ["Tamanho não informado"],
    price: prod.price ? Number(String(prod.price).replace("$", "").trim()) : 0,
  };
}



export async function listAllProducts(page = 1, limit = 10) {
  try {
    const data = await fetch(`${API_URL}/itens`);
    const prods = await data.json();

    if (!Array.isArray(prods)) {
      return []; // Garante que retornamos um array vazio caso 'prods' não seja um array
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    return prods.slice(start, end).map(parseProduct);
  } catch (error) {
    console.error(error.message);
    return []; // Retorna um array vazio em caso de erro
  }
}


export async function getProductById(id) {
  const data = await fetch(`${API_URL}/itens/${id}`);
  const prod = await data.json();
  return parseProduct(prod);
}

export async function getProductByFilter(filters) {
  try {
    const query = new URLSearchParams(filters).toString();
    const data = await fetch(`${API_URL}/itens/filtros?${query}`);
    console.log(data);
    const prods = await data.json();

    if (!Array.isArray(prods)) {
      return []; // Garante que retornamos um array vazio caso 'prods' não seja um array
    }

    return prods.map(parseProduct);
  } catch (error) {
    console.error(error.message);
    return []; // Retorna um array vazio em caso de erro
  }
}


