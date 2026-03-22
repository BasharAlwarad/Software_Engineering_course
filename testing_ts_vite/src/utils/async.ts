export const greetAsync = (name: string): Promise<string> =>
  new Promise((resolve) => setTimeout(() => resolve(`Hello ${name}`), 10));

export const failAsync = (): Promise<void> =>
  new Promise((_, reject) => setTimeout(() => reject(new Error('Boom')), 10));
