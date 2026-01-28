import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/ui/Header"
import Home from "./page/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
