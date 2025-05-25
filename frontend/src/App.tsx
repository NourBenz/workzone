// Project Entry (src/App.tsx)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/layout/Layout"
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Services from './pages/services/Index';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/*" element={<Services />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
