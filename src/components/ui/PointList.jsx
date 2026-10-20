import React from 'react'

export default function PointList({ items }) {
  return (
    <ul className="points">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}
