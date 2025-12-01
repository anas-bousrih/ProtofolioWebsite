import { myProjects } from "../constants"
import Project from "../components/Project"

const Projects = () => {
  return (
    <section className="relative c-space section-spacing">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] text-neutral-300">
          Projects
        </div>

        <h2 className="text-heading pt-[2.5rem]">My Selected Projects</h2>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 h-[1px] w-full" />
        <div className="mt-6 grid gap-4">
          {myProjects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
    </section>
  )
}

export default Projects
