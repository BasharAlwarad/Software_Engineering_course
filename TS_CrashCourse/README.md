# TypeScript Crash Course: Step-by-Step Setup

This guide will help you (and your students) set up a TypeScript project from scratch, step by step.

## 1. Initialize npm

Run this command in your project folder:

```bash
npm init -y
```

## 2. Install TypeScript locally

This ensures consistent TypeScript versions for all contributors:

```bash
npm install typescript --save-dev
```

## 3. Generate a TypeScript configuration file

This creates a `tsconfig.json` file:

```bash
npx tsc --init
```

## 4. Update `tsconfig.json` for project structure

Open `tsconfig.json` and set the following inside `compilerOptions`:

```json
"rootDir": "./src",
"outDir": "./dist",
```

This will keep your source files in `src` and compiled files in `dist`.

## 5. Create your source folder and entry file

Run:

```bash
mkdir src
```

Then create a file named `index.ts` inside the `src` folder. You can use:

```bash
echo "// Entry point" > src/index.ts
```

## 6. Add a build script to `package.json`

In your `package.json`, add this to the `scripts` section:

```json
"build": "tsc"
```

## 7. Build your project

Now you can compile your TypeScript code with:

```bash
npm run build
```

## 9. Run your server in watch mode (auto-restart on changes)

For development, you can use `ts-node-dev` to automatically restart your server when you change TypeScript files.

### a. Install ts-node-dev as a dev dependency

```bash
npm install --save-dev ts-node-dev
```

### b. Add a dev script to your `package.json`

In the `scripts` section, add:

```json
"dev": "ts-node-dev --respawn --transpile-only src/index.ts"
```

### c. Start your server in watch mode

```bash
npm run dev
```

This will watch your TypeScript files and automatically restart the server on changes—no manual build step needed!

---

Feel free to expand this guide with more TypeScript examples and exercises!
