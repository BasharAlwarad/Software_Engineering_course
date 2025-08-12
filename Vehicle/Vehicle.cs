using System;

namespace Vehicle
{
    public static class VehicleExamples
    {
        abstract class Vehicle
        {
            public string brand = "Ford";
            public abstract void Honk();
        }

        interface IVehicle
        {
            void CarSound();
        }

        interface ISecondVehicle
        {
            void Drive();
        }

        class SomeCar : IVehicle, ISecondVehicle
        {
            public void CarSound()
            {
                System.Console.WriteLine("Morgen");
            }
            
            public void Drive()
            {
                System.Console.WriteLine("Im driving");
            }
        }

        class Car : Vehicle
        {
            public string modelName = "Mustang";
            
            enum Level
            {
                low,
                high,
                medium
            }
            
            enum Months
            {
                January,    // 0
                February,   // 1
                March,      // 2
                April,      // 3
                May,        // 4
                June = 5,   // 5
                July,       // 6
                August,     // 7
                September,  // 8
                October,    // 9
                November,   // 10
                December    // 11
            }

            readonly int myMonth = (int)Months.June;
            readonly Level myLevel = Level.low;
            
            public override void Honk()
            {
                System.Console.WriteLine("wee, wee");
                System.Console.WriteLine($"Level: {myLevel}");
                System.Console.WriteLine($"My month is {myMonth}");
            }
        }
        
        public static void Vehicles_types()
        {
            Console.WriteLine("=== Vehicle Types Demo ===");
            
            Car myCar = new();
            Console.WriteLine($"Brand: {myCar.brand}");
            Console.WriteLine($"Model: {myCar.modelName}");
            Console.Write("Car honk: ");
            myCar.Honk();
            
            Console.WriteLine("\n--- Interface Implementation ---");
            SomeCar someCar = new();
            Console.Write("Some car sound: ");
            someCar.CarSound();
            Console.Write("Some car action: ");
            someCar.Drive();
        }
    }
}
