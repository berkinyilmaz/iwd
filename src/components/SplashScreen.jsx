import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export function SplashScreen({ onExplore }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleExplore = () => {
    setIsExiting(true);
    setTimeout(() => {
      onExplore();
    }, 500);
  };

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-6 overflow-hidden
        transition-opacity duration-500 ease-out
        ${isExiting ? 'opacity-0' : 'opacity-100'}
      `}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(232, 121, 169, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            var(--bg-primary)
          `
        }}
      />

      {/* Content */}
      <div
        className={`
          relative z-10 max-w-2xl text-center
          transition-all duration-500 ease-out
          ${isExiting ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}
        `}
      >
        {/* IWD Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] text-sm font-medium mb-8">
          <Sparkles size={16} />
          International Women's Day
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Women Who Shaped History
        </h1>

        {/* Featured Quote - More Prominent */}
        <div className="relative mb-10">
          <div
            className="absolute -top-4 -left-2 text-6xl font-serif opacity-20"
            style={{ color: 'var(--accent)' }}
          >
            "
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed px-6"
            style={{
              background: 'linear-gradient(90deg, var(--text-primary), var(--accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Throughout history, Turkish women have defended their homeland with courage and shaped their society and state with wisdom and determination.
          </p>
          <div
            className="absolute -bottom-4 -right-2 text-6xl font-serif opacity-20"
            style={{ color: 'var(--accent)' }}
          >
            "
          </div>
        </div>

        {/* Celebration Card */}
        <div className="glass rounded-2xl p-6 mb-10 text-left">
          <p className="text-[var(--accent)] font-semibold text-lg mb-2">
            Happy International Women's Day
          </p>
          <p className="text-[var(--text-secondary)]">
            Celebrating all women who inspire, lead, and transform our world. Discover the stories of remarkable women who changed history.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleExplore}
          className="btn-primary text-lg px-10 py-4"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}
