import React from 'react'
import { projects } from '../data.js'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import Section from './ui/Section.jsx'
import Tag from './ui/Tag.jsx'
import Metrics from './ui/Metrics.jsx'
import PointList from './ui/PointList.jsx'
import ExtLink from './ui/ExtLink.jsx'

function ProjectCard({ project: p }) {
  return (
    <Tilt className="card">
      <div className="card-top">
        <h3>{p.title}</h3>
        <Tag>{p.tag}</Tag>
      </div>
      <p className="summary">{p.summary}</p>
      {p.metrics && <Metrics items={p.metrics} />}
      <PointList items={p.points} />
      {p.note && <p className="note">{p.note}</p>}
      <p className="stack mono">{p.stack.join(' · ')}</p>
      {p.repo && <ExtLink className="link repo" href={p.repo}>View code ↗</ExtLink>}
    </Tilt>
  )
}

export default function Projects() {
  return (
    <Section id="work" kicker="01 / Selected work" title="Things I built">
      <div className="grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
