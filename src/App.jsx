import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Company from "./pages/Company";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/company" element={<Company/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
