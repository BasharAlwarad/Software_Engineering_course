import { z } from 'zod/v4';
import { useState } from 'react';

const UserSchema = z.object({
  id: z.coerce.number(),
  name: z.string().min(2),
  email: z.email(),
  isAdmin: z.boolean().default(false),
});

type User = z.infer<typeof UserSchema>;

const UserForm = () => {
  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleAction = (formData: FormData) => {
    const result = UserSchema.safeParse({
      id: formData.get('id'),
      name: formData.get('name'),
      email: formData.get('email'),
      isAdmin: formData.get('isAdmin') === 'on',
    });

    if (!result.success) {
      const customErrors = result.error.issues.map(
        (issue) => `${issue.path.join('.')}: ${issue.message}`
      );
      setErrors(customErrors);
      setUser(null);
      console.log('Validation errors:', customErrors);
      return;
    }

    setErrors([]);
    setUser(result.data);
    console.log('User submitted:', result.data);
  };

  return (
    <main>
      <h1>User Form</h1>
      <form action={handleAction} noValidate>
        <label htmlFor="id">ID</label>
        <input id="id" name="id" type="number" />
        <br />
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        <br />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <br />

        <label htmlFor="isAdmin">
          <input id="isAdmin" name="isAdmin" type="checkbox" />
          Admin user
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>

      {errors.length > 0 && (
        <div>
          <h2>Errors:</h2>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {user && (
        <div>
          <h2>User Data:</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </main>
  );
};

export default UserForm;
