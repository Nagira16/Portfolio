import ContactPage from "@/pages/ContactPage";
import Image from "next/image";
import { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <div className="relative min-h-screen text-white">
      <Image
        src={"/background.jpg"}
        alt="Background"
        fill={true}
        className="object-cover"
        priority={true}
      />
      <ContactPage />
    </div>
  );
}
