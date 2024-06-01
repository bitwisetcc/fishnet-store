import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-zinc-800/50">
        <DialogPanel className="max-w-lg space-y-4 border bg-slate-200 text-slate-800 p-12 h-[calc(100vh-4rem)] overflow-y-scroll">
          <DialogTitle className="font-bold">
            Termos de Privacidade da FinFusion
          </DialogTitle>

          <p>
            A FinFusion ("FinFusion", "nós", "noso" ou "nosso") está
            comprometida em proteger a privacidade de seus usuários ("usuário",
            "você" ou "seu"). Esta Política de Privacidade ("Política") descreve
            como coletamos, usamos e divulgamos suas informações pessoais quando
            você usa nosso site, aplicativo móvel ou outros serviços online
            (coletivamente, os "Serviços").
          </p>

          <DialogTitle className="font-bold">
            Coleta de Informações Pessoais
          </DialogTitle>

          <p>
            Coletamos as seguintes categorias de informações pessoais sobre
            você:
          </p>

          <ul>
            <li>
              Informações de contato: Nome, endereço de e-mail, número de
              telefone e endereço postal.
            </li>
            <li>
              Informações de pagamento: Informações de cartão de crédito ou
              débito, como número do cartão, data de validade e código de
              segurança.
            </li>
            <li>
              Informações de conta: Nome de usuário, senha e informações de
              perfil.
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
              Quando você cria uma conta: Coletamos seu nome, endereço de
              e-mail, senha e outras informações de contato quando você cria uma
              conta em nosso site ou aplicativo móvel.
            </li>
            <li>
              Quando você faz uma compra: Coletamos suas informações de
              pagamento quando você faz uma compra em nosso site ou aplicativo
              móvel.
            </li>
            <li>
              Quando você usa nossos serviços: Coletamos dados de uso e
              informações demográficas quando você usa nossos serviços, como
              navegar em nosso site ou aplicativo móvel.
            </li>
            <li>
              Quando você nos contata: Coletamos seu nome, endereço de e-mail e
              outras informações de contato quando você nos contata para obter
              suporte ou feedback.
            </li>
          </ul>

          <DialogTitle className="font-bold">
            Uso das Informações Pessoais
          </DialogTitle>

          <p>Usamos suas informações pessoais para os seguintes fins:</p>

          <ul>
            <li>
              Fornecer e melhorar nossos serviços: Usamos suas informações
              pessoais para fornecer e melhorar nossos serviços, como processar
              seus pedidos, fornecer atendimento ao cliente e recomendar
              produtos que você possa gostar.
            </li>
            <li>
              Comunicar-se com você: Usamos suas informações pessoais para
              comunicar-se com você sobre sua conta, seus pedidos e outros
              serviços.
            </li>
            <li>
              Fins de marketing: Usamos suas informações pessoais para fins de
              marketing, como enviar e-mails de marketing e anúncios
              personalizados.
            </li>
            <li>
              Estudos de mercado e análise: Usamos suas informações pessoais
              para fins de estudos de mercado e análise para nos ajudar a
              entender melhor nossos clientes e melhorar nossos serviços.
            </li>
            <li>
              Prevenção de fraudes: Usamos suas informações pessoais para
              prevenir fraudes e proteger nossa empresa e nossos clientes.
            </li>
          </ul>

          <DialogTitle className="font-bold">
            Divulgação de Informações Pessoais
          </DialogTitle>

          <p>
            Podemos divulgar suas informações pessoais para as seguintes
            entidades:
          </p>

          <ul>
            <li>
              Fornecedores de serviços: Podemos divulgar suas informações
              pessoais para fornecedores de serviços que nos ajudam a operar
              nossos negócios, como processadores de pagamento e empresas de
              hospedagem web.
            </li>
            <li>
              Terceiros em caso de litígio: Podemos divulgar suas informações
              pessoais a terceiros em caso de litígio ou investigação legal.
            </li>
            <li>
              Autoridades governamentais: Podemos divulgar suas informações
              pessoais a autoridades governamentais se formos obrigados a
              fazê-lo por lei ou se acreditarmos de boa fé que tal divulgação
              seja necessária para proteger nossos direitos ou os direitos de
              terceiros.
            </li>
          </ul>

          <DialogTitle className="font-bold">Suas escolhas</DialogTitle>

          <p>
            Você tem as seguintes opções em relação às suas informações
            pessoais:
          </p>

          <ul>
            <li>
              Acesso e correção: Você pode acessar e corrigir suas informações
              pessoais acessando sua conta online.
            </li>
            <li>
              Exclusão: Você pode solicitar que excluamos suas informações
              pessoais entrando em contato conosco em https://www.finfusion.com
            </li>
            <li>
              Descadastramento: Você pode cancelar o recebimento de e-mails de
              marketing clicando no link de cancelamento de inscrição na parte
              inferior de qualquer e-mail de marketing que você receber.
            </li>
            <h2>Segurança de dados</h2>
            <p>
              Tomamos medidas de segurança técnicas e organizacionais para
              proteger suas informações pessoais contra perda, roubo, uso
              indevido, acesso não autorizado, divulgação, alteração ou
              destruição.
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
              e-mail para o endereço de e-mail associado à sua conta ou
              publicando uma notificação em nosso site.
            </p>
            <h2>Contate-Nos</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política, entre em contato
              conosco em https://www.enfusion.com/.
            </p>
          </ul>
          <div className="flex gap-4">
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={() => setOpen(false)}>Deactivate</button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};