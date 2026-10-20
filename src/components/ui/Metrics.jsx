import React from 'react'

// items: [[value, label], ...]
export default function Metrics({ items }) {
  return (
    <div className="metrics">
      {items.map(([value, label]) => (
        <div key={label}><b className="mono">{value}</b><span>{label}</span></div>
      ))}
    </div>
  )
}
