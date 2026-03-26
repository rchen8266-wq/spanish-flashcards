export default function Hero() {
  return (
    <header className="text-center py-12 px-4">
      <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
        <span>📖</span> Spanish Learning
      </div>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Learn Spanish
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-500">
          Every Day
        </span>
      </h1>
      <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
        Learn everyday Spanish phrases with English &amp; Chinese translations.
        Tap a card to reveal the meaning.
      </p>
    </header>
  );
}
