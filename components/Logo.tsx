"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Logo() {
    const router = useRouter()

  return (
    <Image src="/images/logo.png" alt="tobamsgroup" width={500} height={500} 
    className="h-auto w-36 md:w-45 lg:w-35 xl:w-40 2xl:w-48 cursor-pointer"  
    onClick={() => router.push("/")}/>
  )
}
