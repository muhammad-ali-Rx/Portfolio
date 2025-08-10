import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";
import { Instagram, Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                I’m <span className="gradient-text font-semibold ">Muhammad Ali</span>, a
                passionate Full-Stack MERN Developer from Karachi, Pakistan,
                with expertise in cross-platform development using Flutter. My
                primary focus is on JavaScript and its modern ecosystems.{" "}
                <span className="font-bold text-white">
                  I’m currently in my second year of my diploma in Software
                  Engineering at Aptech Institute.
                </span>
                Alongside my core development skills, I’m actively learning Data
                Science and Data Analytics to enhance my problem-solving
                capabilities.
              </p>
              <p className="text-white">
                I work with multiple frameworks and libraries, including React,
                Angular, Laravel (PHP), Dart, and Flutter. I have a strong
                passion for creative animations and interactive user
                experiences, especially using GSAP, Locomotive Scroll, and
                Framer Motion.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    For me, development is not just about writing code — it’s
                    about crafting smooth, functional, and visually engaging
                    digital experiences.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Muhammad Ali
                    </cite>
                    <div className="flex items-center gap-4">
                      
                      {/* Social Icons */}
                      <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
