import { sql } from '@/lib/neon';

// GET single user
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

// PUT update user
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { email, password } = await request.json();

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    // Update email and optionally password
    if (password) {
      await sql`
        UPDATE users 
        SET email = ${email}, password = ${password}
        WHERE id = ${id}
      `;
    } else {
      await sql`
        UPDATE users 
        SET email = ${email}
        WHERE id = ${id}
      `;
    }

    return Response.json({ message: 'User updated' });
  } catch (error) {
    if (error?.code === '23505') {
      return Response.json({ error: 'Email already exists' }, { status: 409 });
    }
    return Response.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

// DELETE user
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    await sql`
      DELETE FROM users 
      WHERE id = ${id}
    `;

    return Response.json({ message: 'User deleted' });
  } catch (error) {
    return Response.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
