import FloatingShippingBox from "../components/Homepage2/FloatingShippingBox"

const FloatingBoxDemo = () => {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#e9eef2] p-6">
      <div className="w-full max-w-[760px]">
        <FloatingShippingBox />
      </div>
    </main>
  )
}

export default FloatingBoxDemo
