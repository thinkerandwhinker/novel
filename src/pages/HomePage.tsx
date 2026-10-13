import React, { useState } from "react";

import { useNovels } from "../hooks/useNovels";
import NovelCard from "../components/NovelCard";
import { type FilterType } from "../types/novel";
import FilterTabs from "../components/FilterTabs";

const HomePage: React.FC = () => {
  const { novels, loading } = useNovels();
  const [filter, setFilter] = useState<FilterType>("Semua");

  const filteredNovels = novels.filter((novel) => {
    if (filter === "Semua") return true;
    return novel.status === filter;
  });

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#FCF1D0]">
          Karya Novel Saya
        </h1>
        <p className="text-[#FCF1D0]/70 text-sm md:text-base">
          Selamat datang di jurnal cerita pribadi saya. Pilih novel di bawah
          untuk mulai membaca.
        </p>
      </section>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between border-b border-[#22396F] pb-4">
        <FilterTabs activeFilter={filter} onFilterChange={setFilter} />
        <span className="text-xs text-[#FCF1D0]/50">
          {loading ? "..." : `${filteredNovels.length} Novel`}
        </span>
      </div>

      {loading ? (
        <div className="text-center py-12 bg-[#0D1C42] rounded-2xl border border-[#22396F]">
          <p className="text-[#FCF1D0]/60">Memuat daftar novel...</p>
        </div>
      ) : filteredNovels.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNovels.map((novel) => (
            <NovelCard key={novel.id} novel={novel} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-[#0D1C42] rounded-2xl border border-[#22396F]">
          <p className="text-[#FCF1D0]/60">
            Belum ada novel untuk kategori ini.
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
