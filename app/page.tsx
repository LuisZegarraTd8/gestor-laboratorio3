import MyAlertInfo from '@/components/alert/MyAlertInfo';
import Link from "next/link";
import Image from 'next/image';

export default function Home() {

    const navItems = [
        {name: 'Nueva Orden', slug: 'new-order'},
        {name: 'Buscar Orden', slug: 'search-order'},
        {name: 'Buscar Paciente', slug: 'search-patient'}];

  return (
    <div className="max-w-7xl flex flex-col mx-auto gap-6 h-full">

        <div className='bg-gris-muy-claro px-5 py-12 rounded-lg flex flex-col gap-6 h-[90%] justify-center'>

            <div className='w-40 h-40 relative mx-auto'>
                <Image fill src="/logo-cemevyf-2024.png" alt="Logo" />
            </div>

            <h1 className='text-2xl font-bold text-negro-claro uppercase text-center'>Gestor de Ordenes y Pacientes - CEMEVYF</h1>
            

            <nav className="flex flex-col w-1/4 gap-4 mx-auto">
                {navItems.map((item) => (
                        <Link
                            key={item.name}
                            className={`isolate relative z-10 w-full text-center rounded border-2 border-azul-oscuro bg-azul-oscuro/85 px-5 py-2 text-sm font-medium uppercase text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-azul-oscuro before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 active:brightness-110`}
                            href={`/${item.slug}`}
                        >{item.name}</Link>
                ))}
            </nav>
        </div>
    </div>
  );
}
