using System;

// Simple version: Chef calls specific methods directly, no delegates or Func
class ChefSimple {
    // Prepare method takes an ingredient and a string for the cooking method
    public string Prepare(string ingredient, string method) {
        if (method == "grill")
            return Grill(ingredient);
        else if (method == "boil")
            return Boil(ingredient);
        else if (method == "fry")
            return Fry(ingredient);
        else
            return $"Unknown method for {ingredient}";
    }
    // Direct methods for each cooking style
    public string Grill(string ingredient) => $"Grilled {ingredient}";
    public string Boil(string ingredient) => $"Boiled {ingredient}";
    public string Fry(string ingredient) => $"Fried {ingredient}";
}

public static class SimpleChefExample {
    public static void Run() {
        ChefSimple chef = new ChefSimple();
        Console.WriteLine(chef.Prepare("Chicken", "grill")); // Grilled Chicken
        Console.WriteLine(chef.Prepare("Eggs", "boil"));    // Boiled Eggs
        Console.WriteLine(chef.Prepare("Fish", "fry"));     // Fried Fish
    }
}
