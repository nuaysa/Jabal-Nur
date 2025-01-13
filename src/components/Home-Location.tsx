import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

export default function Location() {
    return(
        <div className="z-30 flex flex-col lg:flex-row top-96 lg:top-[800px] bg-orange-400 max-w-[100vw] h-full py-10 lg:py-0 px-5 lg:px-5 lg:h-svh">
      <div className="flex flex-col gap-10 lg:p-20">
        <div className="text-center ml-10 lg:ml-56 flex text-white font-semibold text-4xl">
        <h1>lokasi</h1> 
        <FaLocationDot />
        </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.191787987856!2d108.10669727578608!3d-7.218952052257379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4da51be997b9%3A0xfe3703b883daa5df!2sTaman%20Wisata%20Alam%20Jabal%20Nur!5e0!3m2!1sid!2sid!4v1731937904613!5m2!1sid!2sid" width="600" height="450" className="hidden lg:flex border:0 rounded-xl" loading="lazy"></iframe>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.191787987856!2d108.10669727578608!3d-7.218952052257379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f4da51be997b9%3A0xfe3703b883daa5df!2sTaman%20Wisata%20Alam%20Jabal%20Nur!5e0!3m2!1sid!2sid!4v1731937904613!5m2!1sid!2sid" width="300" height="300" className="flex lg:hidden border:0 mb-5 rounded-xl" loading="lazy"></iframe>
      </div>

    <div className="flex items-center lg:mr-24">
    <div className="flex flex-col gap-20">
      <p className="text-white font-sans leading-9 text-[15px] lg:text-[20px]">
    <span className="font-bold">Jabal Nur</span> adalah tempat wisata yang berlokasi di kaki Gunung Talaga Bodas, Jabal Nur juga menawarkan daya tarik unik berupa 15.000 kincir angin warna-warni. Selain itu, taman ini memiliki berbagai fasilitas, termasuk kolam renang, resto kafe, dan area perkemahan. Tempat ini cocok untuk wisata keluarga dan pencinta fotografi karena Jabal Nur juga menyediakan pemandangan alam yang indah.
      </p>
      <button className="bg-orange-500/60 text-white border border-orange-500 py-4 rounded-full text-lg hover:bg-orange-300">
      <Link href="/profile">
      Lihat Selengkapnya
      </Link>
      </button>
    </div>
    </div>

    </div>
    )
}