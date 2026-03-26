"use client";
import { useState } from "react";
import { Phrase } from "@/types";

interface FlashCardProps {
  phrase: Phrase;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  Greeting: "bg-amber-100 text-amber-800 border-amber-200",
  Family: "bg-rose-100 text-rose-800 border-rose-200",
  Food: "bg-orange-100 text-orange-800 border-orange-200",
  Polite: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Daily Life": "bg-sky-100 text-sky-800 border-sky-200",
  "Small Talk": "bg-violet-100 text-violet-800 border-violet-200",
};

export default function FlashCard({
  phrase,
  isFavorite,
  onToggleFavorite,
}: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group relative h-52 cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Favorite button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(phrase.id);
        }}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className={`absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 
          ${isFavorite ? "text-rose-500 bg-rose-50 shadow-sm" : "text-gray-300 hover:text-rose-400 hover:bg-rose-50"}`}
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {/* Card inner with 3D flip */}
      <div
        className="w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl border border-gray-100 bg-white shadow-md shadow-gray-100 flex flex-col justify-between p-5"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-start justify-between">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[phrase.category]}`}>
              {phrase.category}
            </span>
          </div>
          <div className="flex flex-col items-center text-center flex-1 justify-center gap-2 px-2">
            <p className="text-2xl font-bold text-gray-800 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {phrase.spanish}
            </p>
            {phrase.pronunciation && (
              <p className="text-xs text-gray-400 italic tracking-wide">{phrase.pronunciation}</p>
            )}
          </div>
          <p className="text-center text-xs text-gray-300 select-none">Tap to reveal ↓</p>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 shadow-md shadow-green-100 flex flex-col justify-between p-5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-lg">🇲🇽</span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[phrase.category]}`}>
              {phrase.category}
            </span>
          </div>
          <div className="flex flex-col gap-3 flex-1 justify-center px-1">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-1">English</p>
              <p className="text-base font-semibold text-gray-800">{phrase.english}</p>
            </div>
            <div className="h-px bg-emerald-100" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold mb-1">中文</p>
              <p className="text-base font-semibold text-gray-800">{phrase.chinese}</p>
            </div>
          </div>
          <p className="text-center text-xs text-emerald-300 select-none">Tap to flip back ↑</p>
        </div>
      </div>
    </div>
  );
}
