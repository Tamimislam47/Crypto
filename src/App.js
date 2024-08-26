import "./App.css";
import Coins from "./components/Coins";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinsDetails from "./components/CoinsDetails";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from(".loader span", {
      x: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 1.3,
    });
    t1.to(".loader span", {
      x: -80,
      opacity: 0,
      stagger: 0.3,
      duration: 1.3,
    });
    t1.to(".loader", {
      display: "none",
      duration: 0.5,
    });
  }, []);

  return (
    <div className="App">
      <div className="loader">
        <span>Welcome</span>
        <span>to</span>
        <span>CryptoVerse</span>
      </div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="/coins" element={<Coins />} />
          <Route path="/coins/:id" element={<CoinsDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
