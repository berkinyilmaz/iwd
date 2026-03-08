import { useState, useCallback } from 'react';
import { WomanCard } from './components/WomanCard';
import { QuoteCard } from './components/QuoteCard';
import { InstagramCardModal } from './components/InstagramCardModal';
import { SplashScreen } from './components/SplashScreen';
import { getWomanOfTheDay, getRandomWoman } from './data/women';
import { Instagram, Shuffle } from 'lucide-react';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentWoman, setCurrentWoman] = useState(() => getWomanOfTheDay());
  const [showInstagramModal, setShowInstagramModal] = useState(false);

  const handleExplore = useCallback(() => {
    setShowSplash(false);
  }, []);

  const handleRandomWoman = useCallback(() => {
    const woman = getRandomWoman();
    setCurrentWoman(woman);
  }, []);

  const handleShare = useCallback(() => {
    setShowInstagramModal(true);
  }, []);

  if (showSplash) {
    return <SplashScreen onExplore={handleExplore} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content - Centered */}
      <main className="flex-1 px-4 md:px-8 flex flex-col items-center justify-center py-8">
        {/* Woman of the Day Label */}
        <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-tertiary)] mb-6">
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          Woman of the Day
        </div>

        {/* Main Layout: Woman Card (left) + Quote Card (right) - Centered */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center max-w-5xl">
          {/* Left: Woman Card */}
          <div className="order-1">
            <WomanCard
              woman={currentWoman}
              onShare={handleShare}
            />
          </div>

          {/* Right: Quote Card */}
          <div className="order-2 flex flex-col items-center">
            <div className="rounded-2xl overflow-hidden border border-[var(--border-subtle)] w-80">
              <QuoteCard woman={currentWoman} variant="display" />
            </div>
            <button
              onClick={() => setShowInstagramModal(true)}
              className="btn-primary mt-4 flex items-center gap-2"
            >
              <Instagram size={16} />
              Generate for Instagram
            </button>
          </div>
        </div>
      </main>

      {/* Fixed Random Button */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={handleRandomWoman}
          className="shimmer-button"
          aria-label="Discover random woman"
        >
          <Shuffle size={24} />
        </button>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center bg-gradient-to-t from-[var(--bg-primary)] to-transparent">
        <a
          href="https://instagram.com/berkindev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
        >
          Coded by <span className="font-medium">berkindev</span>
        </a>
      </footer>

      {showInstagramModal && (
        <InstagramCardModal
          woman={currentWoman}
          onClose={() => setShowInstagramModal(false)}
        />
      )}
    </div>
  );
}

export default App;
