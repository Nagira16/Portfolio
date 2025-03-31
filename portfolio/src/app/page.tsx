import Image from "next/image";
import BackgroundUrl from "@/images/Background.jpg";
import TypeWriter from "@/components/partials/TypeWriter";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Image
        src={BackgroundUrl}
        alt="Background"
        fill={true}
        className="object-cover"
        priority={true}
      />
      <div className="relative z-10 grid place-content-center text-center min-h-screen space-y-5">
        <h1 className="text-9xl bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent">
          Code is Art
        </h1>
        <TypeWriter
          text="
          I'm a Full-Stack Developer Creating Innovative Solutions."
        />
      </div>
    </div>
  );
}
