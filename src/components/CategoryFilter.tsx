"use client";
import { categories, CategoryFilter } from "@/data/phrases";

interface Props {
  selected: CategoryFilter;
  onChange: (cat: CategoryFilter) => void;
  showFavoritesOnly: boolean;
  onToggleFavorites: () => void;
}

const categoryEmoji: Record<string, string> = {
  All: "📚",
  Greeting: "👋",
  Family: "👨‍👩‍👧",
  Food: "🍽️",
  Polite: "🤝",
  "Daily Life": "☀️",
  "Small Talk": "💬",
};

export default function CategoryFilter({
  selected,
  onChange,
  showFavoritesOnly,
  onToggleFavorites,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
            ${selected === cat && !showFavoritesOnly
              ? "bg-gray-800 text-white border-gray-800 shadow-sm"
              : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-800"
            }`}
        >
          <span>{categoryEmoji[cat]}</span>
          {cat}
        </button>
      ))}
      <button
        onClick={onToggleFavorites}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
          ${showFavoritesOnly
            ? "bg-rose-500 text-white border-rose-500 shadow-sm"
            : "bg-white text-gray-600 border-gray-200 hover:border-rose-300 hover:text-rose-500"
          }`}
      >
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill={showFavoritesOnly ? "white" : "none"} stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Favorites
      </button>
    </div>
  );
}
