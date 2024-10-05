import { useRouter } from "next/navigation";
import { API_URL } from "./query";
import { useEffect } from "react";

export function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}

//Conexão onde retorna o erro pelo console da API
export async function login(email, password) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Erro na resposta da API:", errorText);
      throw new Error(`Erro na API: ${res.status}`);
    }

    const data = await res.json();
    const { token } = data;

    if (!token) throw new Error("Credenciais inválidas");

    localStorage.setItem("token", token);
    console.log("Autenticação completa");
  } catch (error) {
    console.error("Erro durante o login:", error);
    

  }
}











//Conexao padrão com a API
/* export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });
  const { token } = await res.json();

  if (token === undefined) throw Error("Credenciais inválidas");

  localStorage.setItem("token", token);
  console.log("Autenticação completa");
}

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      router.push("/login");
      return () => {};
    }

    fetch(`${API_URL}/auth/check`, { headers: { Authorization: token } }).catch(
      () => router.push("/login")
    );
  }, [router]);
}

export async function register(user) {
  if (Object.values(user).some((v) => v === ""))
    throw new Error("Cadastro incompleto");

  user.role = "cpf"; // TODO: add selection for CPF or CNPJ

  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const { token } = await res.json();

    if (token === undefined) return false;

    localStorage.setItem("token", token);
    return true;
  } catch {
    return false;
  }
}

*/