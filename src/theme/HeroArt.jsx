import { projects } from '../data.js'

export default function HeroArt() {
  return (
    <div className="glass">
      <h4>{projects.length} projects</h4>
      <p>chat · chess · computer vision</p>
      <i /><i />
    </div>
  )
}
