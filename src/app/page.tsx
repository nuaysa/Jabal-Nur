import Fasil from "@/components/Home-Facil";
import Location from "@/components/Home-Location";
import Marquees from "@/components/marquee";
import Video from "@/components/video";
import Image from "next/image";

export default function Home() {
  return (
      <div>
        <div className="flex justify-center backdrop-blur-sm bg-white/80">
          <Video/>
        </div>
          <Location/>
          <Marquees/>
          <div>
          <div data-aos="fade-up">
          <Fasil/>
          </div>
          </div>
      </div>
  );
}
