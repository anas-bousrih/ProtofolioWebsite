import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import HeroBtn from "../components/HeroBtn";

const Hero = () => {
  const scrollToWork = () => {
    const el = document.getElementById("work") || document.getElementById("projects") || document.querySelector("[data-section='work']");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary via-midnight to-[#0a0d26]">
      <ParallaxBackground />

      <div className="relative z-10 flex flex-col justify-center min-h-screen gap-10 c-space py-24">
        <div className="max-w-5xl space-y-8">
          <HeroText />

          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-200">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              Louisville, KY
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              React · Next.js · Django · Tailwind
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              AI tools · real-time apps · clean UI
            </span>
          </div>

          <HeroBtn onPrimaryCta={scrollToWork} />

          <div className="flex flex-wrap gap-4 text-sm text-neutral-300">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              TSA regional winner (web design)
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Amazon Innovation Award (security research)
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              School & community solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
