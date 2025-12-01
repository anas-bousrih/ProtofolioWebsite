import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="mt-16 border-t border-white/10 bg-gradient-to-b from-primary via-[#090d25] to-[#050713]">
      <div className="c-space py-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Stay in touch</p>
            <h3 className="text-2xl font-semibold text-white">Let&apos;s build something useful</h3>
            <p className="text-sm text-neutral-300 max-w-md">
              Open to internships and any usefull collaborations that align with my tech stack.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Quick links</p>
            <div className="flex flex-col gap-2 text-sm text-neutral-200">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-200 transition"
              >
                View resume
              </a>
              <a
                href="https://github.com/anas-bousrih"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-200 transition inline-flex items-center gap-2"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:anasbousri5@gmail.com"
                className="hover:text-emerald-200 transition inline-flex items-center gap-2"
              >
                <FaEnvelope className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">Availability</p>
            <p className="text-sm text-neutral-300">
              Louisville, KY · Open to any opportunities.
            </p>
            <a
              href="mailto:anasbousrih5@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-300/60 hover:text-emerald-50 transition"
            >
              Email me
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Anas Bousrih. Built with React, Vite, and Tailwind.</span>
          <span className="text-neutral-500">
            AI assistant powered by OpenAI · Deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
