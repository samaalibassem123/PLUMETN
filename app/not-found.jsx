import React from 'react'

export default function page() {
  return(
  <main className='w-full h-screen flex items-center justify-center select-none dark:bg-black'>
        <div className="focus:after:contents[''] h-56 w-56 rounded-full absolute left-0 top-0 blur-2xl bg-gray-800 animate-pulse "></div>
        <div className="after:contents[''] h-56 w-40 rounded-l-full absolute top-40 right-0 blur-lg bg-green-300 animate-pulse"></div>
        <div className="after:contents[''] h-40  0 w-40 rounded-full absolute right-1/4 top-10 blur-2xl bg-gray-800 animate-pulse"></div>
        <div className="after:contents[''] h-56 w-56 rounded-full absolute right-1/2 bottom-0 blur-lg bg-green-500 animate-pulse"></div>
       <p className='text-3xl text-white font-ft'>Page Not Found | 404</p>
    </main>)
}