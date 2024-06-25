import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
    <article className="relative flex h-full items-center justify-center">
      <div className="login-bg absolute inset-0 blur-[4px]"></div>
      <form
        className="z-10 flex rounded-lg border border-slate-300 bg-slate-100 p-6 py-9 text-slate-800 shadow-lg md:w-2/3 md:p-9"
        action="/"
      >
        <section className="mr-8 hidden flex-1 items-center justify-center border-r border-r-slate-300 pr-5 md:flex">
          <img
            src="/static/logo.jpg"
            alt="Logo FishNet"
            className="size-44 brightness-[96.5%]"
          />
        </section>
        <section className="flex-1">
          <h2 className="text-2xl font-semibold">Bem vindo(a)!</h2>

          <div className="mt-6 flex flex-col gap-5">
            <div>
              <span className="flex items-center rounded-lg border border-slate-200 bg-white shadow-sm">
                <UserIcon className="size-9 py-2" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="@username"
                />
              </span>
            </div>
            <div>
              <span className="flex items-center rounded-lg border border-slate-200 bg-white shadow-sm">
                <LockClosedIcon className="size-9 py-2" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="password123"
                />
              </span>
            </div>
            <a href="/reset-password" className="text-[#2EC4B6]">
              Esqueceu a senha?
            </a>
            <button
              type="submit"
              className="rounded-lg bg-[#2EC4B6] py-2 shadow-sm transition-all duration-300 hover:brightness-90"
            >
              Login
            </button>
          </div>
        </section>
      </form>
    </article>
  );
}

export default Login;
