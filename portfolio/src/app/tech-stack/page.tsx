import Image from "next/image";
import FrontEndPage from "@/pages/FrontEndPage";
import BackEndPage from "@/pages/BackEndPage";
import { JSX } from "react";
import DataBasePage from "@/pages/DataBasePage";
import DevelopmentToolsPage from "@/pages/DevelopmentToolsPage";

export default function TechStack(): JSX.Element {
  return (
    <div className="relative min-h-screen text-white">
      <Image
        src={"/background.jpg"}
        alt="Background"
        fill={true}
        className="object-cover"
        priority={true}
      />
      <div className="py-50 space-y-50">
        <FrontEndPage />
        <BackEndPage />
        <DataBasePage />
        <DevelopmentToolsPage />
      </div>
    </div>
  );
}
