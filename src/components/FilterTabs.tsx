import React from "react";
import { type FilterType } from "../types/novel";

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const filters: FilterType[] = ["Semua", "Tamat", "On-Going"];

  return (
    <div className="flex gap-2">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              isActive
                ? "bg-[#FCF1D0] text-[#010736]"
                : "bg-[#0D1C42] border border-[#22396F] text-[#FCF1D0]/80 hover:border-[#FCF1D0]/50 hover:text-[#FCF1D0]"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabs;
