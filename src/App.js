import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation/Navigation";
import Home from "./components/HomePage/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="homepage">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
