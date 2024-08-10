export default function Footer() {
    return (
        <div>
            <section className="section-footer bg-slate-50">
                <div className="wave wave1">
                    <img className="size-full" />
                </div>
                <div className="wave wave2">
                    <img className="size-full" />
                </div>
                <div className="wave wave3">
                    <img className="size-full" />
                </div>
                <div className="wave wave4">
                    <img className="size-full" />
                </div>
            </section>

            <section className="bg-accent text-white p-10">
                <div className="grid grid-cols-3">
                    <div className="flex justify-center items-center">
                    <img
                        src="/static/logo2.jpg"
                        alt="Logo FishNet"
                        className="size-44 brightness-[96.5%] rounded-lg shadow-lg"
                    />
                    </div>
                    <div>tesdte</div>
                    <div>teste</div>
                </div>
            </section>
        </div>
    );    
}
