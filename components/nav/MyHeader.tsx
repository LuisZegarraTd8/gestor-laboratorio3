import Link from "next/link";
import ButtonBlueDark from "../parts/ButtonBlueDark";
import Image from 'next/image';
import React, { useMemo } from "react";


const MyHeader = React.memo(function MyHeader() {
  const navItems = useMemo(() => ([
    { name: 'Nueva Orden', slug: 'new-order' },
    { name: 'Buscar Orden', slug: 'search-order' },
    { name: 'Buscar Paciente', slug: 'search-patient' }
  ]), []); // Memorizamos navItems

  return (
    <div className='bg-gris-muy-claro max-h-24 py-2 border-b-2 border-gris-claro'>
      <div className='flex flex-row mx-auto max-w-7xl justify-between items-center'>
        <div className="flex flex-row gap-5">
          <Link href="/" className="w-16 h-16 relative">
            <Image
              priority fill 
              src="/logo-cemevyf-2024.png" 
              alt="Logo" 
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" 
            />
          </Link>

          <nav className="flex gap-4 my-auto">
            {navItems.map(item => (
              <Link 
                key={item.slug}
                className="text-base font-semibold uppercase text-negro-opaco hover:text-azul hover:underline focus:text-azul focus:underline" 
                href={`/${item.slug}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <ButtonBlueDark text="Versión: Octubre 2024" /> 
        </div>
      </div>
    </div>
  );
});

export default MyHeader;
