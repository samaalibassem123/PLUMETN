'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"

export default function Header() {

    const [ok,setOk] = useState(true);



  return (
    <header className='flex items-center p-5 font-ft shadow-lg justify-between  bg-white select-none'>
        <div className="flex items-center">
            <Image src='/1200px-Plume.svg.png'  width={80} height={80}/>
        <h1 className='text-3xl font-bold cursor-pointer'>La Plume</h1>
        </div>

        <div className="lg:flex hidden items-center justify-between w-1/6">
            <Link href='/' className='text-xl font-semibold hover:text-green-500 '>Home</Link>
            <Link href='/about' className='text-xl font-semibold hover:text-green-500'>about</Link>
        </div>

        <div className="lg:flex hidden w-1/6 justify-between items-center">
            <Link href='/login' className=' transition-all ease-in-out delay-50 text-xl  border-black hover:text-white hover:bg-black  p-3 px-5 animate-pulse hover:animate-none border-2 font-semibold '>Log in</Link>
            <Link href='/register' className=' transition-all ease-in-out delay-50 text-xl border border-black hover:text-white hover:bg-black  p-3 px-5' >Sign up</Link>
        </div>




        <div className="lg:hidden flex transition-all delay-100 ease-linear">
            
            <button onClick={()=>{setOk(!ok)}}>
                {ok ?
                <div className=" animate-bounce">
                <Image src='/menu-burger.svg' width={30} height={30} /></div> 
                :
                <motion.div className=" absolute z-50  top-0 w-full h-screen bg-gradient-to-tr from-green-200 to-yellow-50"
                
                animate={
                    {   
                        y:0,
                        x:'-95%',
                    }
                }
                
                >
                    <div className="p-3 my-5 animate-bounce">
                        <Image src='/cross.svg'  width={30} height={30} />
                    </div>
                     

                    <Link href='/' className='text-3xl bg-black text-white block w-full p-2 my-9 text-center'>Home</Link>
                    <Link href='/about' className='text-3xl bg-black text-white block w-full p-2 my-9'>About</Link>

                    <div className="flex  w-full justify-between items-center  h-full">
                        <Link href='/login' className=' transition-all ease-in-out delay-50 text-3xl border border-black hover:text-white hover:bg-black   p-3 px-5 m-5 '>Log in</Link>
                        <Link href='/register' className=' transition-all ease-in-out delay-50 text-3xl border border-black hover:text-white hover:bg-black  p-3 px-5 m-5' >Sign up</Link>
                    </div>
                     
                </motion.div>
               }
                
                
            </button>
            
        </div>
        
    </header>
  )
}
