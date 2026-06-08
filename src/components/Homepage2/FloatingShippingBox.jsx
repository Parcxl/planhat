import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment } from "@react-three/drei"
import * as THREE from "three"

const cardboardColor = "#bd9a68"
const cardboardDark = "#967146"
const cardboardLight = "#c9aa78"
const tapeColor = "#c69b4d"
const inkColor = "#1f1b17"

const createCardboardTexture = () => {
  const canvas = document.createElement("canvas")
  canvas.width = 512
  canvas.height = 512
  const ctx = canvas.getContext("2d")

  const base = ctx.createLinearGradient(0, 0, 512, 512)
  base.addColorStop(0, "#d0b37f")
  base.addColorStop(0.48, cardboardColor)
  base.addColorStop(1, "#a98252")
  ctx.fillStyle = base
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < 7600; i += 1) {
    const shade = 104 + Math.random() * 74
    ctx.fillStyle = `rgba(${shade}, ${Math.max(76, shade - 20)}, ${Math.max(46, shade - 50)}, ${0.05 + Math.random() * 0.09})`
    ctx.fillRect(Math.random() * 512, Math.random() * 512, 0.7 + Math.random() * 1.6, 0.7 + Math.random() * 1.6)
  }

  ctx.strokeStyle = "rgba(96, 73, 43, 0.075)"
  ctx.lineWidth = 0.55
  for (let y = 8; y < 512; y += 10) {
    ctx.beginPath()
    ctx.moveTo(0, y + Math.random() * 2.5)
    ctx.lineTo(512, y + Math.random() * 2.5)
    ctx.stroke()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1.4, 1.1)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

const createLabelTexture = () => {
  const canvas = document.createElement("canvas")
  canvas.width = 360
  canvas.height = 218
  const ctx = canvas.getContext("2d")

  ctx.fillStyle = "#fbfbf7"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = "rgba(31, 27, 23, 0.18)"
  ctx.lineWidth = 4
  ctx.strokeRect(10, 10, 340, 198)

  ctx.strokeStyle = "rgba(31, 27, 23, 0.14)"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(18, 82)
  ctx.lineTo(342, 82)
  ctx.moveTo(214, 18)
  ctx.lineTo(214, 200)
  ctx.stroke()

  ctx.fillStyle = inkColor
  ctx.fillRect(28, 28, 70, 10)
  ctx.fillRect(28, 50, 128, 7)
  ctx.fillRect(28, 66, 96, 7)
  ctx.fillRect(28, 104, 136, 9)
  ctx.fillRect(28, 124, 112, 7)
  ctx.fillRect(28, 140, 148, 7)

  for (let i = 0; i < 31; i += 1) {
    const x = 232 + i * 3.2
    const h = 52 + ((i * 17) % 42)
    ctx.fillRect(x, 36, i % 4 === 0 ? 3 : 1.5, h)
  }

  ctx.fillRect(238, 136, 74, 9)
  ctx.fillRect(238, 154, 92, 7)
  ctx.fillRect(238, 170, 62, 7)

  for (let y = 0; y < 7; y += 1) {
    for (let x = 0; x < 7; x += 1) {
      if ((x + y * 2) % 3 !== 1) {
        ctx.fillRect(166 + x * 6, 98 + y * 6, 5, 5)
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

const createTapeTexture = () => {
  const canvas = document.createElement("canvas")
  canvas.width = 256
  canvas.height = 512
  const ctx = canvas.getContext("2d")

  ctx.fillStyle = "rgba(196, 151, 72, 0.74)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let y = 0; y < 512; y += 18) {
    ctx.fillStyle = "rgba(255, 235, 177, 0.22)"
    ctx.fillRect(0, y + Math.random() * 3, 256, 2)
  }

  for (let i = 0; i < 1600; i += 1) {
    ctx.fillStyle = `rgba(116, 82, 35, ${0.025 + Math.random() * 0.055})`
    ctx.fillRect(Math.random() * 256, Math.random() * 512, 1 + Math.random() * 2, 1)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 1.8)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

const createIconTexture = () => {
  const canvas = document.createElement("canvas")
  canvas.width = 320
  canvas.height = 90
  const ctx = canvas.getContext("2d")

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = inkColor
  ctx.fillStyle = inkColor
  ctx.lineWidth = 4
  ctx.lineCap = "round"
  ctx.lineJoin = "round"

  const box = (x) => ctx.strokeRect(x, 12, 56, 62)

  box(10)
  ctx.beginPath()
  ctx.moveTo(28, 60)
  ctx.lineTo(28, 33)
  ctx.moveTo(28, 33)
  ctx.lineTo(20, 43)
  ctx.moveTo(28, 33)
  ctx.lineTo(36, 43)
  ctx.moveTo(48, 60)
  ctx.lineTo(48, 33)
  ctx.moveTo(48, 33)
  ctx.lineTo(40, 43)
  ctx.moveTo(48, 33)
  ctx.lineTo(56, 43)
  ctx.stroke()

  box(84)
  ctx.beginPath()
  ctx.moveTo(104, 24)
  ctx.lineTo(104, 50)
  ctx.moveTo(126, 24)
  ctx.lineTo(126, 50)
  ctx.stroke()
  ctx.fillRect(98, 50, 34, 7)
  ctx.fillRect(112, 57, 6, 13)

  box(158)
  ctx.beginPath()
  ctx.moveTo(185, 28)
  ctx.bezierCurveTo(176, 30, 170, 39, 171, 51)
  ctx.lineTo(202, 51)
  ctx.bezierCurveTo(202, 38, 195, 29, 185, 28)
  ctx.moveTo(186, 51)
  ctx.lineTo(186, 68)
  ctx.stroke()
  ctx.fill()

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function BoxFace({ position, rotation, scale, material, children }) {
  return (
    <mesh position={position} rotation={rotation} scale={scale} receiveShadow castShadow>
      <boxGeometry args={[1, 1, 1]} />
      {material}
      {children}
    </mesh>
  )
}

function CardboardBody({ material }) {
  return (
    <mesh receiveShadow castShadow>
      <boxGeometry args={[3.2, 1.55, 2.05]} />
      {material}
    </mesh>
  )
}

function TapeStrip({ position, rotation, scale, texture }) {
  return (
    <mesh position={position} rotation={rotation} scale={scale} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} color="#ffffff" roughness={0.38} metalness={0} transparent opacity={0.64} />
    </mesh>
  )
}

function ShippingBox() {
  const groupRef = useRef(null)
  const cardboardTexture = useMemo(() => createCardboardTexture(), [])
  const labelTexture = useMemo(() => createLabelTexture(), [])
  const iconTexture = useMemo(() => createIconTexture(), [])
  const tapeTexture = useMemo(() => createTapeTexture(), [])

  const cardboardMaterial = useMemo(
    () => (
      <meshStandardMaterial
        map={cardboardTexture}
        bumpMap={cardboardTexture}
        bumpScale={0.028}
        color="#e0bf86"
        roughness={0.88}
        metalness={0}
      />
    ),
    [cardboardTexture]
  )

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.position.y = Math.sin(t * 0.9) * 0.16
    groupRef.current.rotation.y = 0.28 + Math.sin(t * 0.35) * 0.045
    groupRef.current.rotation.x = -0.12 + Math.sin(t * 0.45) * 0.025
  })

  return (
    <group ref={groupRef} position={[0, 0.04, 0]} rotation={[-0.12, 0.28, 0.02]} scale={0.86}>
      <CardboardBody material={cardboardMaterial} />

      <BoxFace
        position={[-0.82, 0.81, 0]}
        rotation={[0, 0, 0]}
        scale={[1.58, 0.075, 2.08]}
        material={<meshStandardMaterial map={cardboardTexture} bumpMap={cardboardTexture} bumpScale={0.02} color="#e5c58d" roughness={0.9} />}
      />
      <BoxFace
        position={[0.82, 0.815, 0]}
        rotation={[0, 0, 0]}
        scale={[1.58, 0.075, 2.08]}
        material={<meshStandardMaterial map={cardboardTexture} bumpMap={cardboardTexture} bumpScale={0.02} color="#d8b77e" roughness={0.9} />}
      />
      <TapeStrip position={[0, 0.87, -0.02]} rotation={[0, 0, 0]} scale={[0.34, 0.055, 2.24]} texture={tapeTexture} />

      <mesh position={[1.602, 0.03, 0]} rotation={[0, Math.PI / 2, 0]} scale={[2.02, 1.46, 1]} castShadow>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#7a5835" transparent opacity={0.13} />
      </mesh>
      <mesh position={[0, -0.774, 1.032]} rotation={[0, 0, 0]} scale={[3.1, 0.035, 1]} castShadow>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#65482b" transparent opacity={0.18} />
      </mesh>
      <mesh position={[0, 0.79, 1.034]} rotation={[0, 0, 0]} scale={[3.12, 0.025, 1]} castShadow>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#62472b" transparent opacity={0.22} />
      </mesh>

      <mesh position={[0, 0.905, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.018, 2.1, 1]} castShadow>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#4d3923" transparent opacity={0.38} />
      </mesh>
      <mesh position={[-0.82, 0.902, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.012, 1.78, 1]} castShadow>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#6d4e2e" transparent opacity={0.2} />
      </mesh>
      <mesh position={[0.82, 0.902, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.012, 1.78, 1]} castShadow>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#6d4e2e" transparent opacity={0.2} />
      </mesh>

      <TapeStrip position={[1.1, -0.12, 1.04]} rotation={[0, 0, 0]} scale={[0.46, 0.36, 0.035]} texture={tapeTexture} />
      <TapeStrip position={[-1.58, 0.34, 0.7]} rotation={[0, Math.PI / 2, 0]} scale={[0.42, 0.34, 0.035]} texture={tapeTexture} />

      <mesh position={[0.82, 0.1, 1.036]} rotation={[0, 0, 0]} scale={[0.96, 0.58, 1]} castShadow>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial map={labelTexture} roughness={0.48} metalness={0} />
      </mesh>

      <mesh position={[-0.82, -0.08, 1.04]} rotation={[0, 0, 0]} scale={[1.24, 0.35, 1]} castShadow>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={iconTexture} transparent />
      </mesh>

      <mesh position={[-1.62, -0.1, 0.52]} rotation={[0, Math.PI / 2, 0]} scale={[0.84, 0.24, 1]} castShadow>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={iconTexture} transparent />
      </mesh>

      <lineSegments position={[0, 0, 0]} scale={[3.205, 1.555, 2.055]}>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1), 1]} />
        <lineBasicMaterial color="#5f472b" transparent opacity={0.18} />
      </lineSegments>
    </group>
  )
}

const FloatingShippingBox = () => {
  return (
    <div className="relative aspect-[1.12/1] w-full overflow-hidden bg-[#e8edf1]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_34%,rgba(255,255,255,0.72),rgba(232,237,241,0.38)_42%,rgba(207,216,224,0.62)_100%)]" />
      <Canvas
        shadows
        camera={{ position: [4.9, 2.25, 4.9], fov: 37 }}
        gl={{ antialias: true, alpha: true }}
        className="relative z-10"
      >
        <ambientLight intensity={0.62} />
        <directionalLight
          position={[-3, 7, 6]}
          intensity={1.32}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        <directionalLight position={[5, 3, -2]} intensity={0.52} color="#fff7e4" />
        <ShippingBox />
        <ContactShadows
          position={[0, -1.02, 0]}
          opacity={0.42}
          scale={7.2}
          blur={2.6}
          far={3}
          color="#5f6670"
        />
        <Environment preset="warehouse" />
      </Canvas>
    </div>
  )
}

export default FloatingShippingBox
