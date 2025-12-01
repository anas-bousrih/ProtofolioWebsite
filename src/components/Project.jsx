import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import arrowRight from "../assets/arrow-right.svg";

const statusCopy = {
  "in-development": "In development",
  prototype: "Prototype",
  live: "Live",
};

const statusTone = {
  "in-development": "bg-amber-400/15 text-amber-200 border-amber-300/30",
  prototype: "bg-white/10 text-neutral-200 border-white/20",
  live: "bg-emerald-400/15 text-emerald-200 border-emerald-300/30",
};

const Project = (props) => {
  const {
    title,
    shortDescription,
    description,
    overview,
    subDescription,
    href,
    liveUrl,
    githubUrl,
    image,
    images,
    tags,
    stack,
    year,
    status,
    category,
    setPreview,
    ...rest
  } = props;

  const [showDetails, setShowDetails] = useState(false);
  const handlePreview = typeof setPreview === "function" ? setPreview : () => {};
  const coverImage = image || (Array.isArray(images) ? images[0] : null);
  const badgeTone = statusTone[status] || "bg-white/10 text-neutral-200 border-white/10";
        
  return (
    <>
      <div
        className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-6 shadow-lg shadow-black/20 hover:-translate-y-1 transition"
        onMouseEnter={() => coverImage && handlePreview(coverImage)}
        onMouseLeave={() => coverImage && handlePreview(null)}
      >
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 uppercase tracking-[0.2em]">
          <span>{year}</span>
          {category && <span className="text-neutral-300">· {category}</span>}
          <span className={`rounded-full border px-3 py-1 lowercase ${badgeTone}`}>
            {statusCopy[status] || status || "status"}
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-xl font-semibold text-white">{title}</p>
          <p className="text-sm text-neutral-300">{shortDescription || description}</p>
        </div>

        {Array.isArray(stack) && stack.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs text-neutral-200">
            {stack.slice(0, 6).map((tech) => {
              if (typeof tech === "string") {
                return (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {tech}
                  </span>
                );
              }
              return (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {tech.icon && (
                    <img src={tech.icon} alt={tech.name} className="h-4 w-4 object-contain" />
                  )}
                  {tech.name}
                </span>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 text-sm text-emerald-200">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              Live demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              GitHub
            </a>
          )}
        </div>

        <button
          onClick={() => setShowDetails(true)}
          className="inline-flex items-center gap-1 self-start text-sm font-semibold text-white hover:text-emerald-200 transition"
        >
          Open overview
          <img src={arrowRight} className="w-4" alt="Arrow Right" />
        </button>
      </div>

      {showDetails && (
        <ProjectDetails
          title={title}
          description={description}
          overview={overview}
          subDescription={subDescription}
          image={coverImage}
          images={images}
          tags={tags}
          stack={stack}
          year={year}
          status={status}
          category={category}
          href={href}
          liveUrl={liveUrl}
          githubUrl={githubUrl}
          closeModal={() => setShowDetails(false)}
          {...rest}
        />
      )}
    </>
  );
};

export default Project;
