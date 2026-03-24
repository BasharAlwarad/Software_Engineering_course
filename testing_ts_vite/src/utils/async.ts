export const greetAsync = (name: string): Promise<string> =>
  new Promise((resolve) => setTimeout(() => resolve(`Hello ${name}`), 10));

export const failAsync = (): Promise<void> =>
  new Promise((_, reject) => setTimeout(() => reject(new Error('Boom')), 10));

export const getUsers = async () => {
  const res = await fetch('some url');
  const data = res.json();
  return data;
};
