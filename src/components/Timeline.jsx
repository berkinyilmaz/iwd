import { Heart, ChevronRight } from 'lucide-react';
import { getWomenByTimeline } from '../data/women';
import { Avatar } from './Avatar';

export function Timeline({ onSelectWoman, favorites, onToggleFavorite }) {
  const women = getWomenByTimeline();

  const formatYear = (year) => {
    if (year < 0) return `${Math.abs(year)} BC`;
    return year.toString();
  };

  const getEra = (year) => {
    if (year < 0) return 'Ancient';
    if (year < 1800) return 'Pre-Modern';
    if (year < 1900) return '19th Century';
    if (year < 2000) return '20th Century';
    return 'Modern';
  };

  const groupedWomen = women.reduce((acc, woman) => {
    const era = getEra(woman.birthYear);
    if (!acc[era]) acc[era] = [];
    acc[era].push(woman);
    return acc;
  }, {});

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Timeline</h2>
        <p className="text-[var(--text-secondary)]">
          Explore women throughout history
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedWomen).map(([era, eraWomen]) => (
          <div key={era}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-[var(--border-subtle)]" />
              <span className="text-sm font-medium text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-subtle)]">
                {era}
              </span>
              <div className="h-px flex-1 bg-[var(--border-subtle)]" />
            </div>

            <div className="space-y-3">
              {eraWomen.map((woman) => (
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
                      aria-label={favorites.includes(woman.id) ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Heart
                        size={18}
                        className={favorites.includes(woman.id) ? 'fill-[var(--accent)] text-[var(--accent)]' : ''}
                      />
                    </button>
                    <ChevronRight size={18} className="text-[var(--text-tertiary)]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
