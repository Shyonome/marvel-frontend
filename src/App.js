//! Dependant Plugin Utility
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//! Dependant Visual Architecture
import "./App.css";

//! Dependant Container Composants
import Header from "./container/Header";
import Footer from "./container/Footer";

//! Dependant Content Composants
import Home from "./container/content/Home";
import Comics from "./container/content/Comics";
import Characters from "./container/content/Characters";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics/:characterId" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
