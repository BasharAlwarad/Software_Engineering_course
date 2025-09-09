using System;
using System.IO;

// Section 1: Delegates (Real-life: Chef preparing food)
public delegate string Cook(string ingredient);
class Chef {
    public string Prepare(string ingredient, Cook cookMethod) {
        return cookMethod(ingredient);
    }
    public static string Grill(string ingredient) => $"Grilled {ingredient}";
    public static string Boil(string ingredient) => $"Boiled {ingredient}";
}

// Section 2: Func & Action (Real-life: Price calculator & Logger)
class PriceCalculator {
    public decimal Calculate(decimal price, Func<decimal, decimal> strategy) {
        return strategy(price);
    }
}
class Logger {
    public void Log(string message, Action<string> logAction) {
        logAction(message);
    }
}

// Section 3: Events (Real-life: Doorbell & Subscribers)
public class DoorbellEventArgs : EventArgs {
    public string Message { get; }
    public DoorbellEventArgs(string message) => Message = message;
}
class Door {
    public event EventHandler<DoorbellEventArgs>? DoorbellRang;
    public void Ring(string msg) {
        Console.WriteLine($"Door: {msg}");
        DoorbellRang?.Invoke(this, new DoorbellEventArgs(msg));
    }
}
class Person {
    public string Name { get; set; }
    public void OnDoorbell(object? sender, DoorbellEventArgs e) {
        Console.WriteLine($"{Name} heard: {e.Message}");
    }
}

class Program {
    public static void Main(string[] args) {
        Console.WriteLine("--- Section 1: Delegates ---");
        Chef chef = new Chef();
        Cook grill = Chef.Grill;
        Cook boil = Chef.Boil;
        Console.WriteLine(chef.Prepare("Chicken", grill));
        Console.WriteLine(chef.Prepare("Eggs", boil));
        // Inline delegate
        Console.WriteLine(chef.Prepare("Fish", ingredient => $"Fried {ingredient}"));
        Console.WriteLine("Delegates let you pass methods as parameters.");

        Console.WriteLine("\n--- Section 2: Func & Action ---");
        PriceCalculator calc = new PriceCalculator();
        Func<decimal, decimal> halfOff = p => p / 2;
        Func<decimal, decimal> addTax = p => p * 1.2m;
        Console.WriteLine($"Half off: {calc.Calculate(100, halfOff)}");
        Console.WriteLine($"Add tax: {calc.Calculate(100, addTax)}");
        Logger logger = new Logger();
        logger.Log("Hello, Console!", msg => Console.WriteLine($"Console: {msg}"));
        logger.Log("Hello, File!", msg => File.AppendAllText("log.txt", msg + "\n"));
        Console.WriteLine("Func returns a value, Action does not.");

        Console.WriteLine("\n--- Section 3: Events ---");
        Door door = new Door();
        Person alice = new Person { Name = "Alice" };
        Person bob = new Person { Name = "Bob" };
        door.DoorbellRang += alice.OnDoorbell;
        door.DoorbellRang += bob.OnDoorbell;
        door.Ring("Someone is at the door!");
        door.DoorbellRang -= bob.OnDoorbell;
        door.Ring("Delivery arrived!");
        Console.WriteLine("Events let objects notify subscribers when something happens.");
    }
}