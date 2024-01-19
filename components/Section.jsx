import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Section() {
  return (
   <div className="flex  flex-col  items-center bg-black  lg:justify-center text-pretty select-none w-full lg:space-y-24 space-y-60 p-5">
        <p className='text-white text-balance text-center lg:text-md text-xl lg:leading-0 leading-loose lg:space-y-0 '>
        Si vous êtes enseignant ou élève, <span className='lg:text-3xl text-6xl text-green-400'>La Plume</span> est une plateforme d'apprentissage en ligne que vous devriez envisager d'utiliser.
        </p>
        <Link href='/register' className=' transition-all delay-100 ease-in-out text-white text-3xl border p-5 border-green-500 bg-green-500 shadow-2xl shadow-green-800 animate-bounce  hover:bg-green-800 hover:border-none hover:text-black hover:animate-none '>Get Started</Link>
   </div>
  )
}
