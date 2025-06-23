class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

    def __repr__(self):
        return "<Node data: %s>" % self.data


class LinedList:
    """
    Singly linked list
    """

    def __init__(self):
        self.head = None

    def __repr__(self):
        """
        Return a string representing the list
        Takes O(n)
        """
        nodes = []
        current = self.head
        while current:
            if current == self.head:
                nodes.append("[Heads: %s]" % current.data)
            elif current.next == None:
                nodes.append("[Tail: %s]" % current.data)
            else:
                nodes.append("[%s]" % current.data)
            current = current.next
        return "-> ".join(nodes)

    def isEmpty(self):
        return self.head == None

    def size(self):
        """
        returns the number of nodes in a list
        takes O(n)
        """
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count

    def search(self, key):
        """
        Search for the first node containing the data matching the key
        Takes O(n)
        """
        current = self.head
        while current:
            if current.data == key:
                return current
            else:
                current = current.next
        return None

    def insert(self, data, index):
        """
        Inserting a new node at index position
        insertion takes O(1)
        searching takes O(n)
        Takes overall O(n)
        """
        if index == 0:
            self.add_start(data)
        if index > 0:
            new_node = Node(data)
            position = index
            current = self.head
            while position > 1:
                current = new_node.next
                position -= 1
            prev_node = current
            next_node = current.next
            prev_node.next = new_node
            new_node.next = next_node

    def remove(self, key):
        """
        Removes the first node containing data matching the key
        Returns the key or None if the key dos't exist
        Takes O(n)
        """
        current = self.head
        previous = None
        found = False
        while current and not found:
            if current.data == key and current is self.head:
                found = True
                self.head = current.next
            elif current.data == key:
                found = True
                previous.next = current.next
            else:
                previous = current
                current = current.next
        return current

    def add_start(self, data):
        """
        Adds a new ode containing data at the head of the list
        takes O(1)
        """
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node


n1 = Node(10)
n2 = Node(20)
n3 = Node(30)
n4 = Node(40)
n5 = Node(50)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
print(n1)
print(n2)
print(n1.next.next.next.next.next)

l1 = LinedList()

print(l1.isEmpty())
l1.head = n1
print(l1.size())
l1.add_start(6)
l1.insert(100, 0)
l1.insert(100, 1)
print(l1.size())
print(l1.search(6))
print(l1.search(20))
print(l1)
