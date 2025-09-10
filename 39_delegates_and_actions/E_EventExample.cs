using System;

// Delegate for cooking methods
public delegate void CookDelegate(string ingredient);

// EventArgs subclass to hold event data for the dish
public class DishEventArgs : EventArgs {
    public string Dish { get; }
    public string Method { get; }
    public DishEventArgs(string dish, string method) {
        Dish = dish;
        Method = method;
    }
}

// Chef class raises an event when a dish is prepared
class ChefEvent {
    public event EventHandler<DishEventArgs>? DishPrepared;
    // Cooking methods as delegates
    public CookDelegate? Grill;
    public CookDelegate? Boil;
    public CookDelegate? Fry;
    public ChefEvent() {
        Grill = ingredient => Console.WriteLine($"Grilled {ingredient}");
        Boil = ingredient => Console.WriteLine($"Boiled {ingredient}");
        Fry = ingredient => Console.WriteLine($"Fried {ingredient}");
    }
    public void Prepare(string ingredient, string method) {
        if (method == "grill" && Grill != null)
            Grill(ingredient);
        else if (method == "boil" && Boil != null)
            Boil(ingredient);
        else if (method == "fry" && Fry != null)
            Fry(ingredient);
        else
            Console.WriteLine($"Unknown method for {ingredient}");
        // Raise the event
        DishPrepared?.Invoke(this, new DishEventArgs(ingredient, method));
    }
}

// Subscriber classes react to the event
class Waiter {
    public void OnDishPrepared(object? sender, DishEventArgs e) {
        Console.WriteLine($"Waiter: Serving {e.Method} {e.Dish} to the customer.");
    }
}
class Customer {
    public void OnDishPrepared(object? sender, DishEventArgs e) {
        Console.WriteLine($"Customer: Enjoying {e.Method} {e.Dish}!");
    }
}

public static class EventExample {
    public static void Run() {
        ChefEvent chef = new ChefEvent();
        Waiter waiter = new Waiter();
        Customer customer = new Customer();
        // Subscribe to the event
        chef.DishPrepared += waiter.OnDishPrepared;
        chef.DishPrepared += customer.OnDishPrepared;
        // Prepare dishes
        chef.Prepare("Chicken", "grill");
        chef.Prepare("Eggs", "boil");
        chef.Prepare("Fish", "fry");
    }
}
