import { skills } from '../data/profile.ts'
import Section from './Section.tsx'

export default function Skills() {
  return (
    <Section id="habilidades" index="04" title="Habilidades técnicas">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="rounded-xl border border-slate-800 bg-panel p-6">
            <h3 className="mb-4 font-mono text-sm text-emerald-300">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-700/70 bg-slate-800/40 px-2.5 py-1 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
