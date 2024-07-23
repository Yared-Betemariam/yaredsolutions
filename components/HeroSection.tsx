import { fontWrapper } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  return (
    <section className="relative  overflow-hidden bg-gradient-to-br from-primary/5 to-red-500/10 border-b border-primary/20">
      <Image
        src={"/grainy.svg"}
        alt="pattern"
        width={1280}
        height={800}
        className="absolute w-full min-h-full overflow-hidden inset-x-0 h-auto object-center object-cover opacity-[0.025] -z-40"
      />
      <section className="wrapper placeholder:flex flex-col gap-12 md:gap-20 md:flex-row py-20 items-center justify-center relative">
        <span className="bg-circle bg-no-repeat -bottom-[10rem] -left-[10rem] opacity-[0.07] -z-10 absolute w-[40rem] h-[40rem] bg-contain bg-center" />
        <span className="bg-circle bg-no-repeat -top-[20rem] -right-[20rem] opacity-[0.03] -z-10 absolute w-[40rem] h-[40rem] bg-contain bg-center" />

        <div className="flex flex-col pt-14 pb-4 gap-10  items-center justify-center text-center">
          <p className="bg-white opacity-90 border border-primary text-primary/90 rounded-full px-5 py-1.5 font-semibold">
            hello, my name is
          </p>
          {/* <span
            id="name"
            // className="font-mono bg-gray-50 p-2 md:p-3 px-3 md:px-6 shadow-lg rounded-none border-primary/85 border-[2px] border-t-[.6rem] md:border-t-[1rem] text-gray-900 text-base md:text-lg mx-auto"
          ></span> */}
          <div className="flex items-center">
            <h1
              className={fontWrapper(
                "leading-[3.1rem] text-4xl sm:text-7xl tracking-widest lg:text-8xl font-semibold drop-shadow-md"
              )}
            >
              Yared Belay
            </h1>
          </div>
          <p className="text-sm md:text-lg font-medium max-w-xl opacity-70">
            I'm a <span className="text-primary ">website developer</span> with
            over <span className="text-primary">3+</span> years of experiance. I
            have helped different business and individual with their building
            their website and fully managing it. I want to{" "}
            <span className="text-primary">help business grow</span> by
            providing client appeling websites.
          </p>
          {/* <a href={"#contact"} className="">
            <Button
              size={"lg"}
              variant={"secondary"}
              className="font-semibold text-white textwhite text-xl bg-primary/85 h-16 px-10 shadow-md hover:bg-primary/70 duration-300 transition-all rounded-full space-x-4"
            >
              <span>Let's Work</span>
              <ArrowRight />{" "}
            </Button>
          </a> */}
        </div>
      </section>
      {/* <div className=" h-[3px] bg-gradient-to-r from-primary/30 to-yellow-500/30" /> */}
    </section>
  );
};
export default HeroSection;
