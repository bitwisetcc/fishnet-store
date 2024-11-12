"use client";

import CartSummary from "@/app/components/CartSummary";
import FancyInput, { StatefullFancyInput } from "@/app/components/FancyInput";
import PrivacyPolicy from "@/app/components/PrivacyPolicy";
import { clearCart, listCartItems } from "@/app/lib/cart";
import { API_URL, getProductById } from "@/app/lib/query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChecloutPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchCartItems = async () => {
      try {
        const cartItems = await listCartItems(signal); // Fetch cart items
        const fullCartItems = await Promise.all(
          cartItems.map(async (item) => {
            const product = await getProductById(item.id);
            return { ...product, ...item };
          }),
        );
        setCart(fullCartItems || []); // Ensure fullCartItems is an array
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();

    return () => abortController.abort();
  }, []);

  const calculateTotal = () => {
    return cart
      ? cart.reduce((total, prod) => total + prod.price * prod.quantity, 0)
      : 0;
  };

  const subtotal = calculateTotal();
  const tax = subtotal * 0.05;
  const shipping = subtotal > 0 ? 29.99 : 0;

  return (
    <section className="gap-16 p-8 pr-12 md:flex">
      <Checkout tax={tax} shipping={shipping} />
      <section className="hidden flex-1 md:block">
        <CartSummary subtotal={subtotal} tax={tax} shipping={shipping} />
      </section>
    </section>
  );
}

function Checkout({ tax, shipping }) {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("pix"); // credit-***, debit-***, pix
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [estado, setState] = useState("");
  const [city, setCity] = useState("");

  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    data.customer = {
      name: data.username,
      surname: data.surname,
      email: data.email,
      tel: data.tel,
      cep: data.cep,
      addr: data.addr,
      city: data.city,
      state: data.state,
    };

    delete data.username;
    delete data.surname;
    delete data.email;
    delete data.tel;
    delete data.cep;
    delete data.addr;
    delete data.city;
    delete data.state;

    data.items = listCartItems().map((item) => {
      item.qty = item.quantity;
      delete item.quantity;
      return item;
    });

    data.tax = tax;
    data.shipping = shipping;

    if (data.shipping_provider == undefined) {
      data.shipping_provider = "";
    }

    data.status = data.payment_method == "credit" ? 0 : 1;

    try {
      const res = await fetch(`${API_URL}/sales/new`, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const inserted = await res.json();
      clearCart();
      router.push("/");

      console.log(inserted);
    } catch (err) {
      console.error(err);
    }
  }

  async function getAddrFromCep(cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`, {
        headers: { "Access-Control-Allow-Origin": "https://viacep.com.br" },
      });

      const data = await response.json();
      console.log(data);
      setStreet(data.logradouro);
      setCity(data.localidade);
      setState(data.uf);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="flex-[2] pr-4 lg:px-24">
      <h1 className="mb-8 text-2xl font-semibold">Finalização</h1>

      <form onSubmit={submit}>
        <h2 className="mb-4 text-xl">Endereço de entrega</h2>
        <section className="grid gap-4 md:grid-cols-2">
          <FancyInput name="username" label="Nome" required />
          <FancyInput name="surname" label="Sobrenome" required />
          <StatefullFancyInput
            name="cep"
            label="CEP"
            required
            bye={getAddrFromCep}
            setter={setCep}
            state={cep}
          />
          <StatefullFancyInput
            name="addr"
            label="Endereço"
            required
            setter={setStreet}
            state={street}
          />
          <StatefullFancyInput
            name="city"
            label="Cidade"
            setter={setCity}
            state={city}
          />
          <StatefullFancyInput
            name="state"
            label="Estado"
            setter={setState}
            state={estado}
          />
          <FancyInput name="email" label="E-mail" htmlAccept="email" required />
          <FancyInput name="tel" label="Telefone" />
        </section>

        <hr className="my-6" />

        <h2 className="mb-4 text-xl">Entrega</h2>
        <ul className="radio-list">
          <FancyRadio
            label="Correios (5-7 dias úteis)"
            name="shipping_provider"
            value="correios"
          />
          <FancyRadio
            label="Fedex (2-3 dias úteis)"
            name="shipping_provider"
            value="fedex"
          />
          <FancyRadio
            label="Jadlog (2-3 dias úteis)"
            name="shipping_provider"
            value="jadlog"
          />
          <FancyRadio
            label="Loggi (2-3 dias úteis)"
            name="shipping_provider"
            value="loggi"
          />
        </ul>

        <hr className="my-6" />

        <h2 className="mb-4 text-xl">Pagamento</h2>
        <ul className="radio-list">
          <FancyRadio
            label="Cartão de débito"
            name="payment_method"
            value="debit"
            checked={paymentMethod == "debit"}
            onChecked={() => setPaymentMethod("debit")}
          />
          <FancyRadio
            label="Cartão de crédito"
            name="payment_method"
            value="credit"
            checked={paymentMethod == "credit"}
            onChecked={() => setPaymentMethod("credit")}
          />
          <FancyRadio
            label="PIX"
            name="payment_method"
            value="pix"
            checked={paymentMethod == "pix"}
            onChecked={() => setPaymentMethod("pix")}
          />
        </ul>

        {paymentMethod !== "pix" && (
          <>
            <h3 className="mt-5 text-lg">Operadora de cartão</h3>
            <div className="mt-4 w-full rounded-lg border border-stone-300 bg-transparent py-4 pl-10 pr-10 shadow-sm">
              <select
                name="payment_provider"
                id="sl-payment_provider"
                className="w-full bg-transparent *:font-sans"
              >
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="americanexpress">American Express</option>
              </select>
            </div>
          </>
        )}

        <button className="action mt-4">Finalizar compra</button>

        <p className="mt-3 text-xs md:text-sm">
          Ao finalizar a compra você concorda com a nossa{" "}
          <button
            className="text-cyan-700"
            onClick={() => setPrivacyOpen(true)}
          >
            política de privacidade
          </button>
          .
        </p>
      </form>
      <PrivacyPolicy open={privacyOpen} setOpen={setPrivacyOpen} />
    </section>
  );
}

function FancyRadio({ label, name, value, checked = null, onChecked = null }) {
  return (
    <li className="has-[:checked]:border-cyan-600 has-[:checked]:bg-sky-100">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChecked}
        required
      />
      <label>{label}</label>
    </li>
  );
}
