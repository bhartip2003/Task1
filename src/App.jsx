import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Company from "./pages/Company";
import Product from "./pages/Product";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/company/:ticker" element={<Company/>} />
      <Route path="/product" element={<Product/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
