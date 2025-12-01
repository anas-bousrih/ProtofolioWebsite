import OrbitingCircles from "./OrbitingCircles"
import reactLogo from "../assets/tech/reactjs.png";
import tailwindLogo from "../assets/tech/tailwind.png";
import nextLogo from "../assets/tech/nextjs2.png";
import djangoLogo from "../assets/tech/django.png";
import postgresLogo from "../assets/tech/postgresql.svg";
import flaskLogo from "../assets/tech/flask.png";
import htmlLogo from "../assets/tech/html5.png";
import cssLogo from "../assets/tech/css.png";
import jsLogo from "../assets/tech/javascript.png";
import gitLogo from "../assets/tech/git.png";
import githubLogo from "../assets/tech/github.png";
import pythonLogo from "../assets/tech/python.png";
import viteLogo from "../assets/tech/vitejs.png";
import supabaseLogo from "../assets/tech/supabase.png";

export function Frameworks() {
    const skills = [
        "Reactjs", 
        "Tailwind",
        "Nextjs2",
        "Django",
        "Postgresql",
        "Flask",
        "Html5",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub", 
        "Python",
        "Vitejs",
        "Supabase"
    ]


  const innerSkills = skills.slice(0, 6);
  const outerSkills = skills.slice(6);

  return (
    <div className="relative flex h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px] flex-col items-center justify-center overflow-visible">
      <OrbitingCircles iconSize={30} radius={100}>
        {innerSkills.map((skill) => (
          <Icons key={`${skill}-inner`} name={skill} alt={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={150} reverse speed={3}>
        {outerSkills.map((skill) => (
          <Icons key={`${skill}-outer`} name={skill} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  )
}

import { useState } from "react";

const Icons = ({ name, alt }) => {
  const iconMap = {
    Reactjs: reactLogo,
    Tailwind: tailwindLogo,
    Nextjs2: nextLogo,
    Django: djangoLogo,
    Postgresql: postgresLogo,
    Flask: flaskLogo,
    Html5: htmlLogo,
    CSS: cssLogo,
    JavaScript: jsLogo,
    Git: gitLogo,
    GitHub: githubLogo,
    Python: pythonLogo,
    Vitejs: viteLogo,
    Supabase: supabaseLogo,
  };

  const src = iconMap[name];
  if (!src) return null;

  return (
    <img
      src={src}
      alt={alt}
      className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(16,185,129,0.25)]"
    />
  );
}
