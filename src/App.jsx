import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardProvider } from "./context/CardContext.jsx";

import Home from "./pages/Home.jsx";
import Learn from "./pages/Learn.jsx";
import CreateCard from "./pages/CreateCard.jsx";
import Categories from "./pages/Categories.jsx";
import Topics from "./pages/Topics.jsx";

function App() {
  return (
    <CardProvider>
      <Router>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:id" element={<Topics />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/create-card" element={<CreateCard />} />
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
