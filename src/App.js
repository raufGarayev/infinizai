import Footer from "./components/footer/Footer";
import HomeContact from "./components/homeContact/HomeContact";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from './pages/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Team from "./pages/Team";
import Shop from "./pages/Shop";
import ProductView from "./components/productView/ProductView";
import { ProductProvider } from "./context/ProductContext";


function App() {
  return (
    <div className="container">
      <ProductProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/team" element={<Team />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/oneproduct" element={<ProductView />} />
        </Routes>
        <HomeContact />        
        <Footer />
      </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;

