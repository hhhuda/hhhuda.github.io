import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectFraudFree from "./pages/ProjectFraudFree";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-body text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fraudfree" element={<ProjectFraudFree />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
