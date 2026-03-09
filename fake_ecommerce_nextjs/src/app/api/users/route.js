import { sql } from '@/lib/neon';

// GET all users
export async function GET() {
  try {
    const users = await sql`
      SELECT id, email, created_at 
      FROM users 
      ORDER BY created_at DESC
    `;

    return Response.json({ users });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
