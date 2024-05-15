import SideMenu from "./SideMenu";

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group text-stone-600">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-stone-300 px-5">
        <nav className="content-container text-sm text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu />
            </div>
          </div>

          <div className="flex items-center h-full">
            <a href="/" className="text-sm hover:text-stone-800 uppercase">
              FinFusion Store
            </a>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <a className="hover:text-stone-800" href="/account">
                Account
              </a>
            </div>
            <a href="/cart">
              Carrinho
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
