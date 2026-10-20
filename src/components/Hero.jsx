import React from 'react'
import { contact } from '../data.js'
import ExtLink from './ui/ExtLink.jsx'
import HeroArt from '../theme/HeroArt.jsx'

// Buttons in the hero reuse the first two profiles (GitHub, LinkedIn) from the contact data.
const heroLinks = [
  ['GitHub', contact.profiles[0].href],
  ['LinkedIn', contact.profiles[1].href],
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow mono"><span className="dot" /> Bangalore, India · Software Engineer</p>
      <h1>I build AI products<br />from zero and <em>keep them running.</em></h1>
      <p className="lead">
        Backend and full-stack engineer with about 15 months of experience. I build LLM agents,
        retrieval (RAG) and real-time chat, and I write the interface for them too.
      </p>
      <div className="cta">
        <a className="btn primary" href="#work">See my work</a>
        {heroLinks.map(([label, href]) => (
          <ExtLink key={label} className="btn" href={href}>{label} ↗</ExtLink>
        ))}
      </div>
      <div className="scroll-hint mono" aria-hidden="true"><i /> scroll</div>
      <div className="hero-art" aria-hidden="true"><HeroArt /></div>
    </section>
  )
}
