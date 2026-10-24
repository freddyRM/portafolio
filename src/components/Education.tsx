import { courses, education } from '../data/profile.ts'
import Section from './Section.tsx'

export default function Education() {
  return (
    <Section id="formacion" index="05" title="Formación">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 font-mono text-sm tracking-wider text-slate-500 uppercase">Educación</h3>
          <ol className="relative space-y-8 border-l border-slate-800 pl-6">
            {education.map((e) => (
              <li key={e.title} className="relative">
                <span className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-ink" />
                <p className="font-mono text-xs text-slate-500">{e.period}</p>
                <p className="mt-1 font-semibold text-white">{e.title}</p>
                <p className="text-slate-400">{e.place}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-sm tracking-wider text-slate-500 uppercase">Cursos</h3>
          <ul className="divide-y divide-slate-800/80">
            {courses.map((c) => (
              <li key={c.title} className="flex items-baseline justify-between gap-4 py-3">
                <div>
                  <p className="text-slate-200">{c.title}</p>
                  <p className="text-sm text-slate-500">{c.place}</p>
                </div>
                <span className="font-mono text-xs text-emerald-300">{c.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
