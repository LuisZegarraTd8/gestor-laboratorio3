import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link  href='/' className='w-16 h-16 relative'>
      <Image fill src="/logo-cemevyf-2024.png" alt="Logo" />
    </Link>
  )
}
