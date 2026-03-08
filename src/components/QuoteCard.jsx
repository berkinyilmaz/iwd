import { forwardRef } from 'react';
import { Quote } from 'lucide-react';

export const QuoteCard = forwardRef(function QuoteCard({ woman, variant = 'display' }, ref) {
  const isExport = variant === 'export';

  const formatYear = (year) => {
    if (year === null) return 'Present';
    if (year < 0) return `${Math.abs(year)} BC`;
    return year.toString();
  };

  return (
    <div
      ref={ref}
      className={`
        relative overflow-hidden
        ${isExport ? 'w-[1080px] h-[1080px] p-16' : 'w-full aspect-square p-6'}
      `}
      style={{
        background: 'linear-gradient(145deg, #0f0f11 0%, #1a1a1f 50%, #0f0f11 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, sans-serif'
      }}
    >
      {/* Decorative gradient orbs */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 opacity-30 blur-3xl"
        style={{ background: `radial-gradient(circle, ${woman.color}66 0%, transparent 70%)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between z-10">
        {/* Top: Quote icon + Watermark */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <Quote
              size={isExport ? 64 : 28}
              className="opacity-60"
              style={{ color: woman.color }}
            />
            <p
              className={isExport ? 'text-lg' : 'text-[10px]'}
              style={{ color: '#52525b' }}
            >
              Women Who Shaped History
            </p>
          </div>
          <p
            className={`
              font-medium leading-relaxed text-white
              ${isExport ? 'text-5xl' : 'text-base'}
            `}
            style={{ lineHeight: 1.5 }}
          >
            "{woman.quote}"
          </p>
        </div>

        {/* Bottom: Attribution */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className={`
              rounded-xl flex items-center justify-center font-semibold text-white flex-shrink-0
              ${isExport ? 'w-20 h-20 text-2xl rounded-2xl' : 'w-10 h-10 text-xs'}
            `}
            style={{
              background: `linear-gradient(135deg, ${woman.color} 0%, ${woman.color}99 100%)`,
              boxShadow: `0 4px 20px ${woman.color}40`
            }}
          >
            {woman.initials}
          </div>

          {/* Name and info */}
          <div className="flex-1 min-w-0">
            <p
              className={`
                font-semibold text-white truncate leading-tight
                ${isExport ? 'text-2xl' : 'text-sm'}
              `}
            >
              {woman.name}
            </p>
            <p
              className={`truncate leading-tight ${isExport ? 'text-lg' : 'text-[11px]'}`}
              style={{ color: woman.color }}
            >
              {woman.title}
            </p>
            <p
              className={`leading-tight ${isExport ? 'text-base' : 'text-[10px]'}`}
              style={{ color: '#71717a' }}
            >
              {formatYear(woman.birthYear)} – {formatYear(woman.deathYear)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
