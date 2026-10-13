import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <div className="bg-[#0D1C42] border border-[#22396F] rounded-3xl p-8 md:p-12 max-w-md w-full shadow-xl space-y-6">
        <div className="space-y-2">
          <span className="text-6xl font-extrabold text-[#FCF1D0] tracking-wider block">
            404
          </span>
          <h1 className="text-xl font-bold text-[#FCF1D0]">
            Halaman Tidak Ditemukan
          </h1>
        </div>

        <p className="text-sm text-[#FCF1D0]/70 leading-relaxed">
          Maaf, halaman atau bab novel yang Anda cari tidak ada atau telah
          dipindahkan.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center w-full py-3 px-6 bg-[#FCF1D0] text-[#010736] font-semibold text-sm rounded-xl hover:bg-white transition-colors"
        >
          Kembali ke Daftar Novel
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
