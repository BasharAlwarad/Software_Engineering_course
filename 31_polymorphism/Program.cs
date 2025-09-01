// Example: Polymorphism in C#
// This file demonstrates class inheritance, method overriding, overloading, operator overloading, and sealed classes.

using System;

// Base class for all animals
class Animal
{
    public string Name { get; set; } // Animal's name
    public string Species { get; set; } // Animal's species

    // Constructor
    public Animal(string name, string species)
    {
        Name = name;
        Species = species;
    }

    // Virtual method: can be overridden in derived classes
    public virtual void Move() { Console.WriteLine($"{Name} the {Species} moves"); }
    public virtual void Speak() { Console.WriteLine($"{Name} the {Species} makes a sound"); }

    // Static method: belongs to the class, not an instance
    public static void Info() { Console.WriteLine("All animals can move and make sounds."); }

    // Method overloading: same method name, different parameters
    public void Eat() { Console.WriteLine($"{Name} the {Species} eats"); }
    public void Eat(string food) { Console.WriteLine($"{Name} the {Species} eats {food}"); }
}

// SeaAnimal inherits from Animal
class SeaAnimal : Animal
{
    public SeaAnimal(string name, string species) : base(name, species) { }
    // Override Move and Speak for sea animals
    public override void Move() { Console.WriteLine($"{Name} the {Species} swims"); }
    public override void Speak() { Console.WriteLine($"{Name} the {Species} says blub blub"); }
}

// LandAnimal inherits from Animal
class LandAnimal : Animal
{
    public LandAnimal(string name, string species) : base(name, species) { }
    // Override Move and Speak for land animals
    public override void Move() { Console.WriteLine($"{Name} the {Species} walks"); }
    public override void Speak() { Console.WriteLine($"{Name} the {Species} makes a land animal sound"); }
}

// Lizard inherits from LandAnimal, sealed = cannot be inherited further
sealed class Lizard : LandAnimal
{
    public Lizard(string name) : base(name, "Lizard") { }
    public override void Move() { Console.WriteLine($"{Name} the Lizard crawls"); }
    // Operator overloading: define + for Lizard
    public static Lizard operator +(Lizard a, Lizard b)
    {
        Console.WriteLine($"{a.Name} and {b.Name} the Lizards meet!");
        return new Lizard($"Child of {a.Name} and {b.Name}");
    }
}

// Mammal inherits from LandAnimal
class Mammal : LandAnimal
{
    public Mammal(string name, string species) : base(name, species) { }
    public override void Move() { Console.WriteLine($"{Name} the {Species} runs"); }
    public override void Speak() { Console.WriteLine($"{Name} the {Species} makes a mammal sound"); }
}

// SeaMammal inherits from Mammal
class SeaMammal : Mammal
{
    public SeaMammal(string name, string species) : base(name, species) { }
    public override void Move() { Console.WriteLine($"{Name} the {Species} swims and dives"); }
    public override void Speak() { Console.WriteLine($"{Name} the {Species} sings"); }
}

// Bird inherits from LandAnimal, sealed = cannot be inherited further
sealed class Bird : LandAnimal
{
    public Bird(string name, string species) : base(name, species) { }
    public override void Move() { Console.WriteLine($"{Name} the {Species} flies"); }
    public override void Speak() { Console.WriteLine($"{Name} the {Species} says tweet"); }
}

class Program
{
    static void Main()
    {
        Animal.Info(); // Static method

        Animal a = new Animal("Generic", "Animal");
        a.Move();
        a.Speak();
        a.Eat();
        a.Eat("plants"); // Overloading

        SeaAnimal sa = new SeaAnimal("Nemo", "Fish");
        sa.Move();
        sa.Speak();

        LandAnimal la = new LandAnimal("Leo", "Lion");
        la.Move();
        la.Speak();

        Lizard l1 = new Lizard("Larry");
        Lizard l2 = new Lizard("Lizzy");
        l1.Move();
        var l3 = l1 + l2; // Operator overloading
        l3.Move();

    Mammal m = new Mammal("Manny", "Elephant");
    m.Move(); // Calls Mammal.Move
    m.Speak(); // Calls Mammal.Speak

    // Create a SeaMammal
    SeaMammal sm = new SeaMammal("Willy", "Whale");
    sm.Move(); // Calls SeaMammal.Move
    sm.Speak(); // Calls SeaMammal.Speak

    // Create Birds (sealed)
    Bird b = new Bird("Eddie", "Eagle");
    b.Move(); // Calls Bird.Move
    b.Speak(); // Calls Bird.Speak
    Bird c = new Bird("Chirpy", "Chicken");
    c.Move();
        c.Speak();
    }
}
