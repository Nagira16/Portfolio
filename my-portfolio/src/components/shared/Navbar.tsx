import Link from "next/link";
import NavDropDown from "../partials/NavDropDown";
import { ModeToggle } from "../partials/ModeToggle";

const Navbar = () => {
  return (
    <header className="h-14 w-full bg-zinc-300 dark:bg-zinc-900">
      <nav className="flex sm:hidden items-center justify-end h-full mr-5 space-x-3">
        <ModeToggle />
        <NavDropDown />
      </nav>
      <nav className="hidden sm:flex sm:justify-around md:justify-around lg:justify-around xl:justify-around items-center h-full">
        <Link
          href="/"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          HOME
        </Link>
        <Link
          href="/my-projects"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          My Projects
        </Link>
        <Link
          href="/tech-stack"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Tech Stack
        </Link>
        <Link
          href="/about-me"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          About Me
        </Link>
        <Link
          href="/contact-me"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Contact Me
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
