import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex md:h-svh h-screen items-center justify-center static'>
        <div className="focus:after:contents[''] h-56 w-56 rounded-full absolute left-0 top-0 blur-2xl bg-gray-800 animate-pulse "></div>
        <div className="after:contents[''] h-56 w-56 rounded-full absolute right-0 blur-lg bg-green-500 animate-pulse"></div>
        <div className="after:contents[''] h-40  0 w-40 rounded-full absolute right-1/4 top-10 blur-2xl bg-gray-800 animate-pulse"></div>
        <div className="after:contents[''] h-56 w-56 rounded-full absolute right-1/2 bottom-0 blur-lg bg-green-500 animate-pulse"></div>
        {children}
        </body>
    </html>
  )
}