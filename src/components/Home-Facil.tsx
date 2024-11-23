import Image from "next/image";
import Link from "next/link";
import { BsHouse } from "react-icons/bs";
import { FaBolt, FaHiking, FaMosque, FaParking, FaRestroom, FaWifi } from "react-icons/fa";
import { MdOutlineHotTub, MdPool } from "react-icons/md";
import { PiTent} from "react-icons/pi";

export default function Fasil() {
    return (
        <div className="bg-white w-screen h-full py-10 px-5 lg:px-0 flex flex-col justify-evenly items-center my-20 gap-20">
            <div className="flex flex-col lg:flex-row gap-40">
          

            <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-2xl min-h-[560px] min-w-[400px] px-10 text-white flex flex-col py-10 gap-5">
                <h1 className="text-3xl font-semibold">
                    Fasilitas :
                </h1>
                <div className="flex gap-5 text-2xl items-center">
                <PiTent /> <p>Area Kemah</p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <FaMosque /> <p>Mushola </p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <FaRestroom /> <p>Toilet</p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <FaWifi /> <p>Wi-fi </p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <FaBolt /> <p>Listrik </p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <MdPool /> <p>Kolam Berenang </p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <MdOutlineHotTub /> <p>Kolam Air Panas</p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <BsHouse /> <p>Aula </p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <FaParking /> <p>Area Parkir </p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <FaHiking /> <p>Track Hiking & Area Outbond </p>
                </div>
            </div>

            <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-2xl min-h-[560px] min-w-[400px] px-10 text-white flex flex-col py-10 gap-16">
            <h1 className="text-3xl font-semibold">
                    Paket :
                </h1>
                <div className="flex gap-5 text-2xl items-center">
                <PiTent /> <p>Paket 1 : 30.000/ orang</p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <PiTent /> <p>Paket 2 : 50.000/ orang</p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <PiTent /> <p>Paket 3 : 110.000/ orang</p>
                </div>
                <div className="flex gap-5 text-2xl items-center">
                <PiTent /> <p>Paket 4(untuk SD/Mi) : 75.000</p>
                </div>
            </div>
            </div>

            <div className="hover:bg-orange-500/60 hover:text-white border border-orange-500 px-16 py-5 rounded-full text-lg ">
                <Link href="/Service" className="">
                <p>Lihat Selengkapnya</p>
                </Link>
            </div>

        </div>
    )
}