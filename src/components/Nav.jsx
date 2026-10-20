import React, { useEffect, useState } from 'react'
import { nav } from '../data.js'

const NAME = 'SANU KUMAR'

function useTyped(text, delay = 120) {
  const [count, setCount] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches ? text.length : 0)
  useEffect(() => {
    if (count >= text.length) return
    const id = setTimeout(() => setCount(count + 1), count === 0 ? 400 : delay)
    return () => clearTimeout(id)
  }, [count, text, delay])
  return text.slice(0, count)
}

export default function Nav() {
  const typed = useTyped(NAME)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="Sanu Kumar, home">{typed}<span>_</span></a>
      <nav id="menu" className={open ? 'open' : ''} aria-label="Primary">
        {nav.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <button className="icon-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="menu">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      </button>
    </header>
  )
}
