import { type ClassValue, clsx } from "clsx";
import { Gabarito } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const font2 = Gabarito({ subsets: ["latin"] });

export const fontWrapper = (className: ClassValue) => {
  return cn(className, font2.className);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
