"use client";

import { AlignJustify } from "lucide-react";
import { JSX, useState } from "react";
import { NavLink } from "../shared/Navbar";
import Link from "next/link";

const MoblieNavList = ({ NavLinks }: { NavLinks: NavLink[] }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="sm:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <AlignJustify />
      </button>

      {isOpen && (
        <ul className="absolute top-16 right-0 w-32 space-y-5 backdrop-blur-xs p-4 rounded">
          {NavLinks.map((link) => (
            <li
              key={link.path}
              className="hover:text-gray-300 transition-transform duration-500 hover:scale-110 "
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoblieNavList;
