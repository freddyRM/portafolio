import { profile, projects } from '../data/profile.ts'
import { ExternalIcon, GitHubIcon } from './Icons.tsx'
import Section from './Section.tsx'

export default function Projects() {
  return (
    <Section id="proyectos" index="03" title="Proyectos">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`group relative flex flex-col rounded-xl border bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/5 ${
              p.featured ? 'border-slate-700' : 'border-slate-800'
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="text-emerald-400" aria-hidden>
                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
              </svg>
              <div className="flex items-center gap-1">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`Código de ${p.name}`} className="rounded-md p-1.5 text-slate-400 transition hover:text-white">
                    <GitHubIcon />
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`Ver ${p.name}`} className="rounded-md p-1.5 text-slate-400 transition hover:text-white">
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-emerald-300">
              {p.name}
              {p.featured && (
                <span className="ml-2 align-middle font-mono text-[10px] tracking-wider text-emerald-400 uppercase">
                  destacado
                </span>
              )}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>

            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate-500">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-300"
        >
          <GitHubIcon width={18} height={18} /> Ver todos los repositorios
        </a>
      </div>
    </Section>
  )
}
