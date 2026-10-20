import React from 'react'
import { skills } from '../data.js'
import Reveal from './Reveal.jsx'
import Section from './ui/Section.jsx'
import ChipList from './ui/ChipList.jsx'

export default function Skills() {
  return (
    <Section id="skills" kicker="03 / Skills" title="What I work with">
      <div className="skills">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 90}>
            <h3 className="mono">{group}</h3>
            <ChipList items={items} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
