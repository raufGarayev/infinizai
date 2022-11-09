import Footer from "./components/footer/Footer";
import HomeContact from "./components/homeContact/HomeContact";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from './pages/About'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/> 
        </Routes>
        <HomeContact />        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

