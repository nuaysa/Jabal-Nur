import Marquees from "@/components/marquee";
import Image from "next/image";

export default function Profile() {
    return(
        <div className="h-svh pt-16">
            {/* <Image 
            src="/jabal-nur/IMG-20241128-WA0027.jpg"
            alt=""
            width={800}
            height={200}
            ></Image> */}
            <div className="flex flex-col items-center justify-center bg-orange-300"> Profil Kami</div>
            <Marquees/>
            abc 
        </div>
    )
}