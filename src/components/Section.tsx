import { useEffect, useRef, type ReactNode } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export default function Section({ id, index, title, children }: SectionProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div ref={ref} className="reveal">
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold text-white md:text-3xl">
          <span className="font-mono text-base font-normal text-emerald-400">{index}.</span>
          {title}
          <span className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
        </h2>
        {children}
      </div>
    </section>
  )
}
