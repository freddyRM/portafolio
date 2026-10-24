import { profile } from '../data/profile.ts'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-8 text-center font-mono text-xs text-slate-500">
      <p>
        Diseñado y desarrollado por {profile.name} · {new Date().getFullYear()}
      </p>
      <p className="mt-1">React · TypeScript · Tailwind CSS · Vercel</p>
    </footer>
  )
}
