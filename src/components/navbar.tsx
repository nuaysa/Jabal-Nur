import Image from "next/image";
import Link from "next/link";
import { Nav } from "./hamburger";

export default function Navbar (){
    return (
        <div className="fixed z-50 items-center py-8 lg:p-8 h-[40px] lg:w-[98.9vw] bg-orange-500/80 flex justify-between">
            <div className="w-[98.9vw] lg:hidden">
                <Nav/>
            </div>

            <div className="hidden lg:flex flex-row justify-center mt-2">
            <Link href="/" className="flex gap-2">
                <Image
                src="/logo.png"
                alt="logo"
                width={90}
                height={90}
                />
                </Link>
                <Link href="/" className="flex gap-2">
                <h1 className="text-2xl relative top-6 font-bold font-Sofia-Regular text-white">
                    Jabal Nur
                </h1>
                </Link>
            </div>


            <div className="justify-between gap-2 hidden lg:flex text-white">
            <Link href="/" className="py-1 px-3 rounded-lg hover:border border-orange-800 hover:backdrop-blur-sm hover:bg-orange-500/60">Home</Link>
            <Link href="/profile"  className="py-1 px-3 rounded-lg hover:border border-orange-800 hover:backdrop-blur-sm hover:bg-orange-500/60" >Profile</Link>
            <Link href="/service"  className="py-1 px-3 rounded-lg hover:border border-orange-800 hover:backdrop-blur-sm hover:bg-orange-500/60">Service</Link>
            </div>

        </div>
    )
}