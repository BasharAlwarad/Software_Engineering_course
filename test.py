from collections import deque


def can_reach_end_bfs(grid, initial_health):
    """
    Determines if a player can reach the bottom-right cell of a grid using BFS.

    The player starts at the top-left corner (0, 0) and wants to reach the 
    bottom-right corner. Each cell in the grid represents damage that will be 
    dealt to the player when entering that cell. The player must maintain 
    at least 1 health point to survive.

    Grid structure example:
    For a 3x4 grid:
        Col: 0  1  2  3
    Row 0: [a, b, c, d]  <- START is at (0,0) = 'a'
    Row 1: [e, f, g, h]
    Row 2: [i, j, k, l]  <- TARGET is at (2,3) = 'l'

    Args:
        grid: 2D list representing the game board where each cell contains damage value
        initial_health: Starting health points of the player

    Returns:
        bool: True if the player can reach the end, False otherwise
    """
    # Get grid dimensions
    # num_rows = number of horizontal rows (height of the matrix)
    # num_cols = number of vertical columns (width of the matrix)
    num_rows, num_cols = len(grid), len(grid[0])
    # print("num of rows and cols", num_rows, num_cols)
    # Track the maximum health recorded when visiting each cell
    # Initialize with -1 to indicate unvisited cells
    # This matrix has the SAME SHAPE as the input grid:
    # max_health_at_cell[row][col] stores the best health achieved at grid[row][col]
    #
    # Example for 3x4 grid:
    #     Col: 0   1   2   3
    # Row 0: [-1, -1, -1, -1]  <- All cells start as unvisited (-1) (0,0,1)
    # Row 1: [-1, -1, -1, -1]
    # Row 2: [-1, -1, -1, -1]
    # rows 3 col 5  [-1,-1,-1,-1,-1]
    max_health_at_cell = [[-1] * num_cols for _ in range(num_rows)]
    # print(max_health_at_cell)

    # BFS queue to store (row, col, current_health) tuples
    search_queue = deque()
    # print(search_queue)

    # Calculate health after taking damage from starting cell (top-left corner)
    # Starting position is always grid[0][0] (first row, first column)
    health_after_start = initial_health - grid[0][0]
    if health_after_start < 1:
        return False  # Player dies at the starting position

    # Add starting position to queue and mark as visited
    # Queue stores tuples: (row_index, column_index, current_health)
    search_queue.append((0, 0, health_after_start))
    # print(search_queue)
    max_health_at_cell[0][0] = health_after_start

    # Define movement directions in (row_change, column_change) format:
    # (-1, 0) = UP    (decrease row by 1, same column)
    # (1, 0)  = DOWN  (increase row by 1, same column)
    # (0, -1) = LEFT  (same row, decrease column by 1)
    # (0, 1)  = RIGHT (same row, increase column by 1)
    #
    # Visual representation of movements from position (r,c):
    #           (r-1,c) ↑ UP
    # (r,c-1) ← (r,c) → (r,c+1)
    #           (r+1,c) ↓ DOWN
    movement_directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    # Perform BFS traversal
    while search_queue:
        current_row, current_col, current_health = search_queue.popleft()  # 0 , 0, 1

        # Check if we've reached the target (bottom-right corner)
        # Target position is always at (num_rows-1, num_cols-1)
        # This represents the last row and last column of the matrix
        if current_row == num_rows - 1 and current_col == num_cols - 1:
            return True  # Successfully reached the destination

        # Explore all four possible directions from current position
        for row_delta, col_delta in movement_directions:
            # Calculate the next position by applying the movement
            next_row, next_col = current_row + row_delta, current_col + col_delta

            # Check if the next position is within grid boundaries
            # Valid row range: [0, num_rows-1]
            # Valid col range: [0, num_cols-1]
            if 0 <= next_row < num_rows and 0 <= next_col < num_cols:
                # Calculate health after taking damage from the next cell
                health_after_damage = current_health - grid[next_row][next_col]

                # Only proceed if player survives and this path offers better health
                if health_after_damage >= 1 and health_after_damage > max_health_at_cell[next_row][next_col]:
                    # Update the maximum health recorded for this cell
                    max_health_at_cell[next_row][next_col] = health_after_damage
                    # Add this position to the queue for further exploration
                    search_queue.append(
                        (next_row, next_col, health_after_damage))

    # If we've exhausted all possibilities without reaching the target
    return False


# Test cases to verify the algorithm works correctly
print("Test Case 1 - Simple path with obstacles:")
# Grid shape visualization (3 rows × 5 columns):
#     Col: 0  1  2  3  4
# Row 0: [0, 1, 0, 0, 0]  <- START at (0,0)=0 damage
# Row 1: [0, 1, 0, 1, 0]
# Row 2: [0, 0, 0, 1, 0]  <- TARGET at (2,4)=0 damage
print(can_reach_end_bfs(
    [[0, 1, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 1, 0]], 1))  # Expected: True

# print("\nTest Case 2 - Challenging path with higher damage:")
# Grid shape visualization (4 rows × 6 columns):
#     Col: 0  1  2  3  4  5
# Row 0: [0, 1, 1, 0, 0, 0]  <- START at (0,0)=0 damage  [(-1, 0), (1, 0), (0, -1), (0, 1)]
# Row 1: [1, 0, 1, 0, 0, 0]
# Row 2: [0, 1, 1, 1, 0, 1]
# Row 3: [0, 0, 1, 0, 1, 0]  <- TARGET at (3,5)=0 damage
print(can_reach_end_bfs([[0, 1, 1, 0, 0, 0], [1, 0, 1, 0, 0, 0], [
      0, 1, 1, 1, 0, 1], [0, 0, 1, 0, 1, 0]], 3))  # Expected: False

print("\nTest Case 3 - High damage grid with sufficient health:")
# Grid shape visualization (3 rows × 3 columns):
#     Col: 0  1  2
# Row 0: [1, 1, 1]  <- START at (0,0)=1 damage
# Row 1: [1, 0, 1]
# Row 2: [1, 1, 1]  <- TARGET at (2,2)=1 damage
# # Expected: True
print(can_reach_end_bfs([[1, 1, 1], [1, 0, 1], [1, 1, 1]], 5))
