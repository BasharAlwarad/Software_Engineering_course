using System;
using System.Collections.Generic;
using System.Data.Common;

// Example: Solution using constraints
public abstract class BaseEntity {
    public int Id { get; set; }
}
// Example entity without Id property
public class MyFilm2 {
    public string Name { get; set; } = string.Empty;
}

public class MyBook2 : BaseEntity {
    public string Title { get; set; } = string.Empty;
}
public class ItemsRepository2<T> where T : BaseEntity {
    private readonly List<T> _items = new();
    public void Save(T entity) {
        _items.Add(entity);
        Console.WriteLine($"Saved entity of type {typeof(T).Name} with Id {entity.Id}");
    }
    public IEnumerable<T> GetAll() => _items;
}

public static class ConstraintSolution {
    public static void Run() {
        var bookRepo = new ItemsRepository2<MyBook2>();
        var book = new MyBook2 { Id = 1, Title = "C# in Depth" };
        bookRepo.Save(book);

        var film = new MyFilm { Name = "Inception" };
        // Film entity does not inherit from BaseEntity this will create an error
        // bookRepo.Save(film);
        foreach (var b in bookRepo.GetAll())
            Console.WriteLine($"Book: {b.Title}");
        // var movieRepo = new F_Repository<Movie>(); // Compile error: Movie does not inherit Entity
    }
}
