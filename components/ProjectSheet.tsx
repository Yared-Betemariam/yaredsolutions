import { works } from "@/data/data";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectSheet = ({ project }: { project: (typeof works)[0] }) => {
  const images = project.photos.slice();
  images.shift();
  return (
    <div
      id={`workbox${project.id}`}
      className="shadow-xl flex h-80 flex-col rounded-none rounded-b-xl"
    >
      <div className="relative h-full w-full rounded-xl">
        <Image
          src={project.photos[0]}
          alt={project.title}
          fill
          className="object-center object-cover rounded-t-xl"
        />
      </div>
      <div className="flex items-center justify-between px-6 py-4 group/box gap-2  duration-300 transition-all bg-white rounded-b-xl">
        <div className="flex flex-col">
          <p className="text-base md:text-lg text-orange-800 font-bold">
            {project.title}
          </p>
          <p className="text-sm">{project.desc}</p>
        </div>
        <Link target="_blank" href={project.url || "#"}>
          <SquareArrowOutUpRight
            size={20}
            className="group-hover/box:scale-110 transition-all duration-300"
          />
        </Link>
      </div>
    </div>
  );
};
export default ProjectSheet;
