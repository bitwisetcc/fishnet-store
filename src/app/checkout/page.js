import CartSummary from "../components/CartSummary";
import FancyInput from "../components/FancyInput";
import { listAllProducts } from "../lib/query";

export default () => {
  const prods = listAllProducts();
  return (
    <section className="flex gap-16 p-8 pr-12 flex-col md:flex-row">
      <Checkout />
      <CartSummary total={prods.reduce((a, b) => a + b.price, 0)} />
    </section>
  );
};

function Checkout() {
  return (
    <section className="flex-[2] pr-4 lg:pr-24">
      <h1 className="text-2xl font-semibold mb-8">Finalização</h1>
      <article>
        <h2 className="text-xl mb-4">Endereço de entrega</h2>
        <form className="grid grid-cols-2 gap-4">
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
      </form>
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

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <h1>Termos de Privacidade da FinFusion</h1>

      <p>
        A FinFusion ("FinFusion", "nós", "noso" ou "nosso") está comprometida em
        proteger a privacidade de seus usuários ("usuário", "você" ou "seu").
        Esta Política de Privacidade ("Política") descreve como coletamos,
        usamos e divulgamos suas informações pessoais quando você usa nosso
        site, aplicativo móvel ou outros serviços online (coletivamente, os
        "Serviços").
      </p>

      <h2>Coleta de Informações Pessoais</h2>

      <p>
        Coletamos as seguintes categorias de informações pessoais sobre você:
      </p>

      <ul>
        <li>
          Informações de contato: Nome, endereço de e-mail, número de telefone e
          endereço postal.
        </li>
        <li>
          Informações de pagamento: Informações de cartão de crédito ou débito,
          como número do cartão, data de validade e código de segurança.
        </li>
        <li>
          Informações de conta: Nome de usuário, senha e informações de perfil.
        </li>
        <li>
          Informações de compra: Histórico de compras, itens favoritos e
          preferências de compra.
        </li>
        <li>
          Dados de uso: Endereço IP, navegador da web e sistema operacional,
          data e hora da sua visita, páginas visualizadas e tempo gasto nas
          páginas.
        </li>
        <li>
          Informações demográficas: Idade, sexo, localização e interesses.
        </li>
      </ul>

      <p>Coletamos essas informações das seguintes maneiras:</p>

      <ul>
        <li>
          Quando você cria uma conta: Coletamos seu nome, endereço de e-mail,
          senha e outras informações de contato quando você cria uma conta em
          nosso site ou aplicativo móvel.
        </li>
        <li>
          Quando você faz uma compra: Coletamos suas informações de pagamento
          quando você faz uma compra em nosso site ou aplicativo móvel.
        </li>
        <li>
          Quando você usa nossos serviços: Coletamos dados de uso e informações
          demográficas quando você usa nossos serviços, como navegar em nosso
          site ou aplicativo móvel.
        </li>
        <li>
          Quando você nos contata: Coletamos seu nome, endereço de e-mail e
          outras informações de contato quando você nos contata para obter
          suporte ou feedback.
        </li>
      </ul>

      <h2>Uso das Informações Pessoais</h2>

      <p>Usamos suas informações pessoais para os seguintes fins:</p>

      <ul>
        <li>
          Fornecer e melhorar nossos serviços: Usamos suas informações pessoais
          para fornecer e melhorar nossos serviços, como processar seus pedidos,
          fornecer atendimento ao cliente e recomendar produtos que você possa
          gostar.
        </li>
        <li>
          Comunicar-se com você: Usamos suas informações pessoais para
          comunicar-se com você sobre sua conta, seus pedidos e outros serviços.
        </li>
        <li>
          Fins de marketing: Usamos suas informações pessoais para fins de
          marketing, como enviar e-mails de marketing e anúncios personalizados.
        </li>
        <li>
          Estudos de mercado e análise: Usamos suas informações pessoais para
          fins de estudos de mercado e análise para nos ajudar a entender melhor
          nossos clientes e melhorar nossos serviços.
        </li>
        <li>
          Prevenção de fraudes: Usamos suas informações pessoais para prevenir
          fraudes e proteger nossa empresa e nossos clientes.
        </li>
      </ul>

      <h2>Divulgação de Informações Pessoais</h2>

      <p>
        Podemos divulgar suas informações pessoais para as seguintes entidades:
      </p>

      <ul>
        <li>
          Fornecedores de serviços: Podemos divulgar suas informações pessoais
          para fornecedores de serviços que nos ajudam a operar nossos negócios,
          como processadores de pagamento e empresas de hospedagem web.
        </li>
        <li>
          Terceiros em caso de litígio: Podemos divulgar suas informações
          pessoais a terceiros em caso de litígio ou investigação legal.
        </li>
        <li>
          Autoridades governamentais: Podemos divulgar suas informações pessoais
          a autoridades governamentais se formos obrigados a fazê-lo por lei ou
          se acreditarmos de boa fé que tal divulgação seja necessária para
          proteger nossos direitos ou os direitos de terceiros.
        </li>
      </ul>

      <h2>Suas escolhas</h2>

      <p>
        Você tem as seguintes opções em relação às suas informações pessoais:
      </p>

      <ul>
        <li>
          Acesso e correção: Você pode acessar e corrigir suas informações
          pessoais acessando sua conta online.
        </li>
        <li>
          Exclusão: Você pode solicitar que excluamos suas informações pessoais
          entrando em contato conosco em https://www.finfusion.com
        </li>
        <li>
          Descadastramento: Você pode cancelar o recebimento de e-mails de
          marketing clicando no link de cancelamento de inscrição na parte
          inferior de qualquer e-mail de marketing que você receber.
        </li>
        <h2>Segurança de dados</h2>
        <p>
          Tomamos medidas de segurança técnicas e organizacionais para proteger
          suas informações pessoais contra perda, roubo, uso indevido, acesso
          não autorizado, divulgação, alteração ou destruição.
        </p>
        <h2>Armazenamento de dados</h2>
        <p>
          Armazenamos suas informações pessoais em servidores localizados no
          Brasil.
        </p>
        <h2>Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta Política de tempos em tempos. Notificaremos
          você sobre qualquer alteração material nesta Política enviando um
          e-mail para o endereço de e-mail associado à sua conta ou publicando
          uma notificação em nosso site.
        </p>
        <h2>Contate-Nos</h2>
        <p>
          Se você tiver alguma dúvida sobre esta Política, entre em contato
          conosco em https://www.enfusion.com/.
        </p>
      </ul>
    </div>
  );
};
