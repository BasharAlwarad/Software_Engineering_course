import { useState } from 'react';
import { searchArtworks } from '../services/api';
import type { Artwork } from '../types/artwork';

interface SearchInterfaceProps {
  onSearch: (results: Artwork[]) => void;
  isLoading: boolean;
}

// FR005: Search interface for querying the API
const SearchInterface = ({ onSearch, isLoading }: SearchInterfaceProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const results = await searchArtworks(query);
    onSearch(results);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search artworks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input input-bordered flex-1"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading || !query.trim()}
        >
          {isLoading ? <span className="loading loading-spinner" /> : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchInterface;
