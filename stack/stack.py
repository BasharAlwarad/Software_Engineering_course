def save_values():
    with open("./stack/data.txt", "w") as file:
        while True:
            val = input("Enter a value (or 'done' to finish): ")
            if val.lower() == "done":
                break
            file.write(val + "\n")


def navigate_file():
    with open("./stack/data.txt", "r") as file:
        lines = [line.strip() for line in file.readlines()]

    back_stack = []
    forward_stack = []
    current = None

    while True:
        cmd = input("\nCommand (next, back, quit): ").strip().lower()

        if cmd == "next":
            if lines:
                if current is not None:
                    back_stack.append(current)
                current = lines.pop(0)
                print(f"Current: {current}")
            else:
                print("No more entries.")

        elif cmd == "back":
            if back_stack:
                forward_stack.append(current)
                current = back_stack.pop()
                print(f"Back to: {current}")
            else:
                print("No previous entries.")

        elif cmd == "quit":
            break

        else:
            print("Unknown command.")


save_values()
navigate_file()
