import Header from "./components/home/header/Header";
import Sponsors from "./components/home/sponsors/Sponsors";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Sponsors />
    </div>
  );
}

export default App;
