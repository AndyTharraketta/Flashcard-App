import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardProvider } from "./context/CardContext.jsx";

import Home from "./pages/Home.jsx";
import Learn from "./pages/Learn.jsx";

function App() {
  return (
    <CardProvider>
      <Router>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
