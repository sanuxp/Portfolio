import React from 'react'

// External link that opens in a new tab. Pass className to style it (link, btn, ...).
export default function ExtLink({ href, className = '', children }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
