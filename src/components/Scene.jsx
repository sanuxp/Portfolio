import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AdditiveBlending, DoubleSide } from 'three'
import { cssColor } from '../cssColor.js'

const diskVertex = /* glsl */ `
  varying vec3 vPos;
  void main() {
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Accretion disk, kept dim like the recorded images: dull amber inside, burnt orange, then dark ember.
// Swirling streaks turn faster near the centre, and one side is brighter (Doppler beaming).
const diskFragment = /* glsl */ `
  uniform float uTime;
  uniform float uInner;
  uniform float uOuter;
  uniform vec3 uHot;
  uniform vec3 uMid;
  uniform vec3 uCool;
  varying vec3 vPos;

  void main() {
    float r = length(vPos.xy);
    float t = clamp((r - uInner) / (uOuter - uInner), 0.0, 1.0);
    float a = atan(vPos.y, vPos.x);

    float spin = uTime * (1.6 / (0.35 + t));
    float streaks = 0.55 + 0.25 * sin(a * 7.0 - spin * 2.0 + t * 18.0)
                         + 0.20 * sin(a * 13.0 + spin * 3.0 - t * 31.0);
    float doppler = 0.55 + 0.45 * cos(a - 0.6);

    vec3 col = mix(uHot, uMid, smoothstep(0.0, 0.3, t));
    col = mix(col, uCool, smoothstep(0.35, 1.0, t));

    float edge = smoothstep(0.0, 0.06, t) * (1.0 - smoothstep(0.55, 1.0, t));
    float alpha = edge * streaks * doppler * 0.8;
    gl_FragColor = vec4(col * alpha, alpha);
  }
`

function Disk({ inner = 1.35, outer = 4.6, ...props }) {
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uInner: { value: inner },
    uOuter: { value: outer },
    uHot: { value: cssColor('--glow') },
    uMid: { value: cssColor('--accent') },
    uCool: { value: cssColor('--ember') },
  }), [inner, outer])
  useFrame((s) => { uniforms.uTime.value = s.clock.elapsedTime })
  return (
    <mesh {...props}>
      <ringGeometry args={[inner, outer, 160, 1]} />
      <shaderMaterial
        vertexShader={diskVertex}
        fragmentShader={diskFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={DoubleSide}
        blending={AdditiveBlending}
      />
    </mesh>
  )
}

// Light bent over the top of the hole: a thin vertical copy of the disk, as seen in lensing
function LensedHalo() {
  return <Disk inner={1.2} outer={2.3} rotation={[Math.PI / 2, 0, 0]} />
}

function Horizon() {
  const bg = useMemo(() => cssColor('--bg'), [])
  const photon = useMemo(() => cssColor('--photon'), [])
  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshBasicMaterial color={bg} />
      </mesh>
      {/* photon ring */}
      <mesh>
        <torusGeometry args={[1.26, 0.016, 16, 160]} />
        <meshBasicMaterial color={photon} transparent opacity={0.6} blending={AdditiveBlending} />
      </mesh>
    </group>
  )
}

// Points on a sphere shell (stars) or flat disk (infalling matter) share the same material wrapper.
function PointCloud({ geometryRef, positions, size, color, opacity, additive }) {
  return (
    <points ref={geometryRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
        blending={additive ? AdditiveBlending : undefined}
      />
    </points>
  )
}

// Matter spiralling inward: inner particles orbit faster and fall slowly toward the horizon
function Infall({ count = 700 }) {
  const ref = useRef()
  const color = useMemo(() => cssColor('--glow'), [])
  const data = useMemo(() => {
    const radius = new Float32Array(count)
    const angle = new Float32Array(count)
    const lift = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      radius[i] = 1.5 + Math.random() * 6.5
      angle[i] = Math.random() * Math.PI * 2
      lift[i] = (Math.random() - 0.5) * 0.5 * Math.min(1, radius[i] / 3)
    }
    return { radius, angle, lift, pos: new Float32Array(count * 3) }
  }, [count])

  useFrame((_, dt) => {
    const { radius, angle, lift, pos } = data
    for (let i = 0; i < count; i++) {
      angle[i] += dt * (0.9 / Math.pow(radius[i], 1.5)) * 3
      radius[i] -= dt * 0.06
      if (radius[i] < 1.35) radius[i] = 7.5
      pos[i * 3] = Math.cos(angle[i]) * radius[i]
      pos[i * 3 + 1] = lift[i]
      pos[i * 3 + 2] = Math.sin(angle[i]) * radius[i]
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return <PointCloud geometryRef={ref} positions={data.pos} size={0.028} color={color} opacity={0.4} additive />
}

function Stars({ count = 800 }) {
  const ref = useRef()
  const color = useMemo(() => cssColor('--star'), [])
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 14 + Math.random() * 14
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(2 * Math.random() - 1)
      a[i * 3] = r * Math.sin(ph) * Math.cos(th)
      a[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th)
      a[i * 3 + 2] = r * Math.cos(ph)
    }
    return a
  }, [count])
  useFrame((_, dt) => { ref.current.rotation.y += dt * 0.01 })
  return <PointCloud geometryRef={ref} positions={positions} size={0.045} color={color} opacity={0.4} />
}

// Scroll tilts the disk and pulls the camera closer, the pointer adds parallax.
function Rig({ children }) {
  const group = useRef()
  const { size, camera } = useThree()
  const wide = size.width > 800

  useFrame((state, dt) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const p = max > 0 ? window.scrollY / max : 0
    const k = 1 - Math.pow(0.001, dt)
    const g = group.current
    g.position.x += ((wide ? 2.6 - p * 2.6 : 0) - g.position.x) * k
    g.position.y += ((wide ? 0 : 1.6) - g.position.y) * k
    g.rotation.x += ((0.28 + p * 0.9 - state.pointer.y * 0.15) - g.rotation.x) * k
    g.rotation.z += ((-0.18 + state.pointer.x * 0.1 - p * 0.4) - g.rotation.z) * k
    g.rotation.y += ((state.pointer.x * 0.25) - g.rotation.y) * k
    camera.position.z += ((9 - p * 3.2) - camera.position.z) * k
  })

  return <group ref={group} scale={wide ? 1 : 0.7}>{children}</group>
}

export default function Scene() {
  const reduced = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.75]}
        frameloop={reduced ? 'demand' : 'always'}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <Stars />
        <Rig>
          <Horizon />
          <Disk rotation={[Math.PI / 2, 0, 0]} />
          <LensedHalo />
          <Infall />
        </Rig>
      </Canvas>
    </div>
  )
}
