
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router basename="/GuessTheAnimeTheme">
      <Header />
      <Routes>
          <Route path="/" element={
          <Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
