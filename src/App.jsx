import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home"
import Earphones from "./pages/Earphones"
import Headphones from "./pages/Headphones"
import Speakers from "./pages/Speakers"
import Checkout from "./pages/Checkout"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers /> } />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>


    </>
  )
}

export default App
