using System;
using System.Diagnostics.Tracing;

namespace Hello_World.Examples
{
    public static class Vehicles{

        abstract class Vehicle
        {
            public string brand = "Ford";
            public abstract void Honk();
            // public virtual void Honk()
            // {
            //     System.Console.WriteLine("Tuut, tuut");
            // }
        }

        interface IVehicle
        {
            void CarSound();
        }

        interface ISecondVehicle
        {
            void Drive();
        }
        class SomeCar : IVehicle ,ISecondVehicle
        {
            public void CarSound()
            {
                System.Console.WriteLine("Morgen");
            }
        public void Drive() {
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
                June = 5,       // 5
                July,        // 6
                August,     // 7
                September,  // 8
                October,    // 9
                November,   // 10
                December    // 11
}

            readonly int  myMonth = (int)Months.June;
            readonly Level myLevel = Level.low;
            public override void Honk()
            {
                System.Console.WriteLine("wee, wee");
                System.Console.WriteLine(myLevel);
                System.Console.WriteLine($"my month is {myMonth}");

            }
        }
        public static void Vehicles_types()
        {

            // Car myCar = new Car();
            Car myCar = new();
            myCar.Honk();
            SomeCar someCar = new();
            someCar.CarSound();
            someCar.Drive();
        }
        
    }
}