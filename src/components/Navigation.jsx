import { Sparkles, Clock, Heart, Shuffle } from 'lucide-react';

export function Navigation({ activeView, onViewChange, onRandomWoman }) {
  const navItems = [
    { id: 'today', label: 'Today', icon: Sparkles },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'favorites', label: 'Favorites', icon: Heart },
  ];

  return (
    <nav className="glass fixed bottom-0 left-0 right-0 z-40">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-around">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onViewChange(id)}
            className={`
              flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all
              ${activeView === id
                ? 'text-[var(--accent)]'
                : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
              }
            `}
            aria-label={label}
            aria-current={activeView === id ? 'page' : undefined}
          >
            <Icon size={22} />
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}

        {/* Random button */}
        <button
          onClick={onRandomWoman}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-all"
          aria-label="Random woman"
        >
          <Shuffle size={22} />
          <span className="text-xs font-medium">Random</span>
        </button>
      </div>
    </nav>
  );
}
