"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MenuSheet from "./MenuSheet";

export const navLinks = [
  // {
  //   name: "About",
  //   href: "#about",
  // },

  {
    name: "Portfolio",
    href: "#works",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
const Nav = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(`#${window.location.href.split("#")[1]}`);
  }, []);
  return (
    <header className="w-full flex items-center justify-center">
      <nav className="fixed mx-auto z-50 top-4 flex items-center md:justify-between justify-center h-14 md:h-16 w-14 md:w-fit md:px-10 rounded-full border border-gray-900/20 bg-gradient-to-tl to-white from-neutral-50">
        <div className="flex items-center gap-12">
          {navLinks.map((item) => (
            <a
              href={item.href}
              onClick={() => setPathname(item.href)}
              key={item.name}
              className={cn(
                pathname === item.href
                  ? "text-primary scale-110 font-semibold"
                  : "text-gray-900 opacity-90",
                "transition-all hidden sm:block duration-300 text-[15px] md:text-[17px] brightness-150"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="relative sm:hidden h-14 w-14">
          <MenuSheet />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
