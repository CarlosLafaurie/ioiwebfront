import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Service } from "./pages/Service";
import { ScrollToTop } from "./utils/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/servicios/:slug" element={<Service />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}