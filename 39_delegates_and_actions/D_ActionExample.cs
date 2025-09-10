using System;

// Action version of Chef and cook example
// Action<string> replaces Func<string, string> and Cook delegate, but does not return a value
class ChefAction {
    // Prepare method takes an ingredient and an Action delegate (cooking method)
    public void Prepare(string ingredient, Action<string> cookMethod) {
        cookMethod(ingredient); // Calls the passed-in method
    }
}

public static class ActionExample {
    public static void Run() {
        ChefAction chef = new ChefAction();
        // Assign cooking methods to Action variables
        Action<string> grill = ingredient => Console.WriteLine($"Grilled {ingredient}");
        Action<string> boil = ingredient => Console.WriteLine($"Boiled {ingredient}");
        // Use Action delegates to prepare food
        chef.Prepare("Chicken", grill); // Grilled Chicken
        chef.Prepare("Eggs", boil);     // Boiled Eggs
        // Inline lambda for frying
        chef.Prepare("Fish", ingredient => Console.WriteLine($"Fried {ingredient}")); // Fried Fish
    }
}
