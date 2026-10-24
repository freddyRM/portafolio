import { profile, projects } from '../data/profile.ts'
import { ExternalIcon, GitHubIcon } from './Icons.tsx'
import Section from './Section.tsx'

const ordered = [...projects].sort((a, b) => Number(Boolean(b.demo)) - Number(Boolean(a.demo)))

export default function Projects() {
  return (
    <Section id="proyectos" index="03" title="Proyectos">
      <p className="-mt-6 mb-10 max-w-2xl text-slate-400">
        Los que tienen demo se pueden abrir y probar. Es un preview del trabajo, no solo el repositorio.
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((p) => (
          <article
            key={p.name}
            className={`group relative flex flex-col rounded-xl border bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/5 ${
              p.featured ? 'border-slate-700' : 'border-slate-800'
            }`}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="mb-4 text-emerald-400" aria-hidden>
              <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
            </svg>

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

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-400/10 px-3 py-1.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20"
                >
                  Ver demo
                  <ExternalIcon width={14} height={14} />
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-400 transition hover:text-white"
                >
                  <GitHubIcon width={16} height={16} />
                  Código
                </a>
              )}
            </div>
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
