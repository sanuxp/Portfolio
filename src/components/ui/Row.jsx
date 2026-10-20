import React from 'react'
import Reveal from '../Reveal.jsx'
import ExtLink from './ExtLink.jsx'
import PointList from './PointList.jsx'

// One timeline-style row: meta column on the left, content on the right.
export default function Row({ when, where, title, text, points, links }) {
  return (
    <Reveal className="row">
      <div className="row-meta mono">
        <b>{when}</b>
        {where && <span>{where}</span>}
      </div>
      <div>
        {title && <h3>{title}</h3>}
        {text && <p>{text}</p>}
        {points && <PointList items={points} />}
        {links && (
          <p>
            {links.map((l, i) => (
              <React.Fragment key={l.href}>
                {i > 0 && ' · '}
                <ExtLink className="link" href={l.href}>{l.label} ↗</ExtLink>
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
    </Reveal>
  )
}
