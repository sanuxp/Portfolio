const lines = [
  ['$ support-chat start', false],
  ['✓ ai agent online', true],
  ['$ escalate --to human', false],
  ['✓ summary saved', true],
]

export default function HeroArt() {
  return (
    <div className="term">
      <div className="term-bar"><i /><i /><i /><span>~/support-chat</span></div>
      <div className="term-body">
        {lines.map(([text, ok], i) => (
          <div key={text} className={`term-line${ok ? ' ok' : ''}`} style={{ '--i': i, '--n': text.length }}>{text}</div>
        ))}
        <div className="term-line" style={{ '--i': lines.length, '--n': 2 }}>$ <span className="term-cursor" /></div>
      </div>
    </div>
  )
}
