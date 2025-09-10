using System;

// Func version of Chef and Cook example
// Func<string, string> replaces the custom Cook delegate
class ChefFunc {
    // Prepare method takes an ingredient and a Func delegate (cooking method)
    public string Prepare(string ingredient, Func<string, string> cookMethod) {
        return cookMethod(ingredient); // Calls the passed-in method
    }
}

public static class FuncExample {
    public static void Run() {
        ChefFunc chef = new ChefFunc();
        // Assign cooking methods to Func variables
        Func<string, string> grill = ingredient => $"Grilled {ingredient}";
        Func<string, string> boil = ingredient => $"Boiled {ingredient}";
        // Use Func delegates to prepare food
        Console.WriteLine(chef.Prepare("Chicken", grill)); // Grilled Chicken
        Console.WriteLine(chef.Prepare("Eggs", boil));    // Boiled Eggs
        // Inline lambda for frying
        Console.WriteLine(chef.Prepare("Fish", ingredient => $"Fried {ingredient}")); // Fried Fish
    }
}
