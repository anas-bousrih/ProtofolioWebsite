import React, { useState } from "react";
import { motion } from "motion/react";

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

const ProjectDetails = ({
  title,
  description,
  overview,
  subDescription,
  image,
  images,
  stack,
  year,
  status,
  category,
  href,
  liveUrl,
  githubUrl,
  showcaseType,
  iframeUrl,
  features,
  learning,
  progress,
  role,
  awards,
  notes,
  tags,
  reflection,
  designEmbedLabel = "Design (Figma)",
  liveEmbedLabel = "Live site",
  closeModal,
  ...rest
}) => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [activeGroup, setActiveGroup] = useState(null);

  const subDescriptions = Array.isArray(subDescription)
    ? subDescription
    : subDescription
      ? [subDescription]
      : [];
  const featureList = Array.isArray(features) ? features : [];
  const learningList = Array.isArray(learning) ? learning : [];
  const awardList = Array.isArray(awards) ? awards : [];
  const tagList = Array.isArray(tags) ? tags : [];
  const reflectionList = Array.isArray(reflection) ? reflection : reflection ? [reflection] : [];
  const timelineEntries = Array.isArray(rest?.timeline) ? rest.timeline : [];
  let gallery = Array.isArray(images) ? images.filter(Boolean) : [];
  if (!gallery.length && image) gallery = [image];
  const badgeTone = statusTone[status] || "bg-white/10 text-neutral-200 border-white/10";
  const embedSrc = iframeUrl || liveUrl;
  const designEmbed = rest?.designEmbedUrl || rest?.figmaUrl;

  const renderShowcase = () => {
    if (showcaseType === "iframe" && embedSrc) {
      return (
        <div className="flex w-full justify-center">
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black">
            <iframe
              src={embedSrc}
              title={`${title} showcase`}
              className="h-full w-full block"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    }

    if ((showcaseType === "image-gallery" || !showcaseType) && gallery.length > 0) {
      const grouped = gallery.some((img) => typeof img === "object" && img.category);
      const categories = grouped
        ? Array.from(new Set(gallery.map((img) => (typeof img === "object" ? img.category : null)).filter(Boolean)))
        : [];
      const currentGroup = grouped ? activeGroup || categories[0] : null;
      const filteredGallery =
        grouped && currentGroup
          ? gallery.filter((img) => typeof img === "object" && img.category === currentGroup)
          : gallery;
      const safeIdx = filteredGallery.length ? carouselIdx % filteredGallery.length : 0;
      const current = filteredGallery[safeIdx] || filteredGallery[0];
      const currentSrc = typeof current === "object" ? current.src : current;
      const currentTitle = typeof current === "object" ? current.title : null;
      const currentDesc = typeof current === "object" ? current.description : null;

      return (
        <div className="space-y-3">
          {grouped && categories.length > 0 && (
            <div className="flex flex-wrap gap-2 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveGroup(cat);
                    setCarouselIdx(0);
                  }}
                  className={`rounded-full border px-3 py-1 transition ${
                    cat === currentGroup
                      ? "border-emerald-300/40 bg-emerald-400/10 text-emerald-100"
                      : "border-white/10 bg-white/5 text-neutral-200 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="max-h-[640px] overflow-y-auto">
              <img
                src={currentSrc}
                alt={`${title} screenshot ${safeIdx + 1}`}
                className="w-full"
              />
            </div>

            {(currentTitle || currentDesc) && (
              <div className="absolute inset-x-0 top-0 flex justify-end p-3">
                <div className="rounded-xl bg-black/55 px-3 py-2 text-xs text-white max-w-[70%] backdrop-blur">
                  {currentTitle && <p className="font-semibold">{currentTitle}</p>}
                  {currentDesc && <p className="text-[11px] text-neutral-200 mt-1">{currentDesc}</p>}
                </div>
              </div>
            )}

            {filteredGallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setCarouselIdx((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm text-white backdrop-blur hover:bg-black/70"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => setCarouselIdx((prev) => (prev + 1) % filteredGallery.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm text-white backdrop-blur hover:bg-black/70"
                >
                  ›
                </button>
              </>
            )}

            {currentDesc && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center p-3">
                <div className="rounded-xl bg-black/60 px-3 py-2 text-xs text-neutral-100 max-w-[80%] backdrop-blur">
                  {currentDesc}
                </div>
              </div>
            )}
          </div>

          {filteredGallery.length > 1 && (
            <div className="flex justify-center gap-2">
              {filteredGallery.map((_, idx) => (
                <button
                  key={`${title}-dot-${idx}`}
                  onClick={() => setCarouselIdx(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition ${idx === safeIdx ? "bg-emerald-300" : "bg-white/20"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    if (showcaseType === "mixed" && (gallery.length > 0 || iframeUrl)) {
      return (
        <div className="grid gap-4 sm:grid-cols-5">
          <div className="sm:col-span-3">
            {embedSrc ? (
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black h-[540px] md:h-[720px]">
                  <iframe
                    src={embedSrc}
                    title={`${title} embed`}
                    className="h-full w-full block"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex w-full max-w-4xl items-center justify-between px-1 text-xs text-neutral-300">
                  <span className="uppercase tracking-[0.12em] text-neutral-400">{liveEmbedLabel}</span>
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white hover:border-emerald-300/40 hover:text-emerald-100"
                    >
                      Open live site
                      <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-sm text-neutral-300">
                Add an iframe link to preview
              </div>
            )}
          </div>
          <div className="sm:col-span-2 grid gap-3">
            {designEmbed ? (
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black h-[540px] md:h-[720px]">
                  <iframe
                    src={designEmbed}
                    title={`${title} design embed`}
                    className="h-full w-full block"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="flex w-full items-center justify-between px-1 text-xs text-neutral-300">
                  <span className="uppercase tracking-[0.12em] text-neutral-400">{designEmbedLabel}</span>
                  <a
                    href={designEmbed}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white hover:border-emerald-300/40 hover:text-emerald-100"
                  >
                    Open design
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            ) : (
              gallery.slice(0, 2).map((src, idx) => (
                <div
                  key={`${title}-mixed-${idx}`}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                >
                  <img src={src} alt={`${title} screenshot ${idx + 1}`} className="h-full w-full object-cover" />
                </div>
              ))
            )}
          </div>
        </div>
      );
    }

    if (liveUrl) {
      return (
        <div className="flex w-full justify-center">
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black">
            <iframe
              src={liveUrl}
              title={`${title} live preview`}
              className="h-full w-full block"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-xl border border-dashed border-white/15 bg-white/5 px-4 py-5 text-sm text-neutral-300">
        No showcase yet. Add an iframe, gallery, or link to highlight this project.
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
      onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-primary/95 shadow-2xl shadow-black/50"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm text-neutral-200 hover:bg-white/20"
        >
          Close
        </button>

        <div className="max-h-[85vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
            <span>{year}</span>
            {category && <span className="text-neutral-300">· {category}</span>}
            <span className={`rounded-full border px-3 py-1 lowercase ${badgeTone}`}>
              {statusCopy[status] || status || "status"}
            </span>
            {role && (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 lowercase text-neutral-200">
                {role}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-3 sm:max-w-2xl">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
              <p className="text-sm text-neutral-300">
                {overview || description || "No overview provided yet."}
              </p>
              {subDescriptions.map((subDesc, idx) => (
                <p key={`${title}-sub-${idx}`} className="text-sm text-neutral-400">
                  {subDesc}
                </p>
              ))}
            </div>
            {progress ? (
              <div className="w-full sm:w-48 space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-300">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-[#33c2cc]"
                    style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
                  />
                </div>
              </div>
            ) : null}
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-200">
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
              {href && !liveUrl && (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-white"
                >
                  View project
                </a>
              )}
            </div>

            {renderShowcase()}

            {Array.isArray(stack) && stack.length > 0 && (
              <div className="flex flex-wrap gap-2 text-xs text-neutral-200">
                {stack.map((tech) => {
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

            {featureList.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">Key Features</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-300">
                  {featureList.map((item, idx) => (
                    <li key={`${title}-feature-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {learningList.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">What I learned</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-300">
                  {learningList.map((item, idx) => (
                    <li key={`${title}-learning-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {reflectionList.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">Reflection</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-300">
                  {reflectionList.map((item, idx) => (
                    <li key={`${title}-reflection-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {timelineEntries.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm font-semibold text-white">Next tasks</p>
                <div className="relative border-l border-white/10 pl-1 space-y-3">
                  {timelineEntries.map((item, idx) => {
                    const tone =
                      item.status === "shipped"
                        ? "bg-emerald-400/15 text-emerald-100 border-emerald-300/40"
                        : item.status === "in-progress"
                          ? "bg-amber-400/15 text-amber-100 border-amber-300/40"
                          : "bg-white/5 text-neutral-200 border-white/15";
                    const dot =
                      item.status === "shipped"
                        ? "bg-emerald-300 shadow-[0_0_0_4px_rgba(52,211,153,0.15)]"
                        : item.status === "in-progress"
                          ? "bg-amber-300 shadow-[0_0_0_4px_rgba(251,191,36,0.15)]"
                          : "bg-white/60 shadow-[0_0_0_4px_rgba(255,255,255,0.1)]";
                    return (
                      <div key={`${title}-timeline-${idx}`} className="relative">
                        <div className={`absolute -left-2 top-2 h-2 w-2 rounded-full ${dot}`} />
                        <div className={`rounded-lg border px-3 py-2.5 ${tone}`}>
                          <div className="flex items-start justify-between gap-3">
                            <div className="space-y-0.5">
                              <p className="text-sm font-semibold text-white">{item.label}</p>
                              {item.note && <p className="text-[11px] text-neutral-200">{item.note}</p>}
                            </div>
                            {item.date && (
                              <div className="text-[11px] text-neutral-300 whitespace-nowrap">{item.date}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {awardList.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white">Awards</p>
                <div className="flex flex-wrap gap-2 text-xs text-emerald-200">
                  {awardList.map((award) => (
                    <span
                      key={`${title}-award-${award}`}
                      className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {notes && (
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">Notes</p>
                <p className="text-sm text-neutral-300">{notes}</p>
              </div>
            )}

            {tagList.length > 0 && (
              <div className="flex flex-wrap gap-2 text-xs text-neutral-200">
                {tagList.map((tag) => (
                  <span
                    key={`${title}-tag-${tag}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}


          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
