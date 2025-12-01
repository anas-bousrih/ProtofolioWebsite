import OrbitingCircles from "./OrbitingCircles"

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
        "Vitejs"
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
  const formats = ["svg", "png", "jpg", "webp"];
  const [idx, setIdx] = useState(0);
  const [failedAll, setFailedAll] = useState(false);

  if (failedAll) return null;

  const src = `/src/assets/tech/${name}.${formats[idx]}`;

  const handleError = () => {
    if (idx + 1 < formats.length) {
      setIdx(idx + 1);
    } else {
      setFailedAll(true);
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(16,185,129,0.25)]"
      onError={handleError}
    />
  );
}
