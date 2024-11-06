import Logo from "./Logo";
import Link from "next/link";
import ButtonBlueDark from "../parts/ButtonBlueDark";


export default function MyHeader() {
    
    const navItems = [
        {name: 'Nueva Orden', slug: 'new-order'},
        {name: 'Buscar Orden', slug: 'search-order'},
        {name: 'Buscar Paciente', slug: 'search-patient'},
        {name: 'Ordenes Recientes', slug: 'recent-orders'}];
    
    return (
        <div className='bg-gris-muy-claro max-h-24 py-2 border-b-2  border-gris-claro'>
            <div className='flex flex-row mx-auto max-w-7xl justify-between items-center'>
                <div className="flex flex-row gap-5">
                    <Logo/>
                    <nav className="flex gap-4 my-auto">
                        {navItems.map(item=> (
                            <Link
                                key={item.name}
                                className="text-base font-semibold uppercase text-negro-opaco hover:text-azul hover:underline focus:text-azul focus:underline"
                                href={`/${item.slug}`}
                            >{item.name}</Link>
                        ))}
                    </nav>
                </div>
                <div>
                    <ButtonBlueDark text="Versión: Octubre 2024" />
                </div>
            </div>
        </div>
    )
}
