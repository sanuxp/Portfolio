import { Color } from 'three'

// Reads a colour from a CSS variable so the 3D scene and the page share one palette (styles.css).
export function cssColor(name) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return new Color(value || '#000000')
}
