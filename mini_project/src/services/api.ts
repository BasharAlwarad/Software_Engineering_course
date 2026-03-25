import type { Artwork } from '../types/artwork';
import { ArtworkApiSchema, ArtworkSchema } from '../types/artwork';

const API_BASE = 'https://api.artic.edu/api/v1';
const IIIF_BASE = 'https://www.artic.edu/iiif/2';

// FR004: Fetch and validate artwork data
export const searchArtworks = async (query: string): Promise<Artwork[]> => {
  try {
    const response = await fetch(
      `${API_BASE}/artworks/search?q=${encodeURIComponent(query)}&limit=12&fields=id,title,artist_title,image_id`
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const json = await response.json();

    // Validate with schema and handle invalid data
    const validated = ArtworkApiSchema.parse(json);

    return validated.data.map((item) =>
      ArtworkSchema.parse({
        id: item.id,
        title: item.title,
        artist_title: item.artist_title,
        image_id: item.image_id,
      })
    );
  } catch (error) {
    console.error('Error fetching artworks:', error);
    return [];
  }
};

// Helper to get image URL from image_id
export const getImageUrl = (imageId: string | null): string | null => {
  if (!imageId) return null;
  return `${IIIF_BASE}/${imageId}/full/400,/0/default.jpg`;
};
