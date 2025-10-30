# 01_intro

## Learning objectives

By the end of this short introduction you should be able to:

- Explain what C# and .NET are and where they're commonly used.
- Install the .NET SDK and create a simple console app using the CLI.
- Run and build a C# project and identify the common project files (`.csproj`, `bin/`, `obj/`).

## What is C#?

C# (pronounced "C-sharp") is a modern, object-oriented programming language created by Microsoft. It is commonly used with the .NET platform to build desktop apps, web APIs, cloud services, games (Unity), and more.

## What is .NET?

.NET is a free, open-source developer platform for building many kinds of applications. C# is one of the primary languages used on .NET. Note: modern .NET releases (sometimes called ".NET" rather than ".NET Core") unify the platform across operating systems.

## Prerequisites

- A supported .NET SDK. We recommend using an LTS release (for example, .NET 8 LTS or later) or the version specified by the course.
- Visual Studio Code (optional but convenient) and the C# extension by Microsoft for editing, IntelliSense and debugging.
- Basic familiarity with using a terminal / command prompt.

Download the SDK here: https://dotnet.microsoft.com/download

## Platform notes (Windows / macOS / Linux)

The course materials and the `dotnet` CLI commands in this README are cross-platform. Below are quick platform-specific notes and common installation options. When in doubt, use the official download page linked above — it will list the recommended installer for your OS and architecture.

- Verify installation after installing the SDK by running:

```bash
dotnet --info
```

    This prints the installed SDK/runtime versions and environment details. If `dotnet` is not found, try restarting your terminal or logging out/in.

- Windows (recommended):

  - Official installer: download from the .NET downloads page and run the installer.
  - Optional package manager (PowerShell / Command Prompt):

    - Using winget (example):

    ```powershell
    winget install --id Microsoft.DotNet.SDK.8 -e
    ```

    Note: package IDs and versions may vary. If `winget` is not available, use the installer from the website or a package manager you prefer (e.g., Chocolatey).

- macOS:

  - Official installer: download the macOS SDK for the correct architecture (Apple Silicon / Intel) from the .NET downloads page.
  - Homebrew (optional):

    ```bash
    brew update
    brew install --cask dotnet-sdk
    ```

  After installing with Homebrew you may need to follow any post-install notes printed by Homebrew (such as adding `dotnet` to PATH).

- Linux (example):

  - Many distributions provide packages via their package manager or the Microsoft package repository. For Ubuntu you can follow the instructions on the official .NET page which typically include adding Microsoft's package feed and installing `dotnet-sdk-<version>`.
  - Example (do not run blindly; follow the official distro instructions):

    ```bash
    # Ubuntu (example only) - follow the official guide for full instructions
    sudo apt update
    sudo apt install -y dotnet-sdk-8.0
    ```

Shell notes:

- Commands shown in this README use bash-style syntax for portability. Windows PowerShell or Command Prompt users can run the same `dotnet` commands (`dotnet new`, `dotnet run`, etc.) — the command syntax is identical. Where a package manager command is shell-specific, the example indicates the shell (e.g., `powershell` for `winget`).

If you'd like, I can add a short per-OS troubleshooting subsection that covers common PATH problems and specific package-manager IDs for the most recent LTS SDK.

## Creating and running a console app

Open a terminal and run:

```bash
dotnet new console -o MyFirstApp
cd MyFirstApp
dotnet run
```

This creates a new console project, restores dependencies, builds, and runs it.

Notes:

- `dotnet build` compiles the project into Intermediate Language (IL) and produces binaries under `bin/`.
- `dotnet run` builds (if needed) and runs the app in one step.
- `dotnet restore` restores NuGet packages (this is automatic for `dotnet build` and `dotnet run`).

## Compilation vs interpretation (short, accurate explanation)

Some resources simplify this as "Python is interpreted; C# is compiled." That's a helpful shorthand but incomplete. A clearer summary:

- Python (CPython) is typically executed by an interpreter which compiles source to bytecode at runtime and executes it. Python is dynamically typed.
- C# is statically typed and is compiled to Intermediate Language (IL). The .NET runtime (CLR) executes IL and typically JIT-compiles it to native code at runtime; .NET also supports AOT (ahead-of-time) compilation in some scenarios.

## Program structure (quick)

- `Program.cs` — the default source file created for a console app. Newer C# templates use top-level statements (no explicit `Main` method). Older / explicit style still uses a `static void Main(string[] args)` entry point.
- `*.csproj` — the project file that lists target framework, package references, and build settings.
- `bin/` and `obj/` — build output and intermediate files. You usually don't edit these directly.

## Useful dotnet commands

- `dotnet new console -o MyApp` — create a new console app
- `dotnet run` — run the app
- `dotnet build` — compile the project
- `dotnet test` — run tests (if present)
- `dotnet add package <PackageName>` — add a NuGet package

## Where is C# used?

- Desktop apps (Windows and cross-platform UI with frameworks)
- Web APIs and web apps (ASP.NET Core)
- Cloud services (Azure / containers)
- Game development (Unity)
- Enterprise and backend systems

## C# vs Other Languages (brief)

### Python vs C#

- Both can be used for many tasks but differ in typing and runtime model.
- Python is dynamically typed and commonly interpreted; C# is statically typed and compiled to IL then executed by the .NET runtime.

Example - Python:

```python
print("Hello, world!")
```

Example - C# (top-level statements template):

```c#
Console.WriteLine("Hello, world!");
```

### JavaScript/TypeScript vs C#

- JavaScript runs in browsers and Node.js. TypeScript adds static types and transpiles to JavaScript.
- TypeScript performs static checks at compile/transpile time but the emitted output is JavaScript that runs on the JavaScript runtime. C# compiles to IL and runs on the .NET runtime.

Example - JavaScript:

```js
console.log('Hello, world!');
```

Example - TypeScript (transpiled to JS):

```ts
console.log('Hello, world!');
```

## Exercises (try these)

1. Create `MyFirstApp` and print your name. Modify the message and re-run.
2. Read user input and greet the user (use `Console.ReadLine()`).
3. Replace the top-level statements with an explicit `Main` method and run again.

## Where to learn more

- Official docs and tutorials: https://learn.microsoft.com/dotnet/csharp/
- .NET downloads and installation: https://dotnet.microsoft.com/download

---

If you'd like, I can also:

- Add a short solutions file showing simple code for the exercises.
- Create a small `exercise` folder with starter projects and tests.

Tell me which you'd like next.
