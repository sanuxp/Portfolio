import React from 'react'

export default function ChipList({ items }) {
  return (
    <ul className="chips">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}
