import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Section from "@/components/Section"
export default function page() {
  return (
    <main className=" bg-gradient-to-r from-green-300 to-gray-400 h-screen font-ft">
      <Header />
      <div className="flex p-5 h-5/6  ">
        <Section/>
      </div>
      
    </main>
  )
}
