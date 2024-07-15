"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { navLinks } from "./Nav";

const MenuSheet = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(`#${window.location.href.split("#")[1]}`);
  }, []);
  return (
    <Sheet>
      <SheetTrigger
        className="flex items-center justify-center sm:hidden w-full h-full inset-0 rounded-full hover:bg-primary/5 active:bg-primary/80 px-2 sm:active:bg-white/75 sm:hover:bg-text-gray-900 hover:text-gray-50 duration-300 group/trigger transition-all"
        asChild
      >
        <IoMenu className="text-gray-800 group-hover/trigger:text-gray-50 duration-300 transition-all" />
      </SheetTrigger>
      <SheetContent className="rounded-xl w-56 h-[50vh] mt-12 mr-10 py-10 flex flex-col px-8 gap-2">
        {navLinks.map((item) => (
          <SheetClose
            key={item.name}
            className="text-start border-none outline-none focus-visible:outline-none active:ring-0 m-0"
          >
            <a
              href={item.href}
              onClick={() => setPathname(item.href)}
              className={cn(
                pathname === item.href
                  ? "text-primary/90 scale-110"
                  : "text-gray-900/90 opacity-80",
                "transition-all duration-300 text-[15px] md:text-[17px]"
              )}
            >
              {item.name}
            </a>
          </SheetClose>
        ))}
      </SheetContent>
    </Sheet>
  );
};
export default MenuSheet;
