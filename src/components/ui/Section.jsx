import React from 'react'
import Reveal from '../Reveal.jsx'

// A page section with an animated "kicker + title" heading.
export default function Section({ id, className = '', kicker, title, children }) {
  return (
    <section id={id} className={className}>
      <Reveal className="head">
        <p className="mono kicker">{kicker}</p>
        {title && <h2>{title}</h2>}
      </Reveal>
      {children}
    </section>
  )
}
