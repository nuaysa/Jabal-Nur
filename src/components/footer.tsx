import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col relative bottom-0 w-[98.8vw]z-20 footer min-h-[250px] bg-orange-500 text-white p-10">

        <div className="container flex justify-evenly">      
            <div>
              <h1 className="font-semibold mb-1">Explore</h1>
              <div className="flex flex-col gap-1">
                <Link href="/" className="hover:underline ">
                  Home
                </Link>
                <Link href="/profile" className="hover:underline ">
                  Profile
                </Link>
                <Link href="/service" className="hover:underline ">
                  Service
                </Link>
            </div>
              </div>

              <div className="flex flex-col">
                <h1 className="font-semibold mb-1">Contact Us</h1>
                <div className="flex flex-col text-center gap-2">
                <Link href="https://api.whatsapp.com/send/?phone=6281395102904&text&type=phone_number&app_absent=0" className="flex items-center gap-[3px] hover:underline"><FaWhatsapp className="text-[22px]"/>+62-813-9510-2904</Link>
                <Link href="https://www.instagram.com/jabalnur.tasik/" className="flex items-center gap-[3px] hover:underline"><FaInstagram className="text-[22px]"/>@jabalnur.tasik</Link>
                <Link href="" className="flex items-center gap-[3px] hover:underline"><FaTiktok className="text-[22px]"/>@jabalnur.tasik</Link>
                </div>
              </div>
          </div>
          <div className="text-center mt-8">
            <p>This website was developed by <span className="hover:text-orange-300"><Link href={"https://www.instagram.com/an_nvd/?hl=id"}> Allysa Naveeda </Link></span>for Jabal Nur. © 2024 Jabal Nur. All rights reserved</p>
          </div>
    </div>
  );
}
