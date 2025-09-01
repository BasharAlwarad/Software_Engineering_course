// See https://aka.ms/new-console-template for more information
using System;

using System;

// Animal hierarchy (simplified from 31_polymorphism)
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
}

// Interfaces for animal behavior
interface IPredator { void Hunt(); }
interface IPrey { void Flee(); }

class Lion : Animal, IPredator
{
    public Lion(string name) : base(name, "Lion") { }
    public override void Speak() { Console.WriteLine($"{Name} the Lion roars"); }
    public void Hunt() { Console.WriteLine($"{Name} the Lion hunts"); }
}

class Gazelle : Animal, IPrey
{
    public Gazelle(string name) : base(name, "Gazelle") { }
    public override void Speak() { Console.WriteLine($"{Name} the Gazelle bleats"); }
    public void Flee() { Console.WriteLine($"{Name} the Gazelle flees"); }
}

class Fox : Animal, IPredator, IPrey
{
    public Fox(string name) : base(name, "Fox") { }
    public override void Speak() { Console.WriteLine($"{Name} the Fox yips"); }
    public void Hunt() { Console.WriteLine($"{Name} the Fox hunts"); }
    public void Flee() { Console.WriteLine($"{Name} the Fox flees"); }
}

// Main program
class Program
{
    static void Main()
    {
        Lion leo = new Lion("Leo");
        Gazelle Gina = new Gazelle("Gina");
        Fox Sly = new Fox("Sly");

        // Demonstrate interface usage
        IPredator predator = leo;
        predator.Hunt(); // Output: Leo the Lion hunts

        IPrey prey = Gina;
        prey.Flee(); // Output: Gina the Gazelle flees

        // Fox is both predator and prey
        IPredator FoxPred = Sly;
        IPrey FoxPrey = Sly;
        FoxPred.Hunt(); // Output: Baloo the Fox hunts
        FoxPrey.Flee(); // Output: Baloo the Fox flees

        // Polymorphism with base class
        Animal[] animals = { leo, Gina, Sly };
        foreach (var a in animals)
        {
            a.Speak();
            a.Move();
        }
    }
}
