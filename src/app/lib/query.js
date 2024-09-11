const API_URL = "https://fishnet-api-py.onrender.com"

function parseProduct(prod) {
  return {
    ...prod,
    id: prod._id,
    quantity: 5,
    feeding: String(prod.feeding, "Alimentação não informada"),
    tankSize: String(prod.tank_size, "Tamanho do tanque não informado"),
    sizes: (prod.size ? String(prod.size).match(/\d+\s*cm/g) : null) || ["Tamanho não informado"],
    price: prod.price ? Number(String(prod.price).replace("$", "").trim()) : 0,
  };
}

export async function listAllProducts(page = 1, limit = 10) {
  try {
    const data = await fetch(`${API_URL}/itens`);
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
  const data = await fetch(`${API_URL}/itens/${id}`);
  const prod = await data.json();
  return parseProduct(prod);
}


export async function listProductNames(query = "", page = 1, limit = 10) {
  try {
    const response = await fetch(`${API_URL}/itens/filtro?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`);
    const prods = await response.json();
    console.log("Resposta da API:", prods);  

    const start = (page - 1) * limit;
    const end = start + limit;

    return prods.slice(start, end).map(prod => ({
      id: prod._id || "ID não disponível",
      name: prod.name || "Nome não disponível"
    }));

  } catch (error) {
    console.error("Erro ao buscar produtos:", error.message);
    return [];
  }
}
