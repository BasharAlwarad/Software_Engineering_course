# 05_comments

## Comments in C#

### Why Comment Your Code?

Comments help explain what your code does, making it easier for you and others to understand, maintain, and debug. Good comments clarify intent, highlight important logic, and can serve as reminders.

### Types of Comments

- **Single-line comment:**
  ```c#
  // This is a single-line comment
  ```
- **Multi-line comment:**
  ```c#
  /*
  	This is a
  	multi-line comment
  */
  ```
- **XML documentation comment:**
  Used to document functions, classes, etc. These comments can be read by IDEs and tools to show tooltips and generate documentation.
  ```c#
  /// <summary>
  /// Adds two numbers.
  /// </summary>
  /// <param name="a">First number</param>
  /// <param name="b">Second number</param>
  /// <returns>The sum</returns>
  int Add(int a, int b) { return a + b; }
  ```

### Comment vs Documentation

- **Comments** are for explaining code logic and intent.
- **Documentation comments** (XML) are for describing the purpose, usage, and details of code elements, and are used by IDEs for tooltips and documentation generation.

---

Use comments to clarify your code, and documentation comments to help others use your functions and classes correctly.
