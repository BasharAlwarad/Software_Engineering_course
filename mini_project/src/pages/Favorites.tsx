import { useState, useEffect } from 'react';
import type { Artwork } from '../types/artwork';
import ArtworkCard from '../components/ArtworkCard';

const Favorites = () => {
  // Load saved artworks from localStorage using lazy initializer
  const [savedArtworks, setSavedArtworks] = useState<Artwork[]>(() => {
    const saved = localStorage.getItem('artworks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        console.error('Error loading saved artworks from localStorage');
        return [];
      }
    }
    return [];
  });

  // Update localStorage whenever savedArtworks changes
  useEffect(() => {
    localStorage.setItem('artworks', JSON.stringify(savedArtworks));
  }, [savedArtworks]);

  // Delete artwork from favorites
  const handleDeleteFromGallery = (id: number) => {
    setSavedArtworks(savedArtworks.filter((a) => a.id !== id));
  };

  // Update note for an artwork
  const handleUpdateNote = (id: number, note: string) => {
    setSavedArtworks(
      savedArtworks.map((a) => (a.id === id ? { ...a, note } : a))
    );
  };

  return (
    <div className="min-h-screen bg-base-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

        {savedArtworks.length > 0 ? (
          <div>
            <p className="text-gray-600 mb-4">
              You have {savedArtworks.length} favorite artwork
              {savedArtworks.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedArtworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onDelete={handleDeleteFromGallery}
                  onUpdateNote={handleUpdateNote}
                  isInGallery={true}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No favorites yet. Go to Home and add some artworks!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
