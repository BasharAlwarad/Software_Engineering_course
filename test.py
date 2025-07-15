import matplotlib.pyplot as plt
import math


class UndirectedGraph:
    def __init__(self, labels):
        """
        Initialize an undirected graph using the provided vertex labels.
        The number of vertices is derived from the length of the labels list.
        An adjacency matrix is created with all entries set to 0.
        """
        self.labels = labels  # e.g., ["A", "B", "C", "D"]
        self.num_vertices = len(labels)
        self.adj_matrix = [
            [0] * self.num_vertices for _ in range(self.num_vertices)]

    def label_to_index(self, label):
        """Convert a vertex label to its corresponding index in the matrix."""
        if label not in self.labels:
            raise ValueError(f"Label {label} not found in the graph.")
        return self.labels.index(label)

    def add_edge(self, label1, label2, weight=1):
        """
        Add an edge between the vertices with labels 'label1' and 'label2'
        using the specified weight. Because the graph is undirected,
        the matrix is updated symmetrically.
        """
        u = self.label_to_index(label1)
        v = self.label_to_index(label2)
        self.adj_matrix[u][v] = weight
        self.adj_matrix[v][u] = weight

    def remove_edge(self, label1, label2):
        """
        Remove the edge between the vertices with labels 'label1' and 'label2'.
        Both entries in the adjacency matrix are set to 0.
        """
        u = self.label_to_index(label1)
        v = self.label_to_index(label2)
        self.adj_matrix[u][v] = 0
        self.adj_matrix[v][u] = 0

    def print_matrix(self):
        """Print the adjacency matrix with vertex labels."""
        # Print header row
        header = "   " + "  ".join(self.labels)
        print(header)
        # Print each row prefixed with the corresponding label
        for i, row in enumerate(self.adj_matrix):
            row_str = "  ".join(str(x) for x in row)
            print(f"{self.labels[i]}  {row_str}")

    def __repr__(self):
        return f"{self.adj_matrix}"


# Define vertex labels
labels = ["A", "B", "C", "D"]

# Create an undirected graph with these labels
graph = UndirectedGraph(labels)

# Add some edges between the vertices
graph.add_edge("A", "B")
graph.add_edge("A", "C")
graph.add_edge("A", "D")
graph.add_edge("B", "C")

print("Adjacency Matrix of the Undirected Graph:")
graph.print_matrix()

num_vertices = len(labels)
adj_matrix = graph.adj_matrix

positions = {}
offset = math.pi
for i in range(num_vertices):
    angle = 2 * math.pi * i / num_vertices + offset
    positions[i] = (math.cos(angle), math.sin(angle))

fig, ax = plt.subplots(figsize=(6, 6))

# Plot vertices
for i in range(num_vertices):
    x, y = positions[i]
    ax.scatter(x, y, s=300, color="lightblue", zorder=3)
    ax.text(x, y, labels[i], fontsize=12, ha="center", va="center", zorder=4)

# Plot edges, handling loops explicitly
for i in range(num_vertices):
    for j in range(i, num_vertices):  # Include diagonal for loops
        weight = adj_matrix[i][j]
        if weight != 0:
            start, end = positions[i], positions[j]
            if i == j:  # loop
                loop = plt.Circle(
                    (start[0], start[1] + 0.15), 0.15, color='gray', fill=False, lw=2)
                ax.add_artist(loop)
                ax.text(start[0], start[1] + 0.35, str(weight),
                        color="red", fontsize=10, ha="center")
            else:
                ax.plot([positions[i][0], positions[j][0]], [
                        positions[i][1], positions[j][1]], color="gray", lw=2)
                mid_x = (positions[i][0] + positions[j][0]) / 2
                mid_y = (positions[i][1] + positions[j][1]) / 2
                ax.text(mid_x, mid_y, str(weight), color="red",
                        fontsize=10, ha="center", va="center")
padding = 0.5
ax.set_xlim(-1 - padding, 1 + padding)
ax.set_ylim(-1 - padding, 1 + padding)
ax.set_aspect("equal")
plt.title("Undirected Graph")
plt.axis("off")
plt.show()

print(graph)
