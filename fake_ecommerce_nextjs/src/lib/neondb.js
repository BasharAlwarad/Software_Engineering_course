import { neon } from '@neondatabase/serverless';

const databaseUrl =
  'postgresql://neondb_owner:npg_5uWx8adlLsTh@ep-orange-dawn-auln5q8w-pooler.c-10.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

if (!databaseUrl) {
  throw new Error('Missing NEON in .env');
}
export const sql = neon(databaseUrl);
