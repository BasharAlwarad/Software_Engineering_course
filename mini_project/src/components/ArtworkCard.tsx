import { useState } from 'react';
import type { Artwork } from '../types/artwork';
import { NoteSchema } from '../types/artwork';
import { getImageUrl } from '../services/api';

interface ArtworkCardProps {
  artwork: Artwork;
  onAddToGallery?: (artwork: Artwork) => void;
  onDelete?: (id: number) => void;
  onUpdateNote?: (id: number, note: string) => void;
  isInGallery?: boolean;
}

// FR006: Reusable ArtworkCard component
const ArtworkCard = ({
  artwork,
  onAddToGallery,
  onDelete,
  onUpdateNote,
  isInGallery = false,
}: ArtworkCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [noteText, setNoteText] = useState(artwork.note);
  const imageUrl = getImageUrl(artwork.image_id);

  const handleSaveNote = () => {
    try {
      NoteSchema.parse({ note: noteText });
      onUpdateNote?.(artwork.id, noteText);
      setIsEditing(false);
    } catch {
      alert('Note too long (max 500 characters)');
    }
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      {/* Image Display */}
      <figure className="bg-gray-200 h-40 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={artwork.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </figure>

      <div className="card-body">
        {/* Title and Artist */}
        <h2 className="card-title text-lg line-clamp-2">{artwork.title}</h2>
        {artwork.artist_title && (
          <p className="text-sm text-gray-600">{artwork.artist_title}</p>
        )}

        {/* Notes Section - FR010 */}
        {isInGallery && (
          <div className="mt-2">
            {isEditing ? (
              <>
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  maxLength={500}
                  className="textarea textarea-bordered w-full text-sm"
                  placeholder="Add a note..."
                />
                <p className="text-xs text-gray-400 mt-1">
                  {noteText.length}/500
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={handleSaveNote}
                    className="btn btn-sm btn-primary"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setNoteText(artwork.note);
                      setIsEditing(false);
                    }}
                    className="btn btn-sm btn-ghost"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {artwork.note && (
                  <p className="text-sm bg-blue-50 p-2 rounded">
                    {artwork.note}
                  </p>
                )}
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-xs btn-ghost mt-2"
                >
                  {artwork.note ? 'Edit Note' : 'Add Note'}
                </button>
              </>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="card-actions mt-4">
          {onAddToGallery && !isInGallery && (
            <button
              onClick={() => onAddToGallery(artwork)}
              className="btn btn-sm btn-primary flex-1"
            >
              Add to Gallery
            </button>
          )}
          {onDelete && isInGallery && (
            <button
              onClick={() => onDelete(artwork.id)}
              className="btn btn-sm btn-error flex-1"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
