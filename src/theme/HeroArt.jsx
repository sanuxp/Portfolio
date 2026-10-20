import { projects } from '../data.js'

export default function HeroArt() {
  return (
    <>
      <ol className="index">
        {projects.map((p, i) => (
          <li key={p.title} style={{ '--i': i }}><span>{String(i + 1).padStart(2, '0')}</span>{p.title}</li>
        ))}
      </ol>
      <p className="index-label">Selected work ↓</p>
    </>
  )
}
