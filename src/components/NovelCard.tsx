import React from "react";
import { Link } from "react-router-dom";
import { type Novel } from "../types/novel";

interface NovelCardProps {
  novel: Novel;
}

const NovelCard: React.FC<NovelCardProps> = ({ novel }) => {
  const {
    id,
    title,
    genre,
    theme,
    status,
    startYear,
    endYear,
    synopsis,
    coverUrl,
  } = novel;

  const yearDisplay = endYear
    ? `${startYear} - ${endYear}`
    : `${startYear} - Sekarang`;

  return (
    <div className="bg-[#0D1C42] border border-[#22396F] rounded-2xl overflow-hidden hover:border-[#FCF1D0]/50 transition-all duration-300 flex flex-col group shadow-lg">
      {/* Cover / Placeholder */}
      <div className="h-56 bg-[#22396F]/40 relative overflow-hidden flex items-center justify-center">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-center">
            <span className="text-4xl opacity-30">📚</span>
            <p className="text-xs text-[#FCF1D0]/40 mt-1">Tanpa Sampul</p>
          </div>
        )}

        {/* Status Badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${
            status === "Tamat"
              ? "bg-[#FCF1D0] text-[#010736] border-[#FCF1D0]"
              : "bg-[#0D1C42]/90 text-[#FCF1D0] border-[#22396F]"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Detail Konten */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-[#FCF1D0]/60 mb-1">
            <span className="uppercase font-medium">{genre}</span>
            <span>{yearDisplay}</span>
          </div>

          <h3 className="text-lg font-bold text-[#FCF1D0] line-clamp-1">
            {title}
          </h3>
          <p className="text-xs text-[#FCF1D0]/50 mt-0.5 italic">
            Tema: {theme}
          </p>

          <p className="text-sm text-[#FCF1D0]/70 mt-3 line-clamp-3 leading-relaxed">
            {synopsis}
          </p>
        </div>

        <Link
          to={`/novel/${id}`}
          className="mt-6 inline-flex items-center justify-center w-full py-2.5 bg-[#FCF1D0] text-[#010736] font-semibold text-sm rounded-xl hover:bg-white transition-colors"
        >
          Baca Cerita
        </Link>
      </div>
    </div>
  );
};

export default NovelCard;
