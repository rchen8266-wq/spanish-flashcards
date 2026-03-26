interface StatsBarProps {
  total: number;
  shown: number;
  favoriteCount: number;
}

export default function StatsBar({ total, shown, favoriteCount }: StatsBarProps) {
  return (
    <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
      <span>
        <span className="font-semibold text-gray-700">{shown}</span> of {total} phrases
      </span>
      <span className="w-px h-4 bg-gray-200" />
      <span>
        <span className="font-semibold text-rose-500">{favoriteCount}</span> saved
      </span>
    </div>
  );
}
