import { z } from 'zod';

// Artwork schema for validation - FR003
export const ArtworkSchema = z.object({
  id: z.number().int(),
  title: z.string().default('Untitled'),
  artist_title: z.string().nullable().default(null),
  image_id: z.string().nullable().default(null),
  note: z.string().default(''),
});

// Infer TypeScript type from schema - FR012
export type Artwork = z.infer<typeof ArtworkSchema>;

// API response validation schema
export const ArtworkApiSchema = z.object({
  data: z.array(
    z.object({
      id: z.coerce.number().int(),
      title: z.string().default('Untitled'),
      artist_title: z.string().nullable().default(null),
      image_id: z.string().nullable().default(null),
    })
  ),
});

// Note schema for updates - FR010
export const NoteSchema = z.object({
  note: z.string().max(500, 'Note must be 500 characters or less'),
});

export type Note = z.infer<typeof NoteSchema>;
