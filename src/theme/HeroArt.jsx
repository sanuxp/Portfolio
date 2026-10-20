// customer -> AI agent -> human agent, the flow in Support Chat.
export default function HeroArt() {
  return (
    <svg className="bp" viewBox="0 0 360 300" role="presentation">
      <path className="bp-link" style={{ '--i': 0 }} d="M96 70 H170" />
      <path className="bp-link" style={{ '--i': 1 }} d="M200 100 V184" />
      <circle className="bp-node" cx="70" cy="70" r="26" />
      <circle className="bp-dot" cx="70" cy="70" r="4" />
      <text className="bp-label" x="70" y="116" textAnchor="middle">customer</text>
      <circle className="bp-node alt" cx="200" cy="70" r="30" />
      <circle className="bp-dot" cx="200" cy="70" r="4" />
      <text className="bp-label" x="200" y="26" textAnchor="middle">ai agent</text>
      <circle className="bp-node" cx="200" cy="214" r="30" />
      <circle className="bp-dot" cx="200" cy="214" r="4" />
      <text className="bp-label" x="200" y="262" textAnchor="middle">human agent</text>
      <text className="bp-note" x="214" y="146">escalate</text>
    </svg>
  )
}
