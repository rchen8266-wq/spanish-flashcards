"use client";
import { useState, useMemo } from "react";
import { phrases, CategoryFilter } from "@/data/phrases";
import { useFavorites } from "@/hooks/useFavorites";
import FlashCard from "@/components/FlashCard";
import CategoryFilterBar from "@/components/CategoryFilter";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites, toggle } = useFavorites();

  const filtered = useMemo(() => {
    return phrases.filter((p) => {
      const categoryMatch = selectedCategory === "All" || p.category === selectedCategory;
      const favMatch = !showFavoritesOnly || favorites.has(p.id);
      return categoryMatch && favMatch;
    });
  }, [selectedCategory, showFavoritesOnly, favorites]);

  const handleCategoryChange = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setShowFavoritesOnly(false);
  };

  const handleToggleFavorites = () => {
    setShowFavoritesOnly((v) => !v);
    if (!showFavoritesOnly) setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Decorative top bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-green-600 via-white to-red-600" />

      <div className="max-w-5xl mx-auto px-4 pb-20">
        <Hero />

        {/* Filters */}
        <section className="mb-8 space-y-4">
          <CategoryFilterBar
            selected={selectedCategory}
            onChange={handleCategoryChange}
            showFavoritesOnly={showFavoritesOnly}
            onToggleFavorites={handleToggleFavorites}
          />
          <StatsBar
            total={phrases.length}
            shown={filtered.length}
            favoriteCount={favorites.size}
          />
        </section>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-400 gap-3">
            <span className="text-5xl">🌵</span>
            <p className="text-lg font-medium">No phrases found</p>
            <p className="text-sm">
              {showFavoritesOnly
                ? "Start adding favorites by tapping the ♡ on cards"
                : "Try a different category"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((phrase) => (
              <FlashCard
                key={phrase.id}
                phrase={phrase}
                isFavorite={favorites.has(phrase.id)}
                onToggleFavorite={toggle}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-300 pb-8">
        Built with 🌮 &amp; Next.js · Mexican Spanish Flashcards
      </footer>
    </main>
  );
}
