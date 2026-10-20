const lines = [
  ['> support-chat --start', false],
  ['ok: agent online', true],
  ['> escalate human', false],
  ['ok: summary saved', true],
]

export default function HeroArt() {
  return (
    <div className="crt">
      {lines.map(([text, ok], i) => (
        <div key={text} className={ok ? 'ok' : ''} style={{ '--i': i, '--n': text.length }}>{text}</div>
      ))}
      <div style={{ '--i': lines.length, '--n': 2 }}>&gt; <span className="crt-cursor" /></div>
    </div>
  )
}
