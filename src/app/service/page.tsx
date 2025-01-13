import Image from "next/image";
import { FaRegSmileBeam } from "react-icons/fa";
import { PiMountainsBold,PiTentBold } from "react-icons/pi";

export default function service() {
    return(
        <div className="pt-16 bg-orange-400 ">
            <div className="flex gap-2 h-svh justify-between">
                <div className="hidden lg:flex ">
                <Image
                src="/saung.jpg"
                alt="background"
                width={800}
                height={500}
                />
                </div>

                <div className="flex flex-col justify-center lg:mr-60 mx-16">
                <h1 className="z-20 text-white text-4xl font-bold">Layanan dan Fasilitas</h1>
                </div>
                
            </div>

            <div className="bg-white w-[98.9vw] h-lg:max-h-[800px] flex flex-col px-5 py-10">
                <h1 className="py-10 text-4xl font-semibold text-center">Layanan Kami</h1>
                <div>

            <div className="grid grid-rows gap-5 lg:grid-cols-3 justify-items-center">
                <div className="bg-white shadow-md rounded-xl items-center shadow-slate-400 h-[300px] w-[400px] flex flex-col p-3">
                    <div className="text-5xl">
                <FaRegSmileBeam />
                    </div>
                    <h1 className="mt-2 font-semibold">Melayani dengan ramah</h1>
                    <hr className="border border-black"/>
                    <p className="px-5">Di sini, kami berkomitmen untuk menyambut setiap pengunjung dengan keramahan terbaik, memastikan Anda merasa nyaman dan menikmati setiap momen selama berada di tempat wisata kami.</p>
                </div>
                <div className="bg-white shadow-md rounded-xl items-center shadow-slate-400 h-[300px] w-[400px] flex flex-col p-3">
                    <div className="text-5xl">
                    <PiMountainsBold />
                    </div>
                    <h1 className="mt-2 font-semibold">Mengutamakan kenyamanan</h1>
                    <hr className="border border-black"/>
                    <p className="px-5">Kami selalu mengutamakan kenyamanan Anda, menghadirkan fasilitas dan layanan terbaik agar kunjungan Anda di tempat wisata kami menjadi pengalaman yang tak terlupakan.</p>
                </div>
                <div className="bg-white shadow-md rounded-xl items-center shadow-slate-400 h-[300px] w-[400px] flex flex-col p-3">
                    <div className="text-5xl">
                    <PiTentBold />
                    </div>
                    <h1 className="mt-2 font-semibold">Menyediakan fasilitas</h1>
                    <hr className="border border-black"/>
                    <p className="px-5">Kami menyediakan beragam fasilitas lengkap untuk memenuhi kebutuhan Anda, memastikan setiap momen di tempat wisata kami menjadi nyaman dan menyenangkan.</p>
                </div>
                </div>
            </div>
            </div>

            <div className="bg-orange-400 w-[98vw] h-full flex flex-col px-5 py-10">
                <h1 className="py-7 text-4xl font-semibold text-center text-white">Fasilitas Kami</h1>
            <div className="flex flex-col justify-center gap-5 p-10">
                <div className="flex max-sm:flex-col lg:justify-evenly gap-10 lg:gap-0">
                <div className="rounded-xl shadow-lg bg-neutral-100 min-h-[100px] items-center flex justify-center p-8 lg:min-w-[400px] font-semibold sm:text-lg md:text-xl lg:text-2xl px-20">
                        <span className="hover:scale-90">
                        <h1>
                            Tiket Masuk
                            </h1>
                            <p className="lg:text-xl md:text-lg sm:text-md">
                            12.000/orang
                            </p>

                            </span>
                        </div>
                        <div className="rounded-xl shadow-lg bg-neutral-100 min-h-[100px] items-center flex justify-center p-8 lg:min-w-[400px] font-semibold sm:text-lg md:text-xl lg:text-2xl px-20">
                        <span className="hover:scale-90">
                        <h1>
                            Tiket Masuk Anak 
                            </h1>
                            <p className="lg:text-xl md:text-lg sm:text-md">
                            7,000/orang
                            </p>
                            </span>
                        </div>
                </div>
                <span className="flex justify-center text-white my-5">
                        *Tiket masuk sudah termasuk parkir dan fasilitas kamar mandi
                </span>
                <div className="flex flex-col lg:flex-row justify-center">
                    <div className="lg:rounded-tl-xl rounded-t-xl shadow-md lg:rounded-bl-xl bg-white py-7 lg:py-0 lg:min-h-[200px] items-center flex lg:justify-end p-4 lg:min-w-[400px] font-semibold sm:text-lg md:text-xl lg:text-3xl px-20">
                        <span className="hover:translate-x-6">
                        <h1>
                            Paket 1
                            </h1>
                            30.000/orang
                            </span>
                        </div>
                    <div className="bg-orange-500/80 shadow-md lg:rounded-tr-xl lg:min-h-[200px] lg:w-[700px] rounded-b-xl lg:rounded-br-xl p-3 flex py-3  items-center lg:text-lg text-white px-16">
                    <ul className="list-disc">
                        <li>fasilitas aula</li>
                        <li>fasilitas kamar mandi</li>
                        <li>fasilitas kolam air panas</li>
                        <li>fasilitas Wifi</li>
                    </ul>
                </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center">
                    <div className="lg:rounded-tl-xl rounded-t-xl shadow-md lg:rounded-bl-xl bg-white py-7 lg:py-0 lg:min-h-[200px] items-center flex lg:justify-end p-4 lg:min-w-[400px] font-semibold sm:text-lg md:text-xl lg:text-3xl px-20">
                        <span className="hover:translate-x-6">
                        <h1>
                            Paket 2
                            </h1>
                            50.000/orang
                            </span>
                        </div>
                    <div className="bg-orange-500/80 shadow-md lg:rounded-tr-xl lg:min-h-[200px] lg:w-[700px] rounded-b-xl lg:rounded-br-xl p-3 flex py-3  items-center lg:text-lg text-white px-16">
                    <div className="flex gap-7">
<div>
                    <ul className="list-disc">
                        <li>fasilitas aula</li>
                        <li>fasilitas kamar mandi</li>
                        <li>fasilitas kolam air panas</li>
                        <li>fasilitas Wifi</li>
                        <li>fasilitas tenda kapasitas 4 orang</li>
                    </ul>
</div>
<div>
                    <ul className="list-disc">
                        <li>fasilitas sound system</li>
                        <li>air mineral/ galon</li>
                    </ul>
</div>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center">
                    <div className="lg:rounded-tl-xl rounded-t-xl shadow-md lg:rounded-bl-xl bg-white py-7 lg:py-0 lg:min-h-[200px] items-center flex lg:justify-end p-4 lg:min-w-[400px] font-semibold sm:text-lg md:text-xl lg:text-3xl px-20">
                        <span className="hover:translate-x-6">
                        <h1>
                            Paket 3
                            </h1>
                            110.000/orang
                            </span>
                        </div>
                    <div className="bg-orange-500/80 shadow-md lg:rounded-tr-xl lg:min-h-[200px] lg:w-[700px] rounded-b-xl lg:rounded-br-xl p-3 flex py-3  items-center lg:text-lg text-white px-16">
                    <div className="flex gap-7">
<div>
                    <ul className="list-disc">
                        <li>fasilitas aula</li>
                        <li>fasilitas kamar mandi</li>
                        <li>fasilitas kolam air panas</li>
                        <li>fasilitas Wifi</li>
                        <li>fasilitas tenda kapasitas 4 orang</li>
                    </ul>
</div>
<div>
                    <ul className="list-disc">
                        <li>fasilitas sound system</li>
                        <li>air mineral/ galon</li>
                        <li>makan 2x (daging sapi/ ikan/ ayam)</li>
                    </ul>
</div>
                    </div>
                    </div>
                </div>
                <div className="flex  flex-col lg:flex-row justify-center">
                    <div className="lg:rounded-tl-xl rounded-t-xl shadow-md lg:rounded-bl-xl bg-white py-7 lg:py-0 lg:min-h-[200px] items-center flex lg:justify-end p-4 lg:min-w-[400px] font-semibold sm:text-lg md:text-xl lg:text-3xl px-20">
                        <span className="hover:translate-x-6">
                        <h1>
                            Paket 4 

                            <span className="lg:text-2xl md:text-xl sm:text-md"> (untuk SD/MI) </span>
                            </h1>
                            75.000/orang
                            </span>
                        </div>
                    <div className="bg-orange-500/80 shadow-md lg:rounded-tr-xl lg:min-h-[200px] lg:w-[700px] rounded-b-xl lg:rounded-br-xl p-3 flex py-3  items-center lg:text-lg text-white px-16">
                    <div className="flex gap-7">
<div>
                    <ul className="list-disc">
                        <li>fasilitas aula</li>
                        <li>fasilitas kamar mandi</li>
                        <li>fasilitas kolam air panas</li>
                        <li>fasilitas Wifi</li>
                        <li>fasilitas tenda kapasitas 6 orang 
                            <span> <br />(untuk SD/MI)</span></li>
                    </ul>
</div>
<div>
                    <ul className="list-disc">
                        <li>fasilitas sound system</li>
                        <li>air mineral/ galon</li>
                        <li>makan 2x (daging sapi/ ikan/ ayam)</li>
                    </ul>
</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}