import { fontWrapper } from "@/lib/utils";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Daniel G.",
      where: <FaTelegram />,
      role: "Thumbnail designer",
      img: "/testimonials/dani.jpg",
      star: 5,
      feedback:
        "The website's design is impressive, with an excellent choice of slideshow for the thumbnails, fonts, and background. Additionally, completing the project in just two days is impressive",
    },
    {
      name: "BÂŽÎ_DESIGNS.",
      where: <FaTelegram />,
      role: "Graphics design agency",
      img: "/testimonials/bazi.jpg",
      star: 5,
      feedback: "Very professional and simple website, just like we wanted!",
    },
  ];
  return (
    <section className="grainy_gradient">
      <section id="testimonials" className="wrapper  flex flex-col relative">
        <span className="bg-circle bg-no-repeat -top-[10rem] -left-[10rem] opacity-[0.07] -z-10 absolute w-[40rem] h-[40rem] bg-contain bg-center" />
        <div className="flex flex-col py-20 gap-4">
          <h2 className={fontWrapper("text-5xl md:text-6xl font-bold mx-auto")}>
            Few <span className="text-primary brightness-125">clients</span>
          </h2>
          <p className="mx-auto text-base md:text-lg opacity-80 mb-12">
            Here are some of my past clients
          </p>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-20 mx-auto px-2">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="flex flex-col p-4 px-3 w-full max-w-[24rem] md:max-w-[22rem] gap-4 rounded-3xl"
              >
                <div className="relative px-2 py-1">
                  <span className="text-5xl md:text-6xl font-bold absolute -top-6 -left-6 opacity-80">
                    "
                  </span>
                  <span className="text-base">{item.feedback}</span>
                  <span className="text-5xl md:text-6xl font-bold absolute -bottom-6 -right-6 opacity-80">
                    "
                  </span>
                </div>
                <div className="h-[.77px] bg-gray-900/15 rounded-full mx-4" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 px-4">
                    <div className="relative w-12 h-12">
                      {item.img ? (
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-center rounded-full"
                        />
                      ) : (
                        <div className="bg-red-700 rounded-full absolute inset-0 shadow-md"></div>
                      )}
                    </div>
                    <div className="flex flex-col text-xs">
                      <span className="text-base font-semibold">
                        {item.name}
                      </span>
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <div className="text-2xl">{item.where}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
export default TestimonialsSection;
