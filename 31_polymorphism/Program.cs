// See https://aka.ms/new-console-template for more information
using System;

class Animal
{
    public string Name { get; set; }
    public string Species { get; set; }
    public Animal(string name, string species)
    {
        Name = name;
        Species = species;
    }
    public virtual void Move() { Console.WriteLine($"{Name} the {Species} moves"); }
    public virtual void Speak() { Console.WriteLine($"{Name} the {Species} makes a sound"); }
    public static void Info() { Console.WriteLine("All animals can move and make sounds."); }
    // Overloading
    public void Eat() { Console.WriteLine($"{Name} the {Species} eats"); }
    public void Eat(string food) { Console.WriteLine($"{Name} the {Species} eats {food}"); }
}

class SeaAnimal : Animal
{
    public SeaAnimal(string name, string species) : base(name, species) { }
    public override void Move() { Console.WriteLine($"{Name} the {Species} swims"); }
    public override void Speak() { Console.WriteLine($"{Name} the {Species} says blub blub"); }
}

class LandAnimal : Animal
{
    public LandAnimal(string name, string species) : base(name, species) { }
    public override void Move() { Console.WriteLine($"{Name} the {Species} walks"); }
    public override void Speak() { Console.WriteLine($"{Name} the {Species} makes a land animal sound"); }
}

sealed class Lizard : LandAnimal
{
    public Lizard(string name) : base(name, "Lizard") { }
    public override void Move() { Console.WriteLine($"{Name} the Lizard crawls"); }
    // Operator overloading
    public static Lizard operator +(Lizard a, Lizard b)
    {
        Console.WriteLine($"{a.Name} and {b.Name} the Lizards meet!");
        return new Lizard($"Child of {a.Name} and {b.Name}");
    }
}


class Mammal : LandAnimal
{
    public Mammal(string name, string species) : base(name, species) { }
    public override void Move() { Console.WriteLine($"{Name} the {Species} runs"); }
    public override void Speak() { Console.WriteLine($"{Name} the {Species} makes a mammal sound"); }
}

class SeaMammal : Mammal
{
    public SeaMammal(string name, string species) : base(name, species) { }
    public override void Move() { Console.WriteLine($"{Name} the {Species} swims and dives"); }
    public override void Speak() { Console.WriteLine($"{Name} the {Species} sings"); }
}

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
        m.Move();
        m.Speak();

        SeaMammal sm = new SeaMammal("Willy", "Whale");
        sm.Move();
        sm.Speak();

        Bird b = new Bird("Eddie", "Eagle");
        b.Move();
        b.Speak();
        Bird c = new Bird("Chirpy", "Chicken");
        c.Move();
        c.Speak();
    // ...existing code...
    }
}
