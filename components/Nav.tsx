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
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "Portfolio",
    href: "#works",
  },
];
const Nav = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(`#${window.location.href.split("#")[1]}`);
  }, []);
  return (
    <nav className="md:w-fit sticky mx-auto z-50 top-4 flex items-center md:justify-between justify-center h-14 md:h-16 w-14 md:px-10 rounded-full  glow border border-primary/40 bg-gradient-to-tl from-zinc-800 to-slate-500">
      <div className="flex items-center gap-12">
        {navLinks.map((item) => (
          <a
            href={item.href}
            onClick={() => setPathname(item.href)}
            key={item.name}
            className={cn(
              pathname === item.href
                ? "text-primary scale-110 font-semibold"
                : "text-gray-200 opacity-90",
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
  );
};
export default Nav;
