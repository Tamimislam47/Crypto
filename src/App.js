import "./App.css";
import Coins from "./components/Coins";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoinsDetails from "./components/CoinsDetails";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


function App() {

  useGSAP(() => {
    gsap.from(".loader",{

    })
  } ,[])
  

  return (
    <div className="App">
      <div className="loader">
        Welcome
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
