import { useState } from 'react'
import { profile } from '../data/profile.ts'
import { CopyIcon, GitHubIcon, LinkedInIcon, MailIcon, TelegramIcon } from './Icons.tsx'
import Section from './Section.tsx'

const channels = [
  { label: 'LinkedIn', value: 'freddy-j-rodriguez', href: profile.linkedin, Icon: LinkedInIcon },
  { label: 'GitHub', value: 'freddyRM', href: profile.github, Icon: GitHubIcon },
  { label: 'Telegram bot', value: '@Referencia_Dolar_bot', href: profile.telegramBot, Icon: TelegramIcon },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <Section id="contacto" index="06" title="Contacto">
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-panel p-8 md:p-12">
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              ¿Tienes un proyecto en mente? <span className="text-gradient">Hablemos.</span>
            </h3>
            <p className="mt-4 max-w-xl text-lg text-slate-400">
              Estoy abierto a oportunidades full time, freelance y colaboraciones en APIs, integraciones con SAP
              Business One, automatización y análisis de datos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 font-semibold text-ink shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
              >
                <MailIcon width={18} height={18} /> Escríbeme
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-mono text-sm text-slate-200 transition hover:border-emerald-400/60 hover:text-emerald-300"
              >
                <CopyIcon width={16} height={16} />
                {copied ? '¡Copiado!' : profile.email}
              </button>
            </div>
          </div>

          <ul className="space-y-3">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-slate-800 bg-ink/50 p-4 transition hover:border-emerald-400/50"
                >
                  <span className="rounded-lg bg-slate-800/80 p-2.5 text-emerald-300">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-500">{label}</span>
                    <span className="block font-medium text-slate-200">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
