import { useState } from 'react'
import { experience } from '../data/profile.ts'
import Section from './Section.tsx'

export default function Experience() {
  const [selected, setSelected] = useState(0)
  const job = experience[selected]

  return (
    <Section id="experiencia" index="02" title="Experiencia">
      <div className="grid gap-8 md:grid-cols-[240px_1fr]">
        <div
          role="tablist"
          aria-label="Empresas"
          className="flex gap-1 overflow-x-auto border-b border-slate-800 md:flex-col md:overflow-visible md:border-b-0 md:border-l"
        >
          {experience.map((e, i) => (
            <button
              key={`${e.company}-${e.period}`}
              type="button"
              role="tab"
              aria-selected={selected === i}
              onClick={() => setSelected(i)}
              className={`-mb-px shrink-0 border-b-2 px-4 py-3 text-left text-sm whitespace-nowrap transition-colors md:mb-0 md:-ml-px md:border-b-0 md:border-l-2 ${
                selected === i
                  ? 'border-emerald-400 bg-emerald-400/5 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
              }`}
            >
              <span className="block font-medium">{e.company}</span>
              <span className="block font-mono text-xs text-slate-500">{e.period.split(' — ')[0]}</span>
            </button>
          ))}
        </div>

        <article key={selected} role="tabpanel" className="animate-[fadeIn_0.4s_ease]">
          <h3 className="text-xl font-semibold text-white">
            {job.role} <span className="text-emerald-300">@ {job.company}</span>
          </h3>
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-slate-500">
            <span>{job.period}</span>
            <span aria-hidden>·</span>
            <span>{job.mode}</span>
            {job.current && (
              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs text-emerald-300">Actual</span>
            )}
          </p>

          <ul className="mt-6 space-y-4">
            {job.highlights.map((h) => (
              <li key={h.text} className="flex gap-3 leading-relaxed text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-emerald-400" />
                <span>
                  {h.title && <strong className="font-semibold text-slate-200">{h.title}: </strong>}
                  {h.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {job.stack.map((t) => (
              <span key={t} className="rounded-md bg-slate-800/70 px-2.5 py-1 font-mono text-xs text-cyan-300">
                {t}
              </span>
            ))}
          </div>
        </article>
      </div>
    </Section>
  )
}
