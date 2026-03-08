import { useState, useEffect } from 'react';

const STORAGE_KEY = 'womenHistory_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (womanId) => {
    setFavorites(prev => {
      if (prev.includes(womanId)) return prev;
      return [...prev, womanId];
    });
  };

  const removeFavorite = (womanId) => {
    setFavorites(prev => prev.filter(id => id !== womanId));
  };

  const toggleFavorite = (womanId) => {
    if (favorites.includes(womanId)) {
      removeFavorite(womanId);
    } else {
      addFavorite(womanId);
    }
  };

  const isFavorite = (womanId) => favorites.includes(womanId);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite
  };
}
