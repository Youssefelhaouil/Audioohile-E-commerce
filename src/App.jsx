import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home"
import Earphones from "./pages/Earphones"
import Headphones from "./pages/Headphones"
import Speakers from "./pages/Speakers"
import Checkout from "./pages/Checkout"
import ProductDetails from "./pages/ProductDetails"
import { ProductProvider } from "./Context/ProductContext"
import { Toaster } from "react-hot-toast"

function App() {



  return (
    <>
      <Router>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </ProductProvider>
      </Router>
      <Toaster />



    </>
  )
}

export default App
