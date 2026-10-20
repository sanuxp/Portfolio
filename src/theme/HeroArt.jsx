const cols = ['Chat', 'Chess', 'Vision']

export default function HeroArt() {
  return (
    <>
      <div className="swiss-circle" />
      <div className="swiss-cols">
        {cols.map((c, i) => <div key={c}><span>{String(i + 1).padStart(2, '0')}</span><b>{c}</b></div>)}
      </div>
    </>
  )
}
