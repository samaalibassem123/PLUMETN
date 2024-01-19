import React from 'react'

export default function loading() {
  return (
    <main className='w-full h-screen flex items-center justify-center select-none'>
        <div className="focus:after:contents[''] h-56 w-56 rounded-full absolute left-0 top-0 blur-2xl bg-gray-800 animate-pulse "></div>
        <div className="after:contents[''] h-56 w-56 rounded-full absolute top-52 right-0 blur-lg bg-green-200 animate-pulse"></div>
        <div className="after:contents[''] h-40  0 w-40 rounded-full absolute right-1/4 top-10 blur-2xl bg-gray-800 animate-pulse"></div>
        <div className="after:contents[''] h-56 w-56 rounded-full absolute right-1/2 bottom-0 blur-lg bg-green-500 animate-pulse"></div>
        <img src='/1200px-Plume.svg.png' height={50} width={50} className=' animate-bounce' />
        <p className='text-3xl bg-white font-ft font-bold'>Loading...</p>
    </main>
  )
}
