import { useContext } from "react";
import Footer from "./components/footer/Footer";
import HomeContact from "./components/homeContact/HomeContact";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from './pages/About'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Team from "./pages/Team";
import Shop from "./pages/Shop";
import ProductView from "./components/productView/ProductView";

import ProductContext from "./context/ProductContext";
import Basket from "./components/basket/Basket";


function App() {

  const {pName} = useContext(ProductContext)
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
          </Routes>
          <HomeContact />        
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;

