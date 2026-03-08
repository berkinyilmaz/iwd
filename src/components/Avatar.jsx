export function Avatar({ woman, size = 'md' }) {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-lg',
    lg: 'w-20 h-20 text-2xl',
    xl: 'w-28 h-28 text-3xl',
    '2xl': 'w-32 h-32 text-4xl'
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl flex items-center justify-center font-semibold text-white`}
      style={{
        background: `linear-gradient(135deg, ${woman.color} 0%, ${woman.color}99 100%)`,
        boxShadow: `0 4px 20px ${woman.color}40`
      }}
    >
      {woman.initials}
    </div>
  );
}
