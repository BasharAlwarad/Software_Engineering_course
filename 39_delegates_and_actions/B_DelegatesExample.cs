using System;

// Delegate declaration: describes a method that takes a string and returns a string
public delegate string Cook(string ingredient);

// Chef class uses delegates to prepare food in different ways
class Chef {
    // Prepare method takes an ingredient and a delegate (cooking method)
    public string Prepare(string ingredient, Cook cookMethod) {
        return cookMethod(ingredient); // Calls the passed-in method
    }
}

public static class DelegatesExample {
    public static void Run() {
        Chef chef = new Chef();
        // Assign static methods to delegate variables
        // static global::System.String grill(global::System.String ingredient) => $"Grilled {ingredient}";
        // static global::System.String boil(global::System.String ingredient) => $"Boil {ingredient}";
        Cook grill = ingredient => $"Grilled {ingredient}";
        Cook boil = ingredient => $"Boil {ingredient}";
        // Use delegates to prepare food
        Console.WriteLine(chef.Prepare("Chicken", grill)); // Grilled Chicken
        Console.WriteLine(chef.Prepare("Eggs", boil));    // Boiled Eggs
        // Inline delegate using lambda
        Console.WriteLine(chef.Prepare("Fish", ingredient => $"Fried {ingredient}")); // Fried Fish
    }
}
