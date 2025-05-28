# 🖥️ Intro to the Terminal: Zsh (macOS) & Bash (Windows)

Welcome! This short guide will teach you how to use the terminal on **macOS (Zsh)** and **Windows (Bash via Git Bash or WSL)**. It includes essential commands and a quick intro to the `nano` text editor.

---

## ⚙️ What is the Terminal?

The terminal is a **text-based interface** used to interact with your computer. It allows you to execute commands, manage files, and run programs without using a mouse.

- **macOS**: Uses **Zsh** (default since macOS Catalina).
- **Windows**: Use **Git Bash** or **WSL (Windows Subsystem for Linux)** to access a Bash shell.

---

## ⚙️ why using Terminal?

### create txt file for users data

```bash
mkdir testing;
cd testing;
users=("john doe 25" "jane smith 30" "mike brown 22" "sara jones 28" "lisa white 35" "mark black 24" "emma green 29" "noah hall 31" "olivia king 27" "liam lee 23" "ava scott 26" "ethan young 32" "mia adams 21" "lucas evans 33" "zoe hill 34" "alex clark 20" "chloe bell 36" "jack ward 38" "ella price 19" "ryan ross 37");
for user in "${users[@]}";
do set -- $user; echo -e "$1\\n$2\\n$3" > "$1.txt";
done
```

### remove all file with a specific value.

```bash
cd testing && grep -l "3" *.txt | xargs rm
```

## 💡 Basic Concepts

| Term          | Description                                         |
| ------------- | --------------------------------------------------- |
| **Shell**     | Program that runs in the terminal (Zsh, Bash, etc.) |
| **Prompt**    | Where you type commands (`$`, `➜`, etc.)            |
| **Directory** | The current folder you're working in                |

---

## 📁 Navigation Commands

| Command         | Description                     |
| --------------- | ------------------------------- |
| `pwd`           | Print current working directory |
| `ls`            | List files and folders          |
| `cd foldername` | Change into a folder            |
| `cd ..`         | Go up one directory             |
| `cd ~`          | Go to home directory            |

---

## 📄 File and Folder Management

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `mkdir myFolder`         | Create a new folder              |
| `touch file.txt`         | Create a new empty file          |
| `rm file.txt`            | Delete a file                    |
| `rm -r folder/`          | Delete a folder and its contents |
| `cp file.txt backup.txt` | Copy a file                      |
| `mv old.txt new.txt`     | Rename or move a file            |

---

## ⚙️ Useful Commands

| Command                             | Description                              |
| ----------------------------------- | ---------------------------------------- |
| `clear`                             | Clear the terminal screen                |
| `history`                           | Show list of previously used commands    |
| `man ls`                            | Show manual/help for a command           |
| `echo "Hello"`                      | Print text to the screen                 |
| `open .` (mac) / `explorer .` (win) | Open the current folder in file explorer |

---

## 🧠 Tips & Shortcuts

| Shortcut   | Function                           |
| ---------- | ---------------------------------- |
| `Tab`      | Auto-complete command or file name |
| `Ctrl + C` | Cancel running command             |
| `↑` / `↓`  | Browse command history             |

---

## ✍️ Editing Files with `nano`

`nano` is a simple, beginner-friendly command-line text editor.

### 📌 Open or Create a File:

```bash
nano notes.txt
```

### 🛠 Basic Commands (at bottom of nano):

| Shortcut   | Action                  |
| ---------- | ----------------------- |
| `Ctrl + O` | Save file ("Write Out") |
| `Ctrl + X` | Exit nano               |
| `Ctrl + K` | Cut a line              |
| `Ctrl + U` | Paste a line            |
| `Ctrl + W` | Search text             |

> **Note:** You can move the cursor with arrow keys.

---

## 🧪 Practice Tasks

Try the following:

1. Open your terminal.
2. Navigate to your Desktop:
   ```bash
   cd ~/Desktop
   ```
3. Create a folder:
   ```bash
   mkdir practice
   cd practice
   ```
4. Create a text file:
   ```bash
   touch notes.txt
   ```
5. Open it in `nano` and type some notes:
   ```bash
   nano notes.txt
   ```

---
