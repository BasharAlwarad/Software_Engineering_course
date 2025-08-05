using System;
using System.Collections.Generic;


namespace Hello_World.Examples
{
    class Linq
    {
        public static void Linq_intro()
        {
            System.Console.WriteLine("Hello");
        }
    }
    public class Employee
    {
        public int Id { get; set; }
        public required string First_name { get; set; }
        public required string Last_name { get; set; }
        public decimal Annual_salary { get; set; }
        public bool IsManager { get; set; }
        public int Department { get; set; }
    }
    public class Department
    {
        public int Id{ get; set; }
        public required string Short_name{ get; set; }
        public required string Long_name{ get; set; }
    }
    public static class Data
    {
        public static List<Employee> GetEmployees()
        {
            List<Employee> employees = new List<Employee>();

            Employee employee = new Employee
            {
                Id = 1,
                First_name = "John",
                Last_name = "Doe",
                Annual_salary = 6000.0m,
                IsManager = true,
                Department = 1,
            };
            employees.Add(employee);
            employee = new Employee
            {
                Id = 2,
                First_name = "Jane",
                Last_name = "Doe",
                Annual_salary = 6500.0m,
                IsManager = true,
                Department = 2,
            };
            employees.Add(employee);
            employee = new Employee
            {
                Id = 3,
                First_name = "Bob",
                Last_name = "Marlin",
                Annual_salary = 5000.0m,
                IsManager = false,
                Department = 3,
            };
            employees.Add(employee);
            employee = new Employee
            {
                Id = 4,
                First_name = "Mike",
                Last_name = "Tyson",
                Annual_salary = 5500.0m,
                IsManager = false,
                Department = 3,
            };
            employees.Add(employee);
            return employees;
        }

        public static List<Department> GetDepartments()
        {
            List<Department> departments = new List<Department>();

            Department department = new Department
            {
                Id = 1,
                Short_name = "HR",
                Long_name = "Human resources"
            };
            departments.Add(department);
            department = new Department
            {
                Id = 2,
                Short_name = "FN",
                Long_name = "Finance"
            };
            departments.Add(department);
            department = new Department
            {
                Id = 3,
                Short_name = "TE",
                Long_name = "Technology"
            };
            departments.Add(department);
            return departments;

        }

        public static class Extension
        {
            public static List<T> Filter<T>(this List<T> records, Func<T, bool> func)
            {
                List<T> filteredList = new List<T>();
                foreach (T record in records)
                {
                    if (func(record))
                    {
                        filteredList.Add(record);
                    }
                }
                return filteredList;
            }
        }
    }
}