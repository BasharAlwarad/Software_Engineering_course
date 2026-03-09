import { sql } from '@/lib/neon';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return Response.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Teaching demo only: storing plain passwords is not safe for real apps.
    await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${password})
    `;

    return Response.json({ message: 'User created' });
  } catch (error) {
    if (error?.code === '23505') {
      return Response.json({ error: 'Email already exists' }, { status: 409 });
    }

    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
