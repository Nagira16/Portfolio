import Image from "next/image";
import BackgroundUrl from "@/images/Background.jpg";
import LandingPage from "@/pages/LandingPage";
import IntroPage from "@/pages/IntroPage";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="relative min-h-screen">
      <Image
        src={BackgroundUrl}
        alt="Background"
        fill={true}
        className="object-cover"
        priority={true}
      />
      <LandingPage />
      <IntroPage />
    </div>
  );
}
