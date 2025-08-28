// See https://aka.ms/new-console-template for more information
using System;

// Main program
class Program
{
    static void Main()
    {
        // Creating and using objects
        Car myCar = new Car();
        myCar.Brand = "Toyota";
        myCar.Year = 2020;
        myCar.Honk();

        // Multiple objects
        Car car1 = new Car { Brand = "Ford", Year = 2018 };
        Car car2 = new Car { Brand = "BMW", Year = 2022 };
        car1.Honk();
        car2.Honk();
    }
}


// Declaring a class
class Car
{
    public string Brand;
    public int Year;

    public void Honk()
    {
        Console.WriteLine($"{Brand} goes beep!");
    }
}

