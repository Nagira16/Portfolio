import VerticalSlide from "@/components/animations/VerticalSlide";
import { TechList } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

const FrontEndLists: TechList[] = [
  {
    link: "/nextjs-logo.png",
    title: "Next.js 15",
    officalSite: "https://nextjs.org/",
  },
  {
    link: "/react-logo.svg",
    title: "React.js",
    officalSite: "https://react.dev/",
  },
  {
    link: "/typescript-logo.svg",
    title: "TypeScript",
    officalSite: "https://www.typescriptlang.org/",
  },
  {
    link: "/tailwind-css-logo.png",
    title: "Tailwind CSS",
    officalSite: "https://tailwindcss.com/",
  },
  {
    link: "/shadcn-ui-seeklogo.svg",
    title: "shadcn/ui",
    officalSite: "https://ui.shadcn.com/",
  },
];

const FrontEndPage = (): JSX.Element => {
  return (
    <div className="relative z-20 min-h-fit grid place-content-center text-center">
      <VerticalSlide
        text={
          <section className="container flex flex-col items-center space-y-20 w-screen text-white">
            <article>
              <h3 className="text-3xl sm:text-5xl font-semibold bg-gradient-to-b to-sky-400 from-50% px-2">
                Front-End Technologies
              </h3>
            </article>
            <article className="text-2xl font-semibold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20 sm:gap-10 w-full">
              {FrontEndLists.map((list, i) => {
                const title: string = list.title;
                return (
                  <Link key={i} href={list.officalSite} target="_blank">
                    <div className="flex flex-col justify-center items-center space-y-3 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-125  hover:drop-shadow-[0_0_10px_#61DAFB] active:scale-110">
                      <Image
                        src={list.link}
                        alt={`${list.title} Logo`}
                        width={80}
                        height={80}
                        className={`size-20 transition-all duration-300 ${
                          title === "shadcn/ui" && "invert"
                        }`}
                      />
                      <h4>{list.title}</h4>
                    </div>
                  </Link>
                );
              })}
            </article>
          </section>
        }
        initPosition={100}
      />
    </div>
  );
};

export default FrontEndPage;
