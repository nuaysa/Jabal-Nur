import Marquees from "@/components/marquee";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="h-full">
      <div className="flex flex-col lg:flex-row items-center bg-orange-400 min-h-[800px] lg:h-full pt-16 lg:pt-0 lg:px-20">
        <Image src="/jabal-nur/IMG-20241128-WA0027.jpg" alt="" width={500} height={600} className="lg:rounded-xl " data-aos="fade-right" />
        <div className="text-lg lg:w-1/2 h-[200px] text-white mx-10 font-bold flex flex-col justify-start">
          <h1 className="text-3xl font-extrabold pb-10 text-white">Jabal Nur</h1>
          <p>
            Jabal Nur adalah destinasi wisata yang memukau, terletak di kaki Gunung Talaga Bodas. Tempat ini menawarkan pengalaman wisata yang unik dengan suasana alam yang asri dan berbagai daya tarik menarik yang cocok untuk semua
            kalangan.
          </p>
          <br />
          <br />
          <p className="justify-self-end">
            Lokasi :{" "}
            <Link href="https://maps.app.goo.gl/6bc7pB4MHPBn4c659" className="hover:text-orange-200">
              {" "}
              Sukasetia, Kec. Cisayong, Kabupaten Tasikmalaya, Jawa Barat 46153{" "}
            </Link>
          </p>
        </div>
      </div>
      <h1 className="bg-orange-400 text-orange-300 text-5xl font-bold px-2 lg:px-20 pt-16">Daya Tarik Wisata Jabal Nur</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-orange-300 h-max lg:px-20 pb-7 lg:py-7">
        <Image src="/jabal-nur/IMG-20241128-WA0026.jpg" alt="" width={500} height={600} className="pb-5 lg:hidden flex" data-aos="fade-right" />
        <p className="text-md lg:text-lg lg:w-1/2 text-orange-500 leading-9 mx-10 font-bold">
          <span className="lg:text-2xl text-xl"> • 15.000 Kincir Angin Warna-Warni </span>Salah satu ikon Jabal Nur yang sangat populer adalah instalasi 15.000 kincir angin warna-warni yang menciptakan pemandangan luar biasa dan cocok untuk
          latar belakang foto yang Instagrammable.
        </p>
        <Image src="/jabal-nur/IMG-20241128-WA0026.jpg" alt="" width={500} height={600} className="rounded-xl hidden lg:flex" data-aos="fade-right" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-orange-300 h-max lg:px-20 py-7">
        <Image src="/jabal-nur/IMG-20241128-WA0021.jpg" alt="" width={500} height={600} className="lg:rounded-xl pb-5 lg:pb-0" data-aos="fade-right" />
        <p className="text-md lg:text-lg lg:w-1/2 text-orange-500 leading-9 mx-10 font-bold">
          <span className="text-xl lg:text-2xl"> • Pemandangan Alam yang Indah </span>Dikelilingi oleh panorama pegunungan yang hijau dan udara yang segar, Jabal Nur menjadi tempat yang ideal untuk relaksasi dan menikmati keindahan alam.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-orange-300 h-max lg:px-20 py-7">
        <Image src="/jabal-nur/kolam.jpg" alt="" width={500} height={600} className="lg:rounded-xl pb-5 lg:hidden lg:pb-0" data-aos="fade-right" />
        <p className="text-md lg:text-lg lg:w-1/2 text-orange-500 leading-9 mx-10 font-bold">
          <span className="text-xl lg:text-2xl"> • Fasilitas Lengkap </span>
          Jabal Nur menawarkan berbagai fasilitas yang dirancang untuk kenyamanan pengunjung, seperti:
          <br />
          1. Kolam Renang: Untuk bersantai dan bermain air.
          <br />
          2. Resto Kafe: Menyediakan makanan dan minuman lezat dengan suasana yang nyaman.
          <br />
          3. Area Perkemahan: Cocok untuk Anda yang ingin menikmati malam di bawah langit berbintang.
        </p>
        <Image src="/jabal-nur/kolam.jpg" alt="" width={500} height={500} className="rounded-xl hidden lg:flex" data-aos="fade-right" />
      </div>
      <Marquees />
    </div>
  );
}
