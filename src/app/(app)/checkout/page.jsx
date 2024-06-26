"use client";

// import { listFullCa  rtItems } from "@/app/lib/cart";
import { useEffect, useState } from "react";
import CartSummary from "../components/CartSummary";
import FancyInput from "../components/FancyInput";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ProductLine from "../components/ProductLine";
import { listAllProducts } from "@/app/lib/query";
import CartItems from "../components/CartItems";

export default () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    listAllProducts()
      .then((data) =>
        data.filter(
          (prod) =>
            prod.id == "665df63d63d2f7c6c73305f9" ||
            prod.id == "665df63d63d2f7c6c7330629" ||
            prod.id == "665df63d63d2f7c6c7330619",
        ),
      )
      .then((res) => {
        setCart(res);
      });
  }, []);

  const calculateTotal = () => {
    return cart
      ? cart.reduce((total, prod) => total + prod.price * prod.quantity, 0)
      : 0;
  };

  return (
    <section className="gap-16 p-8 pr-12 md:flex">
      <Checkout />
      <section className="hidden flex-1 md:block">
        <CartSummary total={calculateTotal()} />
      </section>
    </section>
  );
};

function Checkout() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <section className="flex-[2] pr-4 lg:px-24">
      <h1 className="mb-8 text-2xl font-semibold">Finalização</h1>
      <article>
        <h2 className="mb-4 text-xl">Endereço de entrega</h2>
        <form className="grid gap-4 md:grid-cols-2">
          <FancyInput label="Nome" required />
          <FancyInput label="Sobrenome" required />
          <FancyInput label="Endereço" required />
          <FancyInput label="CEP" required />
          <FancyInput label="Cidade" />
          <FancyInput label="Estado" />
          <FancyInput label="E-mail" required />
          <FancyInput label="Telefone" />
        </form>
      </article>
      <hr className="my-6" />
      <form>
        <h2 className="mb-4 text-xl">Entrega</h2>
        <ul className="radio-list">
          <FancyRadio
            label="Correios (5-7 dias úteis)"
            name="shipping"
            value="correios"
          />
          <FancyRadio
            label="Fedex (2-3 dias úteis)"
            name="shipping"
            value="fedex"
          />
          <FancyRadio
            label="Jadlog (2-3 dias úteis)"
            name="shipping"
            value="jadlog"
          />
          <FancyRadio
            label="Loggi (2-3 dias úteis)"
            name="shipping"
            value="loggi"
          />
        </ul>
      </form>
      <hr className="my-6" />
      <form action="/">
        <h2 className="mb-4 text-xl">Pagamento</h2>
        <ul className="radio-list">
          <FancyRadio label="Cartão de débito" name="payment" value="debito" />
          <FancyRadio
            label="Cartão de crédito"
            name="payment"
            value="credito"
          />
          <FancyRadio label="PIX" name="payment" value="pix" />
        </ul>

        <button className="action">Finalizar compra</button>

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

function FancyRadio({ label, name, value }) {
  return (
    <li className="has-[:checked]:border-cyan-600 has-[:checked]:bg-sky-100">
      <input type="radio" name={name} value={value} required />
      <label>{label}</label>
    </li>
  );
}
