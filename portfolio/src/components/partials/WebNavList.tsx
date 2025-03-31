import Link from "next/link";
import { NavLink } from "../shared/Navbar";
import { JSX } from "react";

const WebNavList = ({ NavLinks }: { NavLinks: NavLink[] }): JSX.Element => {
  return (
    <ul className="hidden sm:flex space-x-5">
      {NavLinks.map((link) => (
        <li
          key={link.path}
          className="hover:text-gray-300 transition-transform duration-500 hover:scale-110"
        >
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default WebNavList;
