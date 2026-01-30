"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"

export type PalletRackShowcaseProps = {
  levels?: number
  columns?: number
  width?: number
  height?: number
  depth?: number
  rackRotateY?: number
  className?: string
}

function PalletRackMesh({
  width,
  height,
  depth,
  levels,
  columns: bays,
}: {
  width: number
  height: number
  depth: number
  levels: number
  columns: number
}) {
  const effectiveSize = { x: width, y: height, z: depth }
  const step = effectiveSize.y / levels

  const uprightColor = 0x1d4ed8
  const beamColor = 0xf97316
  const deckingColor = 0x94a3b8
  const bracingColor = 0xcbd5e1

  const uprightWidth = 0.1
  const uprightDepth = 0.1
  const uprightHeight = effectiveSize.y
  const margin = 0.05
  const beamHeight = 0.08
  const beamDepth = 0.12
  const beamInset = 0.02
  const deckingThickness = 0.03
  const deckingDepth = effectiveSize.z * 0.95

  function BracingWall({
    x,
    zFront,
    zBack,
  }: {
    x: number
    zFront: number
    zBack: number
  }) {
    const inset = 0.03
    const zf = zFront + inset
    const zb = zBack - inset
    const braceX = 0.04
    const braceThickness = 0.035
    const topBarHeight = 0.04
    const topBarWidth = 0.04
    const topBarLength = Math.abs(zb - zf)
    const padTop = 0.08

    return (
      <group>
        {Array.from({ length: levels }, (_, levelIdx) => {
          const y0 = -effectiveSize.y / 2 + levelIdx * step
          const y1 = y0 + step
          const padY = Math.min(0.06, step * 0.15)
          const y0p = y0 + padY
          const y1p = y1 - padY
          const isEven = levelIdx % 2 === 0
          const z0 = isEven ? zf : zb
          const z1 = isEven ? zb : zf
          const dy = y1p - y0p
          const dz = z1 - z0
          const braceLength = Math.sqrt(dy * dy + dz * dz)
          const angleX = Math.atan2(dz, dy)
          const centerY = (y0p + y1p) / 2
          const centerZ = (z0 + z1) / 2
          return (
            <mesh
              key={`brace-${levelIdx}`}
              position={[x, centerY, centerZ]}
              rotation={[angleX, 0, 0]}
              scale={[braceX, braceLength, braceThickness]}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color={bracingColor}
                metalness={0.75}
                roughness={0.35}
              />
            </mesh>
          )
        })}
        <mesh
          position={[x, effectiveSize.y / 2 - padTop, 0]}
          scale={[topBarWidth, topBarHeight, topBarLength]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={bracingColor}
            metalness={0.75}
            roughness={0.35}
          />
        </mesh>
      </group>
    )
  }

  const groupY = effectiveSize.y / 2

  return (
    <group position={[0, groupY, 0]}>
      {Array.from({ length: bays + 1 }, (_, boundaryIdx) => {
        const boundaryX = -effectiveSize.x / 2 + (effectiveSize.x / bays) * boundaryIdx
        const frontUprightZ = -effectiveSize.z / 2 + margin
        const backUprightZ = effectiveSize.z / 2 - margin
        return (
          <group key={`upright-${boundaryIdx}`}>
            <mesh
              position={[boundaryX, 0, frontUprightZ]}
              scale={[uprightWidth, uprightHeight, uprightDepth]}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={uprightColor} metalness={0.3} roughness={0.7} />
            </mesh>
            <mesh
              position={[boundaryX, 0, backUprightZ]}
              scale={[uprightWidth, uprightHeight, uprightDepth]}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={uprightColor} metalness={0.3} roughness={0.7} />
            </mesh>
          </group>
        )
      })}

      {Array.from({ length: bays + 1 }, (_, boundaryIdx) => {
        const boundaryX = -effectiveSize.x / 2 + (effectiveSize.x / bays) * boundaryIdx
        const frontUprightZ = -effectiveSize.z / 2 + margin
        const backUprightZ = effectiveSize.z / 2 - margin
        return (
          <BracingWall
            key={`bracing-${boundaryIdx}`}
            x={boundaryX}
            zFront={frontUprightZ}
            zBack={backUprightZ}
          />
        )
      })}

      {Array.from({ length: levels }, (_, levelIdx) => {
        if (levelIdx === 0) return null
        const beamY = -effectiveSize.y / 2 + levelIdx * step + beamHeight / 2
        const frontBeamZ = -effectiveSize.z / 2 + margin + beamInset
        const backBeamZ = effectiveSize.z / 2 - margin - beamInset
        return (
          <group key={`beams-${levelIdx}`}>
            {Array.from({ length: bays }, (_, bayIdx) => {
              const bayStartX = -effectiveSize.x / 2 + (effectiveSize.x / bays) * bayIdx
              const bayEndX = -effectiveSize.x / 2 + (effectiveSize.x / bays) * (bayIdx + 1)
              const bayCenterX = (bayStartX + bayEndX) / 2
              const bayWidth = bayEndX - bayStartX
              return (
                <group key={`bay-${levelIdx}-${bayIdx}`}>
                  <mesh
                    position={[bayCenterX, beamY, frontBeamZ]}
                    scale={[bayWidth, beamHeight, beamDepth]}
                  >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={beamColor} metalness={0.35} roughness={0.6} />
                  </mesh>
                  <mesh
                    position={[bayCenterX, beamY, backBeamZ]}
                    scale={[bayWidth, beamHeight, beamDepth]}
                  >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={beamColor} metalness={0.35} roughness={0.6} />
                  </mesh>
                </group>
              )
            })}
          </group>
        )
      })}

      {Array.from({ length: levels }, (_, levelIdx) => {
        if (levelIdx === 0) return null
        const beamY = -effectiveSize.y / 2 + levelIdx * step + beamHeight / 2
        const deckingY = beamY + beamHeight / 2 + deckingThickness / 2
        const deckingZ = 0
        return (
          <group key={`decking-${levelIdx}`}>
            {Array.from({ length: bays }, (_, bayIdx) => {
              const bayStartX = -effectiveSize.x / 2 + (effectiveSize.x / bays) * bayIdx
              const bayEndX = -effectiveSize.x / 2 + (effectiveSize.x / bays) * (bayIdx + 1)
              const bayCenterX = (bayStartX + bayEndX) / 2
              const bayWidth = bayEndX - bayStartX
              return (
                <mesh
                  key={`deck-${levelIdx}-${bayIdx}`}
                  position={[bayCenterX, deckingY, deckingZ]}
                  scale={[bayWidth, deckingThickness, deckingDepth]}
                >
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color={deckingColor} metalness={0.1} roughness={0.8} />
                </mesh>
              )
            })}
          </group>
        )
      })}

      {[
        { edgeX: -effectiveSize.x / 2, label: "left" },
        { edgeX: effectiveSize.x / 2, label: "right" },
      ].map((side) => {
        const panelThickness = 0.04
        const panelX = side.edgeX + (side.edgeX < 0 ? panelThickness / 2 : -panelThickness / 2)
        return (
          <mesh
            key={`panel-${side.label}`}
            position={[panelX, 0, 0]}
            scale={[panelThickness, effectiveSize.y, effectiveSize.z]}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={uprightColor} metalness={0.3} roughness={0.7} />
          </mesh>
        )
      })}
    </group>
  )
}

export function PalletRackShowcase({
  levels = 3,
  columns = 4,
  width = 4,
  height = 3,
  depth = 1.5,
  rackRotateY = 0,
  className = "w-full h-[400px]",
}: PalletRackShowcaseProps) {
  const rackRotation = (rackRotateY * Math.PI) / 180
  return (
    <div className={className} style={{ background: "transparent" }}>
      <Canvas
        shadows
        camera={{ position: [5, 1.4, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={20}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        <group rotation={[0, rackRotation, 0]}>
          <PalletRackMesh
            width={width}
            height={height}
            depth={depth}
            levels={levels}
            columns={columns}
          />
        </group>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          minDistance={3}
          maxDistance={15}
          target={[0, height / 2, 0]}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
