import { sql } from '@/lib/neondb.js';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const users = await sql`
      SELECT id, email, created_at 
      FROM users 
      WHERE id = ${id}
    `;

    if (users.length === 0) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    return Response.json({ user: users[0] });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}
