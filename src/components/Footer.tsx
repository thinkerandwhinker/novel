import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1C42] border-t border-[#22396F] py-6 text-center text-xs text-[#FCF1D0]/60">
      <div className="max-w-6xl mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Novel. Ditulis & Dikembangkan Untuk
          Kebutuhan Pribadi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
