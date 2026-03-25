import { useState, useEffect } from 'react';
import type { Artwork } from '../types/artwork';
import SearchInterface from './SearchInterface';
import ArtworkCard from './ArtworkCard';

// FR007-FR011: Gallery component with CRUD operations
const Gallery = () => {
  const [searchResults, setSearchResults] = useState<Artwork[]>([]);

  // FR009: Lazy initializer to load saved artworks from localStorage on mount
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

  // Save to localStorage whenever savedArtworks changes
  useEffect(() => {
    localStorage.setItem('artworks', JSON.stringify(savedArtworks));
  }, [savedArtworks]);

  // FR008: Add artwork to gallery
  const handleAddToGallery = (artwork: Artwork) => {
    const exists = savedArtworks.some((a) => a.id === artwork.id);
    if (exists) {
      alert('This artwork is already in your gallery!');
      return;
    }
    setSavedArtworks([...savedArtworks, artwork]);
  };

  // FR011: Delete artwork from gallery
  const handleDeleteFromGallery = (id: number) => {
    setSavedArtworks(savedArtworks.filter((a) => a.id !== id));
  };

  // FR010: Update note for an artwork
  const handleUpdateNote = (id: number, note: string) => {
    setSavedArtworks(
      savedArtworks.map((a) => (a.id === id ? { ...a, note } : a))
    );
  };

  const handleSearch = (results: Artwork[]) => {
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-base-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Art Gallery</h1>

        {/* Search Interface */}
        <SearchInterface onSearch={handleSearch} isLoading={false} />

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onAddToGallery={handleAddToGallery}
                  isInGallery={savedArtworks.some((a) => a.id === artwork.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Saved Gallery */}
        {savedArtworks.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              My Gallery ({savedArtworks.length})
            </h2>
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
        )}
      </div>
    </div>
  );
};

export default Gallery;
