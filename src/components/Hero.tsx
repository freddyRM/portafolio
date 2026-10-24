import { profile } from '../data/profile.ts'
import { GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './Icons.tsx'

const codeLines = [
  { k: 'const', v: ' developer = {' },
  { k: '  name', v: `: '${profile.shortName}',` },
  { k: '  stack', v: ": ['TypeScript', 'Python', 'PHP', 'SQL']," },
  { k: '  focus', v: ": ['APIs', 'SAP B1', 'Automatización']," },
  { k: '  tools', v: ": ['NestJS', 'Laravel', 'FastAPI', 'n8n']," },
  { k: '  openToWork', v: ': true,' },
  { k: '}', v: '' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pt-24 pb-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="order-2 lg:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible para nuevos proyectos
          </p>

          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hola, soy <span className="text-gradient">{profile.shortName}</span>
          </h1>
          <p className="mt-3 text-xl font-semibold text-slate-200 sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{profile.tagline}</p>

          <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <PinIcon width={16} height={16} /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 font-semibold text-ink shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
            >
              Hablemos
            </a>
            <a
              href="#experiencia"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-300"
            >
              Ver experiencia
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 text-slate-400 transition hover:text-white">
                <GitHubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-slate-400 transition hover:text-white">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Correo" className="rounded-md p-2 text-slate-400 transition hover:text-white">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 flex flex-col items-center lg:order-2">
          <div className="relative z-10 lg:-mb-14">
            <div className="absolute inset-3 rounded-full bg-emerald-400/25 blur-2xl" />
            <img
              src="/freddy.jpeg"
              alt="Freddy Rodríguez"
              width={682}
              height={1024}
              fetchPriority="high"
              className="relative h-40 w-40 rounded-full object-cover object-[center_18%] ring-2 ring-emerald-300/80 ring-offset-4 ring-offset-ink sm:h-48 sm:w-48"
            />
          </div>
          <div className="hidden w-full rounded-xl border border-slate-800 bg-panel/80 pt-16 shadow-2xl shadow-black/40 backdrop-blur lg:block">
          <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 font-mono text-xs text-slate-500">developer.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
            {codeLines.map((line, i) => (
              <div key={i}>
                <span className="mr-4 inline-block w-4 text-right text-slate-600 select-none">{i + 1}</span>
                <span className={i === 0 ? 'text-fuchsia-400' : 'text-cyan-300'}>{line.k}</span>
                <span className={i === 0 ? 'text-slate-300' : 'text-emerald-300'}>{line.v}</span>
              </div>
            ))}
          </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
