import Footer from "./components/footer/Footer";
import Header from "./components/home/header/Header";
import Sponsors from "./components/home/sponsors/Sponsors";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";



function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

