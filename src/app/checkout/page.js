"use client";

import CartSummary from "../components/CartSummary";
import FancyInput from "../components/FancyInput";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ProductLine from "../components/ProductLine";
import { listFullCartItems } from "../lib/cart";
import { useEffect, useState } from "react";

export default () => {
  const cart = listFullCartItems();
  useEffect(() => {console.log(cart[0])}, []);
  return (
    <section className="md:flex gap-16 p-8 pr-12">
      <Checkout />
      <section className="flex-1 hidden md:block">
        <CartSummary total={cart.reduce((a, b) => a + b.price, 0)} />
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="mt-3">
              <ProductLine product={product} />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

function Checkout() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <section className="flex-[2] pr-4 lg:px-24">
      <h1 className="text-2xl font-semibold mb-8">Finalização</h1>
      <article>
        <h2 className="text-xl mb-4">Endereço de entrega</h2>
        <form className="grid md:grid-cols-2 gap-4">
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
        <h2 className="text-xl mb-4">Entrega</h2>
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
      <form>
        <h2 className="text-xl mb-4">Pagamento</h2>
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
    <li className="has-[:checked]:bg-sky-100 has-[:checked]:border-cyan-600">
      <input type="radio" name={name} value={value} required />
      <label>{label}</label>
    </li>
  );
}
