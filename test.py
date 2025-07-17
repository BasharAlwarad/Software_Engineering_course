class UndirectedGraph:
    def __init__(self, labels):
        self.labels = labels                # ["A", "B", "C", "D", "E", "F"]
        self.num_vertices = len(labels)     # 6
        # [[0], [0], [0],...]
        self.adj_matrix = [
            [0] * self.num_vertices for _ in range(self.num_vertices)]

    def label_to_index(self, label):
        if label not in self.labels:  # False or True
            raise ValueError(f"Label {label} not found in the graph.")
        return self.labels.index(label)  # e.g "A" -> 0 | "B" -> 1 | ...

    def add_edge(self, label1, label2, weight=1):  # the vertex, the neighbors, the wight
        u = self.label_to_index(label1)  # index of first neighbor
        v = self.label_to_index(label2)  # index of second neighbor
        self.adj_matrix[u][v] = weight  # set weight for edge (label1, label2)
        # since it's undirected, set weight for edge (label2, label1)
        self.adj_matrix[v][u] = weight

    def remove_edge(self, label1, label2):  # remove edge between two vertices
        u = self.label_to_index(label1)  # index of first neighbor
        v = self.label_to_index(label2)  # index of second neighbor
        self.adj_matrix[u][v] = 0  # remove edge (label1, label2)
        self.adj_matrix[v][u] = 0  # remove edge (label2, label1)

    def print_matrix(self):  # print the adjacency matrix with labels
        header = "   " + "  ".join(self.labels)  # e.g "   A  B  C  D  E  F"
        print(header)
        for i, row in enumerate(self.adj_matrix):  # iterate through each row
            row_str = "  ".join(str(x)
                                for x in row)  # convert each row to a string
            # print the row with its label
            print(f"{self.labels[i]}  {row_str}")


# Create an undirected graph with these labels
labels = ["A", "B", "C", "D", "E", "F"]  # Vertex labels
graph = UndirectedGraph(labels)
matrix = [                              # Adjacency matrix representation
    [0, 4, 5, 0, 0, 0],
    [4, 0, 11, 9, 7, 0],
    [5, 11, 0, 0, 3, 0],
    [0, 9, 0, 0, 13, 2],
    [0, 7, 3, 13, 0, 6],
    [0, 0, 0, 2, 6, 0]
]

# Populate the graph's adjacency matrix directly for demonstration
graph.adj_matrix = matrix
print("Adjacency Matrix of the Undirected Graph:")
graph.print_matrix()
# Dijkstra's


def dijkstra(graph, start_label):
    """
    Compute shortest paths from 'start_label' to all other vertices
    in a graph with non-negative edge weights.
    Returns a dictionary: { label: cost }
    """
    # Basic variables
    labels = graph.labels  # e.g ["A", "B", "C", "D", "E", "F"]
    n = graph.num_vertices  # 6 vertices
    # Initialize distances with infinity e.g [inf, inf, inf, inf, inf, inf]
    dist = [float('inf')] * n
    # Track visited vertices e.g [False, False, False, False, False, False]
    visited = [False] * n

    start_index = labels.index(start_label)  # Convert start label to index 0
    dist[start_index] = 0  # distance from start to itself is 0

    for _ in range(n):  # Repeat for each vertex 6 times
        # 1) Pick the unvisited vertex with the smallest dist
        min_dist = float('inf')  # Initialize minimum distance to infinity
        min_vertex = -1  # Initialize the minimum vertex
        for i in range(n):  # Iterate through all vertices
            # if vertex is unvisited and has a smaller distance
            if not visited[i] and dist[i] < min_dist:
                min_dist = dist[i]  # update minimum distance
                min_vertex = i  # update minimum vertex

        if min_vertex == -1:  # no reachable unvisited vertices left
            break  # stop the loop if no vertex is found

        # 2) Mark it visited
        visited[min_vertex] = True  # mark the vertex as visited

        # 3) Relax edges from this vertex
        for neighbor in range(n):  # Iterate through all neighbors
            # Get the weight of the edge
            weight = graph.adj_matrix[min_vertex][neighbor]
            # if there is an edge and neighbor is unvisited
            if weight > 0 and not visited[neighbor]:
                new_dist = dist[min_vertex] + weight  # calculate new distance
                # if the new distance is smaller than the current distance
                if new_dist < dist[neighbor]:
                    dist[neighbor] = new_dist  # update the distance

    # Convert dist array to a label->distance dictionary
    result = {}  # Initialize the result dictionary
    for i, label in enumerate(labels):  # Map labels to their distances
        # If distance is infinity, set it to None
        result[label] = dist[i] if dist[i] != float('inf') else None
    return result  # Return the final result


# Run Dijkstra from 'A'
print("Shortest path costs from A:\n", dijkstra(graph, "A"))
