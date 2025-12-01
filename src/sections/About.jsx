import React, { useRef, useEffect, useState } from "react";
import codingPov from "../assets/coding-pov.png";
import Spotlight from "../components/Spotlight";
import { PiReadCvLogoFill } from "react-icons/pi";
import { Frameworks } from "../components/frameworks";
import MinimalChat from "../components/MinimalChat";


const About = () => {
  const [showSpotlight, setShowSpotlight] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowSpotlight(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="c-space section-spacing relative overflow-hidden" id="about">
      <Spotlight active={showSpotlight} />
      <div className="relative z-10 max-w-6xl space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] text-neutral-300">
          About
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Hi, I&apos;m Anas Bousrih</h2>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-3xl">
            I build calm, purposeful web products—mixing React, Next.js, and Django with thoughtful UX.
            I like shipping things that are easy to use, fast, and visually clear.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-lg shadow-black/30">
            <div className="relative h-48 md:h-64">
              <img
                src={codingPov}
                alt="Coding setup"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-emerald-200 uppercase tracking-wide">Currently</p>
                <p className="mt-1 text-xl font-semibold text-white">
                      Designing and developing projects that balance clean UI with real-world engineering.                </p>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-neutral-200">
              My work comes from student-led ideas, competition projects, hands-on experiments with AI tools, and simple, user-focused interfaces.
              </p>
              <ul className="grid gap-1 sm:grid-cols-2 text-sm text-neutral-300">
                <li className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  FBLA merch platform (Next.js + Django)
                </li>
                <li className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Working on the 2026 TSA Software Development project
                </li>
                <li className="flex items-center gap-1">
                </li>
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden lg:row-span-2 min-h-[380px]">
            <MinimalChat />
          </div>

           <div className="grid gap-4 lg:col-span-2 grid-cols-1 md:grid-cols-3">
            <div className="rounded-2xl border  border-white/10 bg-white/5 px-5 py-12 grid-special-color  text-center text-neutral-400 md:col-span-1">
              {/* Resume viewer */}
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-[1.5rem] font-semibold text-white">My Resume</p>
                <p className="subtext text-center ">
                  Snapshot of my experience, skills, and education.
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[11rem] cursor-pointer overflow-hidden"
                  >
                    <PiReadCvLogoFill className="h-4 w-4 inline-block mr-1" />
                    View Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border  border-white/10 grid-default-color px-5 py-12 shadow-inner shadow-black/10 text-neutral-200 md:col-span-2">
              <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 sm:h-72 sm:w-72 translate-x-1/4 translate-y-1/4 opacity-80">
                <div className="scale-90">
                  <Frameworks />
                </div>
              </div>
              <div className="relative max-w-sm space-y-2">
                <p className="text-sm uppercase tracking-[0.1em] text-neutral-400">Tech stack</p>
                <p className="text-lg font-semibold text-white">Tools I lean on</p>
                <p className="text-sm text-neutral-300/50 leading-relaxed max-w-xs">
                  Frontend, backend, and tooling I rely on to keep builds fast, clean, and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
