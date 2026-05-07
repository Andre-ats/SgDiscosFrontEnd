import { Route, Routes } from "react-router-dom"
import { EmBrevePage } from "./Pages/EmBrevePage/EmBrevePage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<EmBrevePage />} />
    </Routes>
  )
}

export default App
