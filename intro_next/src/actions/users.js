'use server';
import { redirect } from 'next/navigation';

export async function registerUser(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');
  if (!username || !email || !password) {
    return {
      error: 'All fields are required.',
    };
  }
  console.log('User registered:', { username, email, password });
  console.log('Here you could safely store the user data in a database.');
  redirect('/');
}
