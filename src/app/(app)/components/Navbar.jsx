import Image from "next/image";
import SideMenu from "./SideMenu";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Nav() {
  return (
    <div
      className={
        "group sticky inset-x-0 top-0 z-50 text-slate-700 " + rubik.className
      }
    >
      <header className="relative mx-auto h-16 border-b border-stone-300 bg-white px-5 duration-200">
        <nav className="content-container text-ui-fg-subtle text-small-regular flex h-full w-full items-center justify-between text-sm">
          <div className="flex h-full flex-1 basis-0 items-center">
            <div className="h-full">
              <SideMenu />
            </div>
          </div>

          <div className="hidden h-full items-center md:flex">
            <a
              href="/"
              className="flex items-center text-sm font-semibold uppercase hover:text-stone-800"
            >
              FishNet Store
              <Image
                src="/static/logo.jpg"
                alt="Logo da FishNet"
                width={40}
                height={40}
                className="rounded-full"
              />
            </a>
          </div>

          <div className="flex h-full flex-1 basis-0 items-center justify-end gap-x-6">
            <div className="small:flex hidden h-full items-center gap-x-6">
              <a className="hover:text-stone-800" href="/account">
                Account
              </a>
            </div>
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Busca..."
                className="rounded-md border border-stone-600 px-3 py-2 focus:border-stone-500 focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute right-3 top-1/2 h-5 -translate-y-1/2 transform text-stone-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                />
              </svg>
            </div>
            <a href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
