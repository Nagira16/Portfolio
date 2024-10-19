"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavDropDown = () => {
  const pathName = usePathname();
  const [position, setPosition] = React.useState<string>();

  React.useEffect(() => setPosition(pathName), [pathName]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignJustify />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position}>
          <DropdownMenuRadioItem value="/">
            <Link
              href="/"
              className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              HOME
            </Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="/my-projects">
            <Link
              href="/my-projects"
              className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              My Projects
            </Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="/tech-stack">
            <Link
              href="/tech-stack"
              className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Tech Stack
            </Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="/about-me">
            <Link
              href="/about-me"
              className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              About Me
            </Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="/contact-me">
            <Link
              href="/contact-me"
              className="relative text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-current after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Contact Me
            </Link>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavDropDown;
