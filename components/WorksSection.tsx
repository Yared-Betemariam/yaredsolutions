/* eslint-disable react/no-unescaped-entities */
import { works } from "@/data/data";
import { fontWrapper } from "@/lib/utils";
import ProjectSheet from "./ProjectSheet";

const WorksSection = () => {
  return (
    <section id="works" className="wrapper flex flex-col relative">
      <span className="bg-circle bg-no-repeat top-[10rem] right-[20rem] opacity-[0.09] absolute w-[40rem] -z-10 h-[40rem] bg-contain bg-center" />
      <div className="flex flex-col py-20 gap-4">
        <h2 className={fontWrapper("h2 mx-auto")}>
          My Past <span className="text-primary brightness-125">works</span>
        </h2>
        <p className="mx-auto text-base md:text-lg opacity-80 mb-12">
          Some things that i've worked on
        </p>
        <div className="grid grid-cols-1 mx-auto gap-14 w-full max-w-2xl">
          {works.map((item) => (
            <ProjectSheet key={item.title} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorksSection;
