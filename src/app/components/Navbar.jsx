import Image from "next/image";
import { Rubik } from "next/font/google";
import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const rubik = Rubik({ subsets: ["latin"] });

export default function Nav() {
  return (
    <div
      className={
        "group sticky inset-x-0 top-0 z-50 text-slate-200 " + rubik.className
      }
    >
      <header className="relative mx-auto h-20 text-nowrap border-b border-slate-900 bg-accent px-10 duration-200">
        <nav className="content-container flex h-full items-center justify-between text-sm">
          <div className="hidden items-center md:flex">
            <a
              href="/"
              className="flex items-center gap-3 text-sm text-golden-fish font-semibold hover:text-yellow-600 duration-150"
            >
              <Image
                src="/static/logo.jpg"
                alt="Logo da FishNet"
                width={40}
                height={40}
                className="rounded-full"
              />
              FISHNET STORE
            </a>
            <div className="relative ml-5">
              <input
                type="text"
                name="search"
                placeholder="O que você procura?"
                className="rounded-full border border-stone-600 px-3 py-2 focus:border-stone-500 focus:outline-none w-96"
              />
              <MagnifyingGlassIcon className="absolute right-3 top-1/2 h-5 -translate-y-1/2 transform text-stone-500" />
            </div>
          </div>

          <div className="flex h-full basis-0 items-center justify-end gap-x-6">
            <span href="/contact" className="flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="size-6 text-golden-fish" />
              Entre em contato
            </span>
            <a href="/profile" className="flex items-center gap-2">
              <UserCircleIcon className="size-6 text-golden-fish" />
              Bem vindo!
            </a>
            <a href="/cart">
              <ShoppingCartIcon className="size-6 text-golden-fish" />
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
