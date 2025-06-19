class Book:
    def __init__(self, name, author, release_date):
        self.name = name
        self.author = author
        self.release_date = release_date
        self.read = False

    def __str__(self):
        return f"'{self.name}' by {self.author}, released in {self.release_date} - {'Read' if self.read else 'Not Read'}"


class BookCollection:
    def __init__(self, books=None):
        if books is None:
            self.books = []
        else:
            if not all(isinstance(book, Book) for book in books):
                raise TypeError(
                    "All items in the book collection must be instances of Book.")
            self.books = books

    def add_book(self, book):
        if not isinstance(book, Book):
            raise TypeError("Only Book instances can be added.")
        self.books.append(book)

    def mark_as_read(self, book_name):
        for book in self.books:
            if book.name == book_name:
                book.read = True
                print(f"Marked '{book.name}' as read.")
                return
        print(f"Book '{book_name}' not found in the collection.")

    def list_books(self):
        if not self.books:
            print("No books in the collection.")
        else:
            for book in self.books:
                print(book)


book1 = Book("1984", "George Orwell", 1949)
book2 = Book("Brave New World", "Aldous Huxley", 1932)

collection = BookCollection([book1])

collection.add_book(book2)

print("\nBook collection:")
collection.list_books()

collection.mark_as_read("1984")

print("\nAfter marking as read:")
collection.list_books()
