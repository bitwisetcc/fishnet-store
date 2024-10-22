export default function Footer() {
    return (
      <div>
        <section className="section-footer bg-slate-50">
          <div className="wave wave1">
            <img className="" />
          </div>
          <div className="wave wave2">
            <img className="" />
          </div>
          <div className="wave wave3">
            <img className="" />
          </div>
          <div className="wave wave4">
            <img className="" />
          </div>
        </section>
  
        <section className="bg-accent text-white p-5 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex justify-center items-center">
              <img
                src="/static/logo2.png"
                alt="Logo FishNet"
                className="size-56 brightness-[96.5%] bg-transparent"
              />
            </div>
            <div className="flex justify-center items-center">
              <ul className="text-center">
                <li className="font-semibold">Nossos Contatos</li>
                <li>FishNet@gmail.com</li>
                <li>+55 11 96954-4326</li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <ul className="text-center">
                <li className="transform hover:text-golden-fish hover:scale-105 transition duration-300">
                  <a href="https://fishnet-management.vercel.app">Entre como Funcionário Aqui</a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center space-x-5 pt-4 pb-2">
            <a href="//www.instagram.com">
              <img
                src="/static/igIcon.png"
                alt="Instagram Icon"
                className="size-10 brightness-[96.5%] bg-transparent"
              />
            </a>
            <a href="//www.whatsapp.com">
              <img
                src="/static/wppIcon.png"
                alt="Whatsapp Icon"
                className="size-10 brightness-[96.5%] bg-transparent"
              />
            </a>
            <a href="//www.facebook.com">
              <img
                src="/static/fbIcon.png"
                alt="Facebook Icon"
                className="size-10 brightness-[96.5%] bg-transparent"
              />
            </a>
            <a href="//youtube.com">
              <img
                src="/static/ytIcon.png"
                alt="Youtube Icon"
                className="size-10 brightness-[96.5%] bg-transparent"
              />
            </a>
          </div>
          <div className="flex pb-8 pt-6">
            <hr className="flex w-full border-golden-fish" />
          </div>
        </section>
      </div>
    );
  }
  