import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Shop from "./Components/Shop/Shop";
function App() {
  return (
    <div>
      <NavBar />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
