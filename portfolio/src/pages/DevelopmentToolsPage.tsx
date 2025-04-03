import VerticalSlide from "@/components/animations/VerticalSlide";
import { TechList } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

const DevelopmentToolsList: TechList[] = [
  {
    link: "/npm-logo.svg.png",
    title: "npm",
    officalSite: "https://www.npmjs.com/",
  },
  {
    link: "/git-logo-.svg.png",
    title: "Git",
    officalSite: "https://git-scm.com/",
  },
  {
    link: "/github-logo.svg",
    title: "GitHub",
    officalSite: "https://github.com/",
  },
  {
    link: "/prettier-logo.png",
    title: "Prettier",
    officalSite: "https://prettier.io/",
  },
  {
    link: "/ESLint_logo.svg.png",
    title: "ESLint",
    officalSite: "https://eslint.org/",
  },
  {
    link: "/jest-logo.svg",
    title: "Jest",
    officalSite: "https://jestjs.io/",
  },
  {
    link: "/thunder-client-logo.png",
    title: "Thunder Client",
    officalSite: "https://www.thunderclient.com/",
  },
  {
    link: "/vercel-logo.svg",
    title: "Vercel",
    officalSite: "https://vercel.com/home",
  },
  {
    link: "/vscode-logo.svg.png",
    title: "Visual Studio Code",
    officalSite: "https://code.visualstudio.com/",
  },
];

const DevelopmentToolsPage = (): JSX.Element => {
  return (
    <div className="relative z-20 min-h-fit grid place-content-center text-center">
      <VerticalSlide
        text={
          <section className="container flex flex-col items-center space-y-20 w-screen text-white">
            <article>
              <h3 className="text-3xl sm:text-5xl font-semibold bg-gradient-to-b to-red-400 from-50% px-2">
                Development Technologies
              </h3>
            </article>
            <article className="text-2xl font-semibold grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-10 w-full">
              {DevelopmentToolsList.map((list, i) => {
                const title: string = list.title;
                return (
                  <Link key={i} href={list.officalSite} target="_blank">
                    <div className="flex flex-col justify-center items-center space-y-3 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-150 hover:drop-shadow-[0_0_10px_#61DAFB]">
                      <Image
                        src={list.link}
                        alt={`${list.title} Logo`}
                        width={80}
                        height={80}
                        className={`size-20 ${
                          (title === "GitHub" || title === "Vercel") && "invert"
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

export default DevelopmentToolsPage;
