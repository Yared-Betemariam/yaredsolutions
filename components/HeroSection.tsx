import { fontWrapper } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  return (
    <section className="wrapper flex flex-col gap-12 md:gap-20 md:flex-row py-6 items-center justify-center relative">
      <span className="bg-circle bg-no-repeat -bottom-[10rem] -left-[10rem] opacity-[0.12] -z-10 absolute w-[40rem] h-[40rem] bg-contain bg-center" />
      <span className="bg-circle bg-no-repeat -top-[20rem] -right-[20rem] opacity-5 -z-10 absolute w-[40rem] h-[40rem] bg-contain bg-center" />
      <div className="flex flex-col pt-14 pb-4 gap-10  items-center justify-center text-center">
        <span
          id="name"
          className="font-mono bg-gray-50 p-2 md:p-3 px-3 md:px-6 shadow-lg rounded-none border-primary/85 border-[2px] border-t-[.6rem] md:border-t-[1rem] text-gray-900 text-base md:text-lg mx-auto"
        >
          hello, my name is
        </span>
        <div className="flex items-center">
          <h1
            className={fontWrapper(
              "leading-[3.1rem] text-4xl sm:text-7xl tracking-widest lg:text-8xl font-semibold drop-shadow-md"
            )}
          >
            Yar<span className="text-gray-800/90">e</span>d B
            <span className="text-gray-800/90">e</span>lay
          </h1>
        </div>
        <p className="text-sm md:text-lg font-medium max-w-xl opacity-70">
          I'm a{" "}
          <span className="text-primary">
            website developer with over 3+ years of experiance
          </span>
          . I have helped different business and individual with their building
          their website and fully managing it. I want to help business grow by
          providing client appeling websites.
        </p>
        <a href={"#contact"} className="">
          <Button
            size={"lg"}
            variant={"secondary"}
            className="font-semibold text-white textwhite text-xl bg-primary/85 h-16 px-10 shadow-md hover:bg-primary/70 duration-300 transition-all rounded-full space-x-4"
          >
            <span>Let's Work</span>
            <ArrowRight />{" "}
          </Button>
        </a>
      </div>
    </section>
  );
};
export default HeroSection;
