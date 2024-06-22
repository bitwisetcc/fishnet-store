import Image from "next/image";
import SideMenu from "./SideMenu";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default async function Nav() {
  return (
    <div className={"sticky top-0 inset-x-0 z-50 group text-slate-700 " + rubik.className}>
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-stone-300 px-5">
        <nav className="content-container text-sm text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu />
            </div>
          </div>

          <div className="flex items-center h-full">
            <a href="/" className="text-sm font-semibold hover:text-stone-800 uppercase flex items-center">
              FishNet Store
              <Image src="/static/logo.jpg" alt="Logo da FishNet" width={40} height={40} className="rounded-full" />
            </a>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <a className="hover:text-stone-800" href="/account">
                Account
              </a>
            </div>
            <div className="relative">
              <input type="text" name="search" placeholder="Busca..."
              className="border border-stone-600 rounded-md px-3 py-2 focus:outline-none focus:border-stone-500"
              />
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 text-stone-500"
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
