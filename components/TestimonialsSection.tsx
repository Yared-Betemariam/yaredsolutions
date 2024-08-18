import { fontWrapper } from "@/lib/utils";
import Image from "next/image";
import { FaTelegram } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";

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
          <span className="subheader">testimonials</span>
          <h2 className={fontWrapper("h2 mx-auto")}>
            Client <span className="text-primary brightness-125">reviews</span>
          </h2>
          <p className="mx-auto text-base md:text-lg opacity-80 mb-12">
            Here are some of my past clients
          </p>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-20 mx-auto px-2">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="flex flex-col p-10 px-10 w-full max-w-[24rem] md:max-w-[22rem] gap-6 rounded-tr-[3rem] bg-gradient-to-b from-primary/10 to-primary/0"
              >
                <div className="relative px-2 flex flex-col gap-5 py-1">
                  <FaQuoteLeft className="w-10 h-10" />
                  <span className="">{item.feedback}</span>
                </div>
                {/* <div className="h-[.77px] bg-gray-100/15 rounded-full" /> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
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
