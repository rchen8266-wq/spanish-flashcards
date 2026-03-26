export default function Hero() {
  return (
    <header className="text-center py-12 px-4">
      <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
        <span>🇲🇽</span> Mexican Spanish
      </div>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Habla como
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-red-500">
          chilango
        </span>
      </h1>
      <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
        Learn everyday Mexican Spanish phrases with English &amp; Chinese translations.
        Tap a card to reveal the meaning.
      </p>
    </header>
  );
}
