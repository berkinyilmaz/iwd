import { Share2, Calendar, MapPin, Award } from 'lucide-react';
import { Avatar } from './Avatar';

export function WomanCard({ woman, onShare }) {
  const formatYear = (year) => {
    if (year === null) return 'Present';
    if (year < 0) return `${Math.abs(year)} BC`;
    return year.toString();
  };

  return (
    <div className="card-surface p-6 md:p-8 w-full">
      {/* Header with avatar and basic info */}
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <Avatar woman={woman} size="xl" />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-1">{woman.name}</h2>
          <p className="text-[var(--accent)] font-medium mb-3">{woman.title}</p>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start text-sm text-[var(--text-secondary)]">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {formatYear(woman.birthYear)} – {formatYear(woman.deathYear)}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} />
              {woman.nationality}
            </span>
            <span className="flex items-center gap-1.5">
              <Award size={14} />
              {woman.field}
            </span>
          </div>
        </div>
      </div>

      {/* Biography */}
      <div className="mb-6">
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {woman.biography}
        </p>
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-[var(--text-tertiary)] uppercase tracking-wide mb-3">
          Key Achievements
        </h3>
        <ul className="space-y-2">
          {woman.achievements.map((achievement, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-[var(--text-secondary)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-center sm:justify-start">
        <button
          onClick={() => onShare(woman)}
          className="btn-icon"
          aria-label="Share"
        >
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
}
