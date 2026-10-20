import React from 'react'
import { contact } from '../data.js'
import Reveal from './Reveal.jsx'
import Section from './ui/Section.jsx'
import ExtLink from './ui/ExtLink.jsx'

export default function Contact() {
  return (
    <Section id="contact" className="contact" kicker="04 / Contact" title="Say hello">
      <Reveal>
        <p className="lead">Email is the fastest way to reach me.</p>
        <a className="mail" href={`mailto:${contact.email}`}>{contact.email}</a>
        <ul className="links mono">
          {contact.profiles.map((p) => (
            <li key={p.href}><ExtLink href={p.href}>{p.label} ↗</ExtLink></li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
