using System;
using System.Collections.Generic;

// This example demonstrates a limitation of unconstrained generics in C#.
// The repository class is generic, but it does not enforce any requirements on the type parameter T.
// This means you can use it with any type, even if that type does not have the properties you expect.

// Example entity without Id property
public class MyFilm {
    public string Name { get; set; } = string.Empty;
}

// Example entity with Id property
public class MyBook {
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
}

// Generic repository class
// Note: No constraint on T, so T can be any type
public class ItemsRepository1<T> {
    private readonly List<T> _items = new();

    // Save method adds the item to the repository
    // If you try to access a property like Id here, it will only work for types that actually have it
    public void Save(T item) {
        // What if T doesn't have Id?
        // The following line would cause a compile error if T does not have an Id property:
        // Console.WriteLine($"Saved item with Id {item.Id}"); // Compile error for Film
        _items.Add(item);
    }

    // Returns all items in the repository
    public IEnumerable<T> GetAll() => _items;
}

// Demonstrates the problem: lack of type safety for expected properties
public static class ConstraintProblem {
    public static void Run() {
        // Repository for MyBook (has Id)
        var bookRepo = new ItemsRepository1<MyBook>();
        var book = new MyBook { Id = 1, Title = "C# in Depth" };
        bookRepo.Save(book);
        foreach (var b in bookRepo.GetAll())
            Console.WriteLine($"Book: {b.Title}, Id: {b.Id}"); // Works fine

        // Repository for MyFilm (no Id property)
        var filmRepo = new ItemsRepository1<MyFilm>();
        var film = new MyFilm { Name = "Inception" };
        filmRepo.Save(film);
        foreach (var f in filmRepo.GetAll())
        {
            // The following line would cause a compile-time error:
            // Console.WriteLine($"Movie: {f.Name}, Id: {f.Id}"); // ERROR: MyFilm does not have Id
            Console.WriteLine($"Movie: {f.Name}"); // Only Name is available
        }

        // Uncommenting the line below will cause a compile-time error:
        // foreach (var item in filmRepo.GetAll())
        //     Console.WriteLine($"Id: {item.Id}"); // ERROR: MyFilm does not have Id

        // This demonstrates that unconstrained generics are not type safe for expected properties.
        // You cannot guarantee that T has an Id property, leading to compile-time errors if you try to access it.
    }
}
