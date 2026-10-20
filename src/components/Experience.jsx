import React from 'react'
import { background } from '../data.js'
import Section from './ui/Section.jsx'
import Row from './ui/Row.jsx'

export default function Experience() {
  return (
    <Section id="experience" kicker="02 / Background" title="Where I work and studied">
      {background.map((r) => <Row key={r.when} {...r} />)}
    </Section>
  )
}
