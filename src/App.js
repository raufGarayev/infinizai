import {useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import HomeContact from "./components/homeContact/HomeContact";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from './pages/About'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Team from "./pages/Team";
import Shop from "./pages/Shop";
import ProductView from "./components/productView/ProductView";
import {FaAngleUp} from 'react-icons/fa'
import Basket from "./components/basket/Basket";
import Contact from "./pages/Contact";


function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };
  return (
    <div className="container">
        <BrowserRouter>
          <Basket />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/team" element={<Team />} />
            <Route path="/shop" element={<Shop />} />
            <Route path={"/shop/:pName"} element={<ProductView />} />
            <Route path="/infinizai" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <HomeContact />        
          <Footer />
        </BrowserRouter>
        <div className="scroll-top">
        {" "}
            {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop}/>
        )}{" "}
      </div>
    </div>
  );
}

export default App;

