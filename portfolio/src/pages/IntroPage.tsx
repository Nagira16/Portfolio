import Emoji from "@/components/animations/Emoji";
import HorizontalSlide from "@/components/animations/HorizontalSlide";
import { JSX } from "react";
import HoverContent from "@/components/partials/HoverContent";

export interface HoverLink {
  link: string;
  icon: string;
  title: string;
  description: string;
  officialsite: string;
}
const HoverLinks: HoverLink[] = [
  {
    title: "React.js",
    icon: "/react-logo.svg",
    link: "tech-stack",
    description: "A JavaScript library for building user interfaces.",
    officialsite: "https://reactjs.org/",
  },
  {
    title: "Next.js",
    icon: "/nextjs-logo.png",
    link: "tech-stack",
    description: "A full-stack React framework for production.",
    officialsite: "https://nextjs.org/",
  },
  {
    title: "Node.js",
    icon: "/node-js-logo.svg",
    link: "tech-stack",
    description: "A JavaScript runtime for building server-side applications.",
    officialsite: "https://nodejs.org/",
  },
];

const IntroPage = (): JSX.Element => {
  return (
    <div className="relative z-20 min-h-screen grid place-content-center text-center space-y-16 px-4 pb-5">
      {/* Section 1 */}
      <section className="container flex flex-col items-center space-y-10">
        <article className="flex flex-col sm:flex-row justify-center items-center sm:space-x-2">
          <h3 className="text-3xl sm:text-5xl font-semibold text-white">
            Hi, I'm Nagira Tsuji
          </h3>
          <span className="hidden sm:block">
            <Emoji emoji="👋" />
          </span>
        </article>

        <article className="relative">
          <HorizontalSlide
            text={
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center group">
                <p className="transition-opacity duration-300 group-hover:opacity-50">
                  <strong className="text-6xl sm:text-9xl lg:text-[160px]">
                    I'm
                  </strong>
                </p>
                <ul className="text-left space-y-3 sm:space-y-2 font-semibold">
                  <li className="transition-transform duration-300 hover:scale-105">
                    <p>from Mie, Japan</p>
                  </li>
                  <li className="transition-transform duration-300 hover:scale-105">
                    <p>Full Stack Developer</p>
                  </li>
                  <li className="transition-transform duration-300 hover:scale-105">
                    <p>
                      a software engineer with a passion for web development
                    </p>
                  </li>
                  <li className="transition-transform duration-300 hover:scale-105">
                    <p>
                      always eager to learn new technologies and collaborate
                      with innovative teams
                    </p>
                  </li>
                </ul>
              </div>
            }
            initPosition={200}
          />
        </article>
      </section>

      {/* Section 2 */}
      <section className="container flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
        <article>
          <HorizontalSlide
            text={
              <div className="space-y-8 font-semibold">
                <p>
                  <strong className="text-2xl sm:text-4xl">I</strong> specialize
                  in various programming languages and frameworks, including
                </p>
                <ul className="flex flex-wrap justify-around items-center gap-5">
                  {HoverLinks.map((link, i) => (
                    <li
                      key={i}
                      className="text-lg sm:text-2xl grid place-items-center grayscale-100 transition-transform duration-500 hover:scale-125 active:scale-110 hover:grayscale-0"
                    >
                      <HoverContent
                        link={link.link}
                        title={link.title}
                        description={link.description}
                        icon={link.icon}
                        officialsite={link.officialsite}
                      />
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm sm:text-lg">
                  My goal is to create user-friendly applications that offer a
                  delightful experience.
                </p>
              </div>
            }
            initPosition={-200}
          />
        </article>
      </section>
    </div>
  );
};

export default IntroPage;
