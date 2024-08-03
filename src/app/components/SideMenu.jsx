"use client";

import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const SideMenuItems = {
  Home: "/",
  Produtos: "/products",
  Perfil: "/profile",
};

export default function SideMenu() {
  const [state, toggleState] = useState(false);

  return (
    <div className="h-full">
      <div className="flex h-full items-center">
        <Popover className="flex h-full">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button className="relative flex h-full items-center transition-all duration-200 ease-out hover:text-stone-300 focus:outline-none">
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="absolute inset-x-0 z-30 m-2 flex h-[calc(100vh-1rem)] w-full flex-col pr-4 text-sm backdrop-blur-2xl sm:w-1/3 sm:min-w-min sm:pr-0 2xl:w-1/4">
                  <div className="flex h-full flex-col justify-between rounded-lg bg-[rgba(3,7,18,0.5)] p-6">
                    <div
                      className="flex justify-end text-2xl text-stone-300"
                      id="xmark"
                    >
                      <button onClick={close}>×</button>
                    </div>
                    <ul className="flex flex-col items-start justify-start gap-6">
                      <li>
                        <a
                          href="/"
                          className="flex items-center gap-3 text-3xl leading-10 text-stone-300 transition-colors duration-300 *:stroke-2 hover:text-stone-400"
                          onClick={close}
                        >
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
                              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                          </svg>
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/products"
                          className="flex items-center gap-3 text-3xl leading-10 text-stone-300 transition-colors duration-300 *:stroke-2 hover:text-stone-400"
                          onClick={close}
                        >
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
                              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                          </svg>
                          <span>Produtos</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/profile"
                          className="flex items-center gap-3 text-3xl leading-10 text-stone-300 transition-colors duration-300 *:stroke-2 hover:text-stone-400"
                          onClick={close}
                        >
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
                              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                          <span>Perfil</span>
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={() => toggleState(true)}
                        onMouseLeave={() => toggleState(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`h-6 w-6 transition-transform duration-150 ${
                            toggleState ? "-rotate-90" : ""
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
