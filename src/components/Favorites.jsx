import { Heart, ChevronRight, HeartOff } from 'lucide-react';
import { getWomanById } from '../data/women';
import { Avatar } from './Avatar';

export function Favorites({ favoriteIds, onSelectWoman, onToggleFavorite }) {
  const favoriteWomen = favoriteIds
    .map(id => getWomanById(id))
    .filter(Boolean);

  const formatYear = (year) => {
    if (year < 0) return `${Math.abs(year)} BC`;
    return year.toString();
  };

  if (favoriteWomen.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--bg-secondary)] mb-6">
          <HeartOff size={32} className="text-[var(--text-tertiary)]" />
        </div>
        <h2 className="text-xl font-semibold mb-2">No Favorites Yet</h2>
        <p className="text-[var(--text-secondary)] max-w-sm mx-auto">
          Tap the heart icon on any inspiring woman to add them to your favorites.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Your Favorites</h2>
        <p className="text-[var(--text-secondary)]">
          {favoriteWomen.length} inspiring {favoriteWomen.length === 1 ? 'woman' : 'women'} saved
        </p>
      </div>

      <div className="space-y-3">
        {favoriteWomen.map((woman) => (
          <div
            key={woman.id}
            className="card-surface p-4 flex items-center gap-4 cursor-pointer hover:bg-[var(--bg-tertiary)] transition-colors"
            onClick={() => onSelectWoman(woman)}
          >
            <Avatar woman={woman} size="md" />

            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate">{woman.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] truncate">
                {woman.title}
              </p>
              <p className="text-xs text-[var(--text-tertiary)]">
                {formatYear(woman.birthYear)} – {formatYear(woman.deathYear)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(woman.id);
                }}
                className="btn-icon w-10 h-10"
                aria-label="Remove from favorites"
              >
                <Heart size={18} className="fill-[var(--accent)] text-[var(--accent)]" />
              </button>
              <ChevronRight size={18} className="text-[var(--text-tertiary)]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
