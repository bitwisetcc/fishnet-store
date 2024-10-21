'use client'

import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { login } from "../../lib/auth";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    const form = e.target;

    login(form.email.value, form.password.value)
      .then(() => router.push("/"))
      .catch((e) => setError(e.message));
  }

  return (
    <article className="flex items-center justify-center h-[100vh] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[300px] h-[300px] bg-[#CBAD51] opacity-30 rounded-full absolute -left-20 -bottom-20 animate-pulse"></div>
        <div className="w-[200px] h-[200px] bg-[#CBAD51] opacity-20 rounded-full absolute left-40 top-40 animate-pulse"></div>
        <div className="w-[150px] h-[150px] bg-[#CBAD51] opacity-25 rounded-full absolute right-10 bottom-10 animate-pulse"></div>
        <div className="w-[100px] h-[100px] bg-[#CBAD51] opacity-30 rounded-full absolute left-20 top-20 animate-pulse"></div>
        <div className="w-[180px] h-[180px] bg-[#CBAD51] opacity-20 rounded-full absolute right-40 bottom-40 animate-pulse"></div>
        <div className="w-[130px] h-[130px] bg-[#CBAD51] opacity-25 rounded-full absolute left-60 bottom-20 animate-pulse"></div>
        <div className="w-[90px] h-[90px] bg-[#CBAD51] opacity-30 rounded-full absolute right-60 top-10 animate-pulse"></div>
      </div>

      <form
        className="bg-slate-100 text-slate-800 border border-slate-400 rounded-lg p-9 shadow-lg z-10 flex flex-col md:flex-row w-11/12 md:w-2/3 max-w-[1200px]"
        onSubmit={submit}
      >
        <section className="flex-1 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-300 md:mr-8 pb-8 md:pb-0 md:pr-5">
          <Image
            src="/static/LogoSemFundo.png"
            alt="Logo FishNet"
            width={128}
            height={128}
          />
        </section>

        <section className="flex-1 mt-5 md:mt-0">
          <h2 className="text-2xl font-semibold">Bem vindo(a)!</h2>

          {error && (
            <p className="text-red-500 rounded-md border border-red-500 bg-red-300 flex flex-row items-center p-2 mt-2">
              <XMarkIcon className="size-5 text-red-800" />
              {error}
            </p>
          )}

          <div className="flex flex-col mt-4 gap-5">
            <div>
              <span className="flex bg-white rounded-lg items-center shadow-sm border border-slate-200">
                <UserIcon className="size-9 py-2 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="@username"
                  className="flex-1 p-2 bg-transparent outline-none"
                />
              </span>
            </div>
            <div>
              <span className="flex bg-white rounded-lg items-center shadow-sm border border-slate-200">
                <LockClosedIcon className="size-9 py-2 text-gray-500" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="password123"
                  className="flex-1 p-2 bg-transparent outline-none"
                />
              </span>
            </div>
            <a
              href="/reset-password"
              className="text-blue-dark hover:text-yellow-light w-max"
            >
              Esqueceu a senha?
            </a>
            <a
              href="/register"
              className="text-blue-dark hover:text-yellow-light w-max"
            >
              Não tem uma conta? Crie agora!
            </a>
            <button
              type="submit"
              className="bg-[#11223a] rounded-lg py-2 shadow-sm text-white hover:bg-blue-800 transition duration-300"
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
