import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.NEON;

if (!databaseUrl) {
  throw new Error('Missing NEON in .env');
}

export const sql = neon(databaseUrl);
