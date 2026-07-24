// export async function GET() {
//   try {
//     const users = await sql`
//       SELECT id, email, created_at
//       FROM users
//       ORDER BY created_at DESC
//     `;

//     return Response.json({ users });
//   } catch (error) {
//     return Response.json({ error: 'Failed to fetch users' }, { status: 500 });
//   }
// }

import { sql } from '@/lib/neondb.js';

export async function GET(request) {
  try {
    console.log(request.url);
    const { searchParams } = new URL(request.url);
    const search1 = searchParams.get('search') || '';
    const search2 = searchParams.get('search') || '';
    // const users = await sql`SELECT * FROM users `;
    const users = await sql`
      SELECT * FROM users
      WHERE ing1,ing2 ILIKE [${'%' + search1 + '%'},${'%' + search2 + '%'} ]
    `;

    return Response.json({ users });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function DELETE() {
  return Response.json({ users: 'hello bashar delete' });
}
export async function PUT() {
  return Response.json({ users: 'hello bashar update' });
}

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
