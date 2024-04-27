'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function HomeLayout ({children}: {children: React.ReactNode}) {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <section>
      <div>Home Layout</div>
      <Link className={pathname === '/home' ? 'active' : ''} href="/home">Home</Link>
      <div style={{cursor: "pointer"}} onClick={() => router.push(`./about/${11}`)}>about</div>
      {children}
    </section>
  )
}
