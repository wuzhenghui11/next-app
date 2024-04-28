'use client'
import Link from 'next/link'
import { useRouter, usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation'

export default function HomeLayout ({children, team, analytics}: {
  children: React.ReactNode
  team: React.ReactNode
  analytics: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const s = useSelectedLayoutSegment()
  const ss = useSelectedLayoutSegments()
  console.log(s, ss)
  return (
    <section>
      <div style={{display: 'flex'}}>
        <div>Home Layout</div>
        <Link style={{ color: pathname === '/home' ? 'red' : '' }} className={pathname === '/home' ? 'active' : ''} href="/home">Home</Link>
        <div style={{cursor: 'pointer'}} onClick={() => router.push(`./about/${11}`)}>about</div>
      </div>
      {children}
    </section>
  )
}
