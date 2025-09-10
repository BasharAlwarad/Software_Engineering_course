using System;

// EventArgs subclass to hold event data for the doorbell
public class DoorbellEventArgs : EventArgs {
    public string Message { get; }
    public DoorbellEventArgs(string message) => Message = message;
}

// Door class publishes an event when the doorbell rings
class Door {
    // Event declaration using EventHandler<T>
    public event EventHandler<DoorbellEventArgs>? DoorbellRang;
    // Method to ring the doorbell and notify subscribers
    public void Ring(string msg) {
        Console.WriteLine($"Door: {msg}");
        DoorbellRang?.Invoke(this, new DoorbellEventArgs(msg));
    }
}

// Person class subscribes to the doorbell event
class Person {
    public string Name { get; set; } = ""; // Default value to avoid warning
    // Event handler method
    public void OnDoorbell(object? sender, DoorbellEventArgs e) {
        Console.WriteLine($"{Name} heard: {e.Message}");
    }
}

public static class EventsDoorbellExample {
    public static void Run() {
        Door door = new Door();
        Person alice = new Person { Name = "Alice" };
        Person bob = new Person { Name = "Bob" };
        // Subscribe to the event
        door.DoorbellRang += alice.OnDoorbell;
        door.DoorbellRang += bob.OnDoorbell;
        // Ring the doorbell
        door.Ring("Someone is at the door!");
        // Unsubscribe bob
        door.DoorbellRang -= bob.OnDoorbell;
        door.Ring("Delivery arrived!");
        Console.WriteLine("Events let objects notify subscribers when something happens.");
    }
}
