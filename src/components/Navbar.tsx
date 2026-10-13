import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const getLinkStyle = ({ isActive }: { isActive: boolean }): string =>
    `text-sm font-medium transition-all ${
      isActive
        ? "text-[#FCF1D0] border-b-2 border-[#FCF1D0] pb-1 font-semibold"
        : "text-[#FCF1D0]/70 hover:text-[#FCF1D0]"
    }`;

  return (
    <header className="bg-[#0D1C42] border-b border-[#22396F] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-[#FCF1D0] flex items-center gap-2"
        >
          <span>Novel</span>
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink to="/" className={getLinkStyle}>
            Daftar Novel
          </NavLink>
          <NavLink to="/about" className={getLinkStyle}>
            Tentang Penulis
          </NavLink>
          <NavLink to="/disclaimer" className={getLinkStyle}>
            Disclaimer
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
