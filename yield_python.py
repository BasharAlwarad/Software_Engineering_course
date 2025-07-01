import time


def read_large_file(filename):
    with open(filename) as file:
        for line in file:
            yield line.strip()


def process(line, delay=1):
    """Process each line - in this case, just print it with delay"""
    print(f"Processing: {line}")
    time.sleep(delay)  # Add delay between processing each line


# Create a test file first
with open("test_text.txt", "w") as f:
    f.write("Line 1: Hello World\n")
    f.write("Line 2: Python is awesome\n")
    f.write("Line 3: Generators are efficient\n")
    f.write("Line 4: Yield is powerful\n")
    f.write("Line 5: Memory efficient processing\n")

# Now process the file 5 times with intervals
print("Reading and processing file 5 times (with 1 second delay between lines):")
print("=" * 60)

for cycle in range(1, 6):  # Repeat 5 times
    print(f"\n🔄 CYCLE {cycle}/5:")
    print("-" * 30)

    for line in read_large_file("test_text.txt"):
        process(line, delay=1)  # 1 second delay between each line

    if cycle < 5:  # Don't wait after the last cycle
        print(f"\n⏳ Waiting 3 seconds before next cycle...")
        time.sleep(3)  # 3 second interval between complete file reads

print("\n✅ All 5 cycles complete!")


# =======================================================
# import inspect
# def test():
#     """
#     Inspect the current frame and print local variables.
#     This function demonstrates how to access the current frame using the `inspect` module
#     and print the local variables within that frame.
#     """
#     frame = inspect.currentframe()
#     print(frame.f_locals)  # Local variables
# test()

# =======================================================
