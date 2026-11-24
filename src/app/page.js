import Image from "next/image";
import global from "@/images/globe.png";

import HeroSection from "./component/HeroSection";
import StatsSection from "./component/StateSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={global}
          alt="Globe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Components */}
      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
      </div>

    </main>
  );
}