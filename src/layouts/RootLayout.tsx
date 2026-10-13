import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#010736] text-[#FCF1D0] flex flex-col font-sans selection:bg-[#FCF1D0] selection:text-[#010736]">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content (Outlet Render Children Page) */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
