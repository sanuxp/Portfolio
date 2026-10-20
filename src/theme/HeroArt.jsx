const heights = [30, 60, 100, 70, 130, 90, 150, 110, 80, 140, 60, 100, 40, 70, 30].map((h) => Math.round(h / 1.5))

export default function HeroArt() {
  return (
    <div className="wave">
      {heights.map((h, i) => <i key={i} className={i % 4 === 0 ? 'hot' : ''} style={{ '--h': h, '--i': i }} />)}
    </div>
  )
}
