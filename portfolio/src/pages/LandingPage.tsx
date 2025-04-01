import TypeWriter from "@/components/animations/TypeWriter";
import { JSX } from "react";

const LandingPage = (): JSX.Element => {
  return (
    <div className="relative z-20 grid place-content-center text-center min-h-screen space-y-5">
      <h1 className="text-6xl sm:text-9xl bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent">
        Code is Art
      </h1>
      <TypeWriter
        text="Turning Ideas into Innovative Solutions."
        font_size="text-md sm:text-3xl"
      />
    </div>
  );
};

export default LandingPage;
