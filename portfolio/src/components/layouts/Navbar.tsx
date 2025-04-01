import { JSX } from "react";
import MoblieNavList from "../partials/MoblieNavList";
import WebNavList from "../partials/WebNavList";

export interface NavLink {
  title: string;
  path: string;
}
[];

const NavLinks: NavLink[] = [
  { title: "Home", path: "/" },
  { title: "My Projects", path: "/projects" },
  { title: "Tech Stack", path: "/tech-stack" },
  { title: "Contact Me", path: "/contact" },
];

const Navbar = (): JSX.Element => {
  return (
    <nav className="absolute z-50 top-0 w-screen">
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-500 to-blue-500 text-white relative h-16">
        <div className="text-xl font-bold">My Portfolio</div>

        <WebNavList NavLinks={NavLinks} />

        <MoblieNavList NavLinks={NavLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
