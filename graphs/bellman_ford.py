
# `DirectedGraph` Class (with Comments)
class DirectedGraph:
    def __init__(self, labels):
        self.labels = labels  # ["A", "B", "C", "D", "E"]
        self.num_vertices = len(labels)  # 5
        self.adj_matrix = [  # [[0], [0], [0], [0], [0]]
            [0] * self.num_vertices for _ in range(self.num_vertices)]

    def label_to_index(self, label):
        if label not in self.labels:  # if e.g "Y" -> Error
            raise ValueError(f"Label {label} not found in the graph.")
        # Convert a vertex to index e.g "A" -> 0
        return self.labels.index(label)

    def add_edge(self, label_from, label_to, weight=1):
        # Add a directed edge from label_from -> label_to with the given weight
        u = self.label_to_index(label_from)  # From vertex index
        v = self.label_to_index(label_to)    # To vertex index
        self.adj_matrix[u][v] = weight       # Only one direction is updated

    def remove_edge(self, label_from, label_to):
        # Remove a directed edge from label_from -> label_to
        u = self.label_to_index(label_from)
        v = self.label_to_index(label_to)
        self.adj_matrix[u][v] = 0            # Reset edge to 0 (no connection)

    def print_matrix(self):
        # Pretty print the adjacency matrix with labels
        header = "    " + "  ".join(self.labels)  # e.g., "    A  B  C  D  E"
        print(header)
        for i, row in enumerate(self.adj_matrix):
            row_str = "  ".join(str(x) for x in row)
            print(f"{self.labels[i]}   {row_str}")

# Graph Setup with Adjacency Matrix (Directed & Weighted)


# Create a directed graph with vertex labels
labels = ["A", "B", "C", "D", "E"]
graph = DirectedGraph(labels)
# Pre-defined adjacency matrix
# This includes negative weights and no symmetry (it's directed)
matrix = [
    # v=0   v=1 v=2 v=3 v=4
    [1,  1,  4,  1,  5],  # u  = 0
    [1,  1, -4,  1,  1],  # u  = 1
    [-3,  1,  1,  1,  1],  # u  = 2
    [4,  1,  7,  1,  3],  # u  = 3
    [1,  2,  3,  1,  1]  # u  = 4
]
# matrix = [
#     # v=0   v=1 v=2 v=3 v=4
#     [0,  0,  4,  0,  5],  # u  = 0
#     [0,  0, -4,  0,  0],  # u  = 1
#     [-3,  0,  0,  0,  0],  # u  = 2
#     [4,  0,  7,  0,  3],  # u  = 3
#     [0,  2,  3,  0,  0]  # u  = 4
# ]

# print(matrix[1][4])
# Manually populate the adjacency matrix for demonstration
graph.adj_matrix = matrix

# Print the matrix
print("Adjacency Matrix of the Directed Graph:")
graph.print_matrix()

# Bellman-Ford Algorithm with Full Explanation


def bellman_ford(graph, start_label):
    """
    Compute shortest paths from 'start_label' to all other vertices.
    Handles graphs with negative weights.
    Also detects negative-weight cycles (if reachable from start vertex).

    Returns:
      {
        'distances': { label: cost (or None if unreachable) },
        'negative_cycle': bool (True if a negative cycle is reachable)
      }
    """
    labels = graph.labels  # ["A", "B", "C", "D", "E"]
    n = graph.num_vertices  # 5

    # Step 1: Initialization
    dist = [float('inf')] * n  # [inf,inf,inf,inf,inf]
    start_index = labels.index(start_label)
    # Distance to start vertex is 0 e.g "A" index 0
    dist[start_index] = 0  # [0,inf,inf,inf,inf]

    # Step 2: Relax all edges (n - 1) times
    # This guarantees shortest paths if no negative cycles exist
    for _ in range(n - 1):          # iterate 5 - 1 -> 4 times (to skip the first vertex)
        for u in range(n):          # u = 0
            for v in range(n):      # v = 0
                weight = graph.adj_matrix[u][v]  # matrix[0][0] -> 0
                if weight != 0 and dist[u] != float('inf'):  # false weight = 0
                    new_dist = dist[u] + weight  # 0 + 0
                    if new_dist < dist[v]:  # 0 < 0 -> False
                        dist[v] = new_dist  # Update if shorter path found

    # Step 3 (Optional): Detect negative-weight cycles
    # If we can still relax an edge, then a negative cycle exists
    negative_cycle = False
    for u in range(n):  # u = 0
        for v in range(n):  # v = 0
            weight = graph.adj_matrix[u][v]  # matrix[0][0] -> 0
            if weight != 0 and dist[u] != float('inf'):  # false weight = 0
                if dist[u] + weight < dist[v]:  # 0 + 0 < 0 -> False
                    negative_cycle = True  # Negative cycle is reachable
                    break
        if negative_cycle:
            break

    # Step 4: Convert distances to dictionary with labels
    distance_dict = {}
    for i, label in enumerate(labels):  # i = 0 label = "A"
        #                 0         0         0
        distance_dict[label] = dist[i] if dist[i] != float('inf') else None
    print(distance_dict)

    return {
        'distances': distance_dict,
        'negative_cycle': negative_cycle
    }

# Run Bellman-Ford from `"A"` and Print Result


# Run Bellman-Ford from vertex 'A'
result = bellman_ford(graph, "A")
# result = bellman_ford(graph, "D")

# Print shortest path costs from A
print("Shortest path costs from A:")
for vertex, cost in result['distances'].items():
    print(f"{vertex}: cost = {cost}")

# Inform about negative cycle detection
if result['negative_cycle']:
    print("A negative cycle is reachable from A.")
else:
    print("No negative cycle is reachable from A.")
print(float("inf") + 1)


# class X:
#     def __init__(self, xyz):
#         self.hey = "Hey"
#         self.xyz = xyz

#     def adfsd(self):
#         return self.xyz


# # obj
# x = X("Hello from the class")

# x.name = "bashar"
# x.age = 42

# print(x.name)
# print(x.age)
# print(x.hey)
# print(x.adfsd())

# # dict
# y = {"name": "bashar"}
# y["age"] = 42
# print(y["name"])
# print(y["age"])
# # CRUD
