export function Header() {
  return (
    <header className="pt-8 pb-4 px-4 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] text-xs font-medium mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
        International Women's Day
      </div>
      <h1 className="text-3xl font-bold mb-2">
        Women Who Shaped History
      </h1>
      <p className="text-[var(--text-secondary)] max-w-md mx-auto">
        Discover inspiring women who changed science, society, and the world.
      </p>
    </header>
  );
}
