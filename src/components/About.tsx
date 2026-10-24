import { profile, softSkills } from '../data/profile.ts'
import Section from './Section.tsx'

const stats = [
  { value: `${profile.yearsOfExperience}+`, label: 'Años de experiencia' },
  { value: '7', label: 'Roles profesionales' },
  { value: '20+', label: 'Tecnologías en producción' },
  { value: 'SAP B1', label: 'Integraciones enterprise' },
]

export default function About() {
  return (
    <Section id="sobre-mi" index="01" title="Sobre mí">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-slate-400">
          {profile.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            En mi tiempo libre desarrollo bots y automatizaciones: por ejemplo, un bot que reporta la tasa del dólar en
            Venezuela por{' '}
            <a href={profile.telegramBot} target="_blank" rel="noreferrer" className="text-emerald-300 underline-offset-4 hover:underline">
              Telegram
            </a>{' '}
            y WhatsApp.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {softSkills.map((s) => (
              <span key={s} className="rounded-full border border-slate-800 px-3 py-1 text-sm text-slate-300">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-800 bg-panel p-5 transition hover:border-emerald-400/40"
            >
              <p className="text-gradient text-3xl font-extrabold">{s.value}</p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
