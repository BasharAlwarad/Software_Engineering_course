# 🚀 Getting Started - Quick Guide for Students

## Step 1: Get Your API Keys (Do This First!)

You'll need at least ONE API key to test this project. Here's where to get them:

### OpenAI (Recommended to start with)

1. Go to: https://platform.openai.com/api-keys
2. Create an account (if you don't have one)
3. Click "Create new secret key"
4. Copy the key (you won't see it again!)
5. **New accounts get $5 free credit!**

### Anthropic (Optional)

1. Go to: https://console.anthropic.com/settings/keys
2. Sign up for an account
3. Generate an API key
4. Copy it

### Google Gemini (Optional)

1. Go to: https://aistudio.google.com/app/apikey
2. Sign in with Google account
3. Click "Create API Key"
4. Copy it

---

## Step 2: Setup the Project

Open your terminal and run:

```bash
# 1. Install all dependencies
npm install

# 2. Create your .env file from the example
cp .env.example .env
```

**On Windows (if cp doesn't work):**

```bash
copy .env.example .env
```

---

## Step 3: Add Your API Keys

1. Open the `.env` file in VS Code
2. Replace `your_openai_api_key_here` with your actual OpenAI key
3. (Optional) Add Anthropic and Gemini keys if you have them
4. Save the file

**Your .env should look like:**

```
OPENAI_API_KEY=sk-proj-abc123xyz...
ANTHROPIC_API_KEY=sk-ant-api03-abc123...
GEMINI_API_KEY=AIzaSy...
```

⚠️ **Important:** Never share or commit your `.env` file!

---

## Step 4: Test It!

Run your first AI request:

```bash
npm run dev -- openai "What is TypeScript?"
```

You should see output with AI responses! 🎉

---

## Step 5: Try More Examples

```bash
# Ask about programming
npm run dev -- openai "Explain async/await in JavaScript"

# Try Anthropic (if you have the key)
npm run dev -- anthropic "What are the best practices for REST APIs?"

# Try Google (if you have the key)
npm run dev -- google "What is the difference between == and === in JavaScript?"
```

---

## 🐛 Troubleshooting

### "Cannot find module" errors

**Solution:** Run `npm install`

### "API key not found" or authentication errors

**Solution:** Check that:

1. You created the `.env` file
2. You added your actual API key (not the placeholder text)
3. The API key is valid (try generating a new one)

### Rate limit errors

**Solution:** Wait a minute and try again. Free tiers have rate limits.

### "command not found: npm"

**Solution:** Install Node.js from https://nodejs.org/

---

## 📖 Understanding the Output

When you run the commands, you'll see:

1. **REST API responses**: Full JSON object with lots of metadata
2. **SDK responses**: More structured, easier to read
3. **Structured outputs**: Formatted as defined schemas

Compare them to understand the differences!

---

## 🎯 What to Do Next

1. ✅ Get at least one API key working
2. ✅ Run the same prompt with different providers
3. ✅ Look at the code in the `src/` folder
4. ✅ Try modifying the prompts
5. ✅ Experiment with temperature values (in the code)

---

## 💡 Quick Tips

- **Start with OpenAI** - it's the easiest to get started with
- **Read the code** - Each file has clear comments explaining what it does
- **Experiment** - Try different prompts and see what happens
- **Check costs** - Monitor your usage on the provider dashboards
- **Ask questions** - If something doesn't work, ask your instructor!

---

**Ready to build with AI! 🚀**
