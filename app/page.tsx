'use client'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, usePathname} from 'next/navigation'

export default function Home () {
  const pathname = usePathname()
  /* if (pathname === '/') {
    redirect('/home')
  } */
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/home">Home</Link>
      <Link href="/article">article</Link>
    </main>
  )
}
