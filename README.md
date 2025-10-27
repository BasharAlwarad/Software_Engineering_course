# 🎮 Pokemon MCP Server - Chapter 23

> **Educational content by Bashar Alwarad**:  
> Model Context Protocol (MCP) integration with Pokemon data.

## Connect with Me [![LinkedIn](https://img.shields.io/badge/LinkedIn-Bashar%20AlWarad-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bashar-alwarad-2a960b1b6/)

---

## 🎓 What is this?

This is an **MCP (Model Context Protocol) Server** that provides Pokemon data to AI assistants like VS Code Copilot, Claude Desktop, and Gemini CLI.

**MCP is like USB-C for AI** - one standard protocol that works across different AI hosts.

---

## ✅ What you'll learn

- How to build an MCP server using the official SDK
- The difference between **Tools**, **Resources**, and **Prompts**
- How to connect your server to VS Code Copilot
- How MCP differs from direct API tool calling (Chapter 22)
- How to make your integrations reusable across AI platforms

---

## 🏗️ Architecture

### **Three Building Blocks:**

| Primitive     | Who Controls It        | Purpose                        | Examples in this Server                                 |
| ------------- | ---------------------- | ------------------------------ | ------------------------------------------------------- |
| **Tools**     | Model-controlled       | Actions the AI decides to call | `get_pokemon`, `compare_pokemon`, `get_evolution_chain` |
| **Resources** | Application-controlled | Context data to inject         | `type_chart`, `generations`, `api_docs`                 |
| **Prompts**   | User-controlled        | Reusable templates             | `pokemon_search`, `team_builder`, `type_matchup`        |

---

## 📂 Project Structure

```
MCP_server/
├── .vscode/
│   └── mcp.json              # VS Code Copilot configuration
├── src/
│   ├── app.ts                # Main MCP server entry point
│   ├── tools/
│   │   └── index.ts          # Model-invoked tools (get_pokemon, etc.)
│   ├── resources/
│   │   └── index.ts          # App-controlled resources (type charts, etc.)
│   ├── prompts/
│   │   └── index.ts          # User-invoked prompts (templates)
│   └── utils/
│       └── index.ts          # Shared utilities (getPokemon, etc.)
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup

### **1. Install Dependencies**

```bash
cd MCP_server
npm install
```

### **2. Build the Server**

```bash
npm run build
```

### **3. Configure VS Code Copilot**

The `.vscode/mcp.json` file is already configured, but **verify the path is correct**:

```json
{
  "servers": {
    "pokemon": {
      "command": "node",
      "args": [
        "C:/Users/beelw/Desktop/Software_Engineering_course/MCP_server/dist/app.js"
      ]
    }
  }
}
```

> ⚠️ **Important**: Update the path if your project is in a different location.

### **4. Restart VS Code**

After building, restart VS Code to load the MCP server.

---

## 🚀 How to Use

### **Using Tools (Model-Invoked)**

Just ask in VS Code Copilot chat (Agent mode):

```
"Tell me about Pikachu"
```

The model will automatically call the `get_pokemon` tool.

```
"Compare Charizard and Blastoise"
```

The model will call the `compare_pokemon` tool.

### **Using Resources (Manual Context)**

1. Click **"Add Context"** in the chat
2. Select **"MCP Resources"**
3. Choose a resource:
   - `type_chart` - Pokemon type effectiveness
   - `generations` - Info about all generations
   - `api_docs` - PokeAPI reference

### **Using Prompts (Templates)**

Type in chat:

```
/mcp.pokemon.pokemon_search
```

Then enter the Pokemon name when prompted.

**Available prompts:**

- `/mcp.pokemon.pokemon_search` - Search for a Pokemon
- `/mcp.pokemon.type_matchup` - Analyze type advantages
- `/mcp.pokemon.team_builder` - Build a balanced team
- `/mcp.pokemon.evolution_path` - Show evolution chain
- `/mcp.pokemon.compare_pokemon` - Compare two Pokemon
- `/mcp.pokemon.type_strategy` - Mono-type team strategy

---

## 🔧 Available Tools

### **1. `get_pokemon`**

Fetch detailed Pokemon information.

**Example:**

```
"What are Pikachu's stats?"
```

### **2. `compare_pokemon`**

Compare two Pokemon side-by-side.

**Example:**

```
"Who would win: Charizard or Blastoise?"
```

### **3. `get_pokemon_by_type`**

Find Pokemon of a specific type.

**Example:**

```
"Show me fire-type Pokemon"
```

### **4. `get_evolution_chain`**

Get the evolution line for a Pokemon.

**Example:**

```
"What does Charmander evolve into?"
```

---

## 📚 Available Resources

### **1. `type_chart`**

Complete Pokemon type effectiveness chart.

### **2. `generations`**

Information about all Pokemon generations and regions.

### **3. `api_docs`**

PokeAPI documentation reference.

---

## 💬 Available Prompts

### **1. `pokemon_search`**

Template for searching Pokemon details.

### **2. `type_matchup`**

Analyze type advantages and weaknesses.

### **3. `team_builder`**

Build a balanced competitive team.

### **4. `evolution_path`**

Explore evolution chains.

### **5. `compare_pokemon`**

Compare two Pokemon.

### **6. `type_strategy`**

Build mono-type team strategies.

---

## 🆚 MCP vs. Direct Tool Calling (Chapter 22)

| Aspect          | Chapter 22 (Direct)  | Chapter 23 (MCP)                       |
| --------------- | -------------------- | -------------------------------------- |
| **Protocol**    | Custom HTTP API      | Standardized MCP                       |
| **Transport**   | HTTP POST            | stdio (local)                          |
| **Discovery**   | Manual documentation | Auto-discovery via MCP                 |
| **Reusability** | Only your app        | Works in VS Code, Claude, Gemini, etc. |
| **Resources**   | Not supported        | Native support                         |
| **Prompts**     | Not supported        | Native support                         |

---

## 🧪 Testing

### **In VS Code:**

1. Open Copilot chat in **Agent mode**
2. Ask: `"Tell me about Bulbasaur"`
3. The model should call `get_pokemon("bulbasaur")`
4. You'll see the Pokemon data in the response

### **Debug Logs:**

Check the terminal where `npm run dev` is running to see:

- When tools are called
- What data is fetched
- Any errors

---

## 🔄 Development Workflow

### **Watch Mode (Auto-rebuild):**

```bash
npm run dev
```

This watches for file changes and auto-restarts the server.

### **Build for Production:**

```bash
npm run build
```

### **Run Production:**

```bash
npm start
```

---

## 🎯 Next Steps

1. **Add more tools:**

   - `get_move_details(moveName)` - Explain Pokemon moves
   - `search_by_ability(abilityName)` - Find Pokemon with an ability
   - `get_legendary_pokemon()` - List legendary Pokemon

2. **Add more resources:**

   - `pokedex://abilities` - All abilities reference
   - `pokedex://items` - All items reference

3. **Experiment with prompts:**

   - Create custom team-building strategies
   - Add competitive battle analysis prompts

4. **Connect to other hosts:**
   - Try Claude Desktop
   - Try Gemini CLI
   - See how the same server works everywhere!

---

## 🐛 Troubleshooting

### **Server not appearing in VS Code:**

1. Make sure you built the project: `npm run build`
2. Check the path in `.vscode/mcp.json` is correct
3. Restart VS Code completely

### **Tools not being called:**

1. Use Agent mode in Copilot chat
2. Make your prompt clear (e.g., "Tell me about Pikachu")
3. Check terminal logs for errors

### **Pokemon not found:**

1. Use official English names (e.g., "bulbasaur" not "Bisasam")
2. Check spelling
3. Some Pokemon have special characters (e.g., "mr-mime")

---

## 📖 Further Reading

- [Model Context Protocol Docs](https://modelcontextprotocol.io/)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- [VS Code MCP Integration](https://code.visualstudio.com/docs/copilot/copilot-mcp)

---

## 🎓 Learning Objectives Completed

✅ Understand the MCP protocol architecture  
✅ Build an MCP server with tools, resources, and prompts  
✅ Connect to VS Code Copilot  
✅ See the difference between direct tool calling and MCP  
✅ Create reusable AI integrations

**Happy Learning! 🎮🚀**
