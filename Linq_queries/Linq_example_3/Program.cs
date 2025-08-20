using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Channels;
using Microsoft.VisualBasic;

namespace Linq_example_3{

    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employeeList = Data.GetEmployees();
            List<Department> departmentsList = Data.GetDepartments(employeeList);

            //// Equality operator
            /// SequenceEqual

            // var integerList1 = new List<int> { 1, 2, 3, 4, 5, 6 };
            // var integerList2 = new List<int> { 1, 2, 3, 4, 5, 6 };

            // var boolSequenceEqual = integerList1.SequenceEqual(integerList2);
            // System.Console.WriteLine(boolSequenceEqual);

            // var employeesListCompare1 = Data.GetEmployees();
            // var employeesListCompare2 = Data.GetEmployees();
            // System.Console.WriteLine(employeesListCompare1.SequenceEqual(employeesListCompare2,new EmployeeComparer()));
            // System.Console.WriteLine(employeesListCompare1.SequenceEqual(employeesListCompare2,new EmployeeComparer()));

            //// Concatenation Operator
            /// Concat
            // var integerList1 = new List<int> { 1, 2, 3, 4, 5, 6 }.Concat([7,8,9]);
            // var integerList2 = new List<int> { 10,11,12 };
            // IEnumerable<int> integerList3 = integerList1.Concat(integerList2);

            // foreach (var item in integerList3)
            // {
            //     System.Console.WriteLine(item);
            // }

            // var empConcat1 = Data.GetEmployees();
            // var empConcat2 = Data.GetEmployees();
            // IEnumerable<Employee> empConcat3 = empConcat1.Concat(empConcat2);

            // foreach (var item in empConcat3)
            // {
            //     System.Console.WriteLine(item.FirstName);
            // }

            //// Aggregate Operators | Aggregate, Average, Count, Sum, Max
            /// Aggregate

            // decimal totalAnnualSalary = employeeList.Aggregate<Employee, decimal>(0, (totalAnnualSalary, e) =>
            // {
            //     var bonus = (e.IsManager) ? 0.04m : 0.02m;
            //     totalAnnualSalary = (e.AnnualSalary + (e.AnnualSalary * bonus)) + totalAnnualSalary;
            //     return totalAnnualSalary;
            // });
            // Console.WriteLine($"Total annual Salary of all employees including annual bonus: {totalAnnualSalary}");


            // string data = employeeList.Aggregate<Employee, string,string>("employees annual salary including bonuses:\n",
            // (s, e) =>
            // {
            //     var bonus = (e.IsManager) ? 0.04m : 0.02m;
            //     s += $"{e.FirstName} {e.LastName} => {e.AnnualSalary +(e.AnnualSalary*bonus)}\n";
            //     return s;
            // },s=>s.Substring(0,s.Length-1));
            // System.Console.WriteLine(data);

            /// Average
            // decimal averageAnnualSalary = employeeList.Average(e => e.AnnualSalary);
            // Console.WriteLine($"Average annual salary for all employees: {averageAnnualSalary}");
            // decimal averageAnnualSalaryTechDep = employeeList.Where(e=>e.DepartmentId==3).Average(e => e.AnnualSalary);
            // Console.WriteLine($"Average annual salary for Tech department: {averageAnnualSalaryTechDep}");

            /// Count
            // Console.WriteLine($"Total Number of employees: {employeeList.Count}");
            // Console.WriteLine($"Total Number of employees in Tech department: {employeeList.Count(e=>e.DepartmentId==3)}");

            /// Sum
            // Console.WriteLine($"Total sum of all Salaries: {employeeList.Sum(e=>e.AnnualSalary)}");
            // Console.WriteLine($"Total sum of all Salaries in Tech department: {employeeList.Where(e=>e.DepartmentId==3).Sum(e=>e.AnnualSalary)}");

            /// Max
            // Console.WriteLine($"The largest Salary: {employeeList.Max(e=>e.AnnualSalary)}");

            //// Generation Operators DefaultIfEmpty, Empty, Range, Repeat

            /// DefaultIfEmpty
            // List<int> intList = new List<int>();
            // var newList = intList.DefaultIfEmpty();
            // System.Console.WriteLine(newList.ElementAt(0));

            // List<Employee> employees = new List<Employee>();
            // var newList = employees.DefaultIfEmpty(new Employee { Id = 0, FirstName = string.Empty, LastName = string.Empty });
            // if (newList.ElementAt(0).Id==0) Console.WriteLine($"The list is empty");

            /// Empty
            /// you can use the Empty operator to create an empty sequence of a specific type.
            // List<Employee> emptyEmployeeList = Enumerable.Empty<Employee>().ToList();
            // emptyEmployeeList.Add(new Employee {Id = 7,FirstName="Dan", LastName="Brown" });
            // foreach (var item in emptyEmployeeList) Console.WriteLine($"{item.FirstName}");

            /// Range
            /// you can use the Range Operator to generate a sequence of integers within a specified range.
            // var intCollection = Enumerable.Range(25, 20);
            // foreach(var i in intCollection) System.Console.WriteLine(i);

            /// Repeat
            /// use Repeat to generate a sequence that contains a specified number of repetitions of a given value.
            // var strCollection = Enumerable.Repeat<String>("Hello", 10);
            // foreach(var i in strCollection) System.Console.WriteLine(i);

            //// Set Operators Distinct, Except, Intersect, Union
            List<Employee> employeeList2 = new List<Employee>();
            employeeList2.Add(new Employee { Id = 1, FirstName = "Bob", LastName = "Jones", AnnualSalary = 60000.3m, IsManager = true, DepartmentId = 2 });
            employeeList2.Add(new Employee { Id = 2, FirstName = "Sarah", LastName = "Jameson", AnnualSalary = 80000.1m, IsManager = true, DepartmentId = 3 });
            employeeList2.Add(new Employee { Id = 3, FirstName = "John", LastName = "Wick", AnnualSalary = 10000.1m, IsManager = false, DepartmentId = 3 });

            /// Distinct
            /// use Distinct to remove duplicate elements from a sequence.
            // List<int> repeatedList = new List<int> { 1, 2, 3, 4, 4, 4 };
            // var notRepeatedList = repeatedList.Distinct();
            // foreach(var i in notRepeatedList) System.Console.WriteLine(i);

            /// Except
            /// use Except to find the elements that are in one sequence but not in another.
            // IEnumerable<int> collectionA = new List<int> { 1, 2, 3, 4, 5, 6, 7 };
            // IEnumerable<int> collectionB = new List<int> { 1, 2, 3, 4 };
            // var collectionC = collectionA.Except(collectionB);
            // foreach(var i in collectionC)System.Console.WriteLine(i);

            // var exceptResult1 = employeeList2.Except(employeeList,new EmployeeComparer());
            // foreach(var i in exceptResult1)System.Console.WriteLine(i.FirstName);
            // var exceptResult2 = employeeList.Except(employeeList2,new EmployeeComparer());
            // foreach(var i in exceptResult2)System.Console.WriteLine(i.FirstName);

            /// Intersect
            /// use Intersect to find the elements that are common to two sequences.
            // IEnumerable<int> collectionA = new List<int> { 1, 2, 3, 4, 5, 6, 7 };
            // IEnumerable<int> collectionB = new List<int> { 1, 2, 3, 4 };
            // var collectionC = collectionA.Intersect(collectionB);
            // foreach(var i in collectionC)System.Console.WriteLine(i);

            // var exceptResult1 = employeeList2.Intersect(employeeList,new EmployeeComparer());
            // foreach(var i in exceptResult1)System.Console.WriteLine(i.FirstName);
            // var exceptResult2 = employeeList.Intersect(employeeList2,new EmployeeComparer());
            // foreach(var i in exceptResult2)System.Console.WriteLine(i.FirstName);

            /// Union
            /// use Union to combine two sequences, removing duplicates.
            // IEnumerable<int> collectionA = new List<int> { 1, 2, 3, 4, 5, 6, 7 };
            // IEnumerable<int> collectionB = new List<int> { 1, 2, 3, 4 };
            // var collectionD = collectionA.Union(collectionB);
            // foreach(var i in collectionD)System.Console.WriteLine(i);

            // var exceptResult1 = employeeList2.Union(employeeList,new EmployeeComparer());
            // foreach(var i in exceptResult1)System.Console.WriteLine(i.FirstName);
            // var exceptResult2 = employeeList.Union(employeeList2,new EmployeeComparer());
            // foreach(var i in exceptResult2)System.Console.WriteLine(i.FirstName);

            //// Partitioning Operators: Skip, SkipWhile, Take, TakeWhile
            /// Skip
            /// use Skip to skip a specified number of elements in a sequence.
            // var skippedList = employeeList.Skip(2);
            // foreach(var i in skippedList)System.Console.WriteLine(i.FirstName);

            /// SkipWhile
            /// use SkipWhile to skip elements in a sequence as long as a specified condition is true.
            // var skippedWhileList = employeeList.SkipWhile(e=>e.AnnualSalary<80000);
            // foreach(var i in skippedWhileList)System.Console.WriteLine(i.FirstName);

            /// Take
            /// use Take to take a specified number of elements from the start of a sequence.
            // var takeList = employeeList.Take(2);
            // foreach(var i in takeList)System.Console.WriteLine(i.FirstName);

            /// TakeWhile
            /// use TakeWhile to take elements from a sequence as long as a specified condition is true.
            // var takeWhileList = employeeList.TakeWhile(e=>e.AnnualSalary<80000);
            // foreach(var i in takeWhileList)System.Console.WriteLine(i.FirstName);

            //// Conversion Operators: ToList, ToDictionary, ToArray
            /// ToList
            /// use ToList to convert a sequence to a List.
            // List<Employee> empList = (from emp in employeeList where emp.AnnualSalary > 5000 select emp).ToList();
            // List<Employee> empList = [.. (from emp in employeeList where emp.AnnualSalary > 5000 select emp)];
            // foreach (var i in empList)System.Console.WriteLine(i.FirstName);

            /// ToDictionary
            /// use ToDictionary to convert a sequence to a Dictionary.
            // Dictionary<string, Employee> empDict = employeeList.ToDictionary(e => e.FirstName);
            // Dictionary<int, Employee> empDict = employeeList.ToDictionary(e => e.Id);
            // foreach (var kvp in empDict)
            // {
            //     Console.WriteLine($"Key: {kvp.Key}, Value: {kvp.Value.FirstName} {kvp.Value.LastName}");
            // }

            /// ToArray
            /// use ToArray to convert a sequence to an array.
            // Employee[] empArray = employeeList.ToArray();
            // foreach (var i in empArray)
            // {
            //     Console.WriteLine($"{i.FirstName} {i.LastName}");
            // }

            /// Let clause and Into clause
            /// Let
            /// use Let to create a temporary variable within a query expression.
            // var empWithBonus = from emp in employeeList
            //                 let bonus = emp.IsManager ? 0.04m : 0.02m
            //                 select new
            //                 {
            //                     emp.FirstName,
            //                     emp.LastName,
            //                     TotalSalary = emp.AnnualSalary + (emp.AnnualSalary * bonus)
            //                 };
            // foreach (var item in empWithBonus) 
            // {
            //     Console.WriteLine($"{item.FirstName} {item.LastName} => {item.TotalSalary}");
            // }

            /// Into
            /// use Into to create a subquery within a query expression.
            // var empWithBonus = from emp in employeeList
            //                 group emp by emp.DepartmentId into empGroup
            //                 select new
            //                 {
            //                     DepartmentId = empGroup.Key,
            //                     TotalSalary = empGroup.Sum(e => e.AnnualSalary + (e.AnnualSalary * (e.IsManager ? 0.04m : 0.02m)))
            //                 };

            // var result = from emp in employeeList
            //             where emp.AnnualSalary > 5000
            //             select emp into HighEarners
            //             where HighEarners.IsManager == true
            //             select HighEarners;
            // foreach (var i in result) System.Console.WriteLine(i.FirstName);

            //// Projection Operators - Select, SelectMany
            /// Select
            var resultsOfSelect = departmentsList.Select(d => d.Employees); 
            foreach(var i in resultsOfSelect)
                foreach(var y in i) System.Console.WriteLine(y.FirstName);

            /// SelectMany
            var resultsOfSelectMany = departmentsList.SelectMany(d => d.Employees); 
            foreach(var i in resultsOfSelectMany) System.Console.WriteLine(i.FirstName);
            
        }
    }


    public class EmployeeComparer : IEqualityComparer<Employee>
    {
        public bool Equals([AllowNull] Employee x, [AllowNull] Employee y)
        {
            if (x == null && y == null)
                return true;
            if (x == null || y == null)
                return false;
            if (x.Id == y.Id && 
                string.Equals(x.FirstName, y.FirstName, StringComparison.OrdinalIgnoreCase) && 
                string.Equals(x.LastName, y.LastName, StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }
            return false;
        }

        public int GetHashCode([DisallowNull] Employee obj)
        {
            return obj.Id.GetHashCode();
        }
    }
    public class Employee
    {
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public decimal AnnualSalary { get; set; }
        public bool IsManager { get; set; }
        public int DepartmentId { get; set; }
    }
    public class Department
    {
        public int Id { get; set; }
        public required string ShortName { get; set; }
        public required string LongName { get; set; }
        public IEnumerable<Employee> Employees { get; set; }
    }
    public static class Data
    {
        public static List<Employee> GetEmployees()
        {
            List<Employee> employees = new List<Employee>();

            Employee employee = new Employee
            {
                Id = 1,
                FirstName = "Bob",
                LastName = "Jones",
                AnnualSalary = 60000.3m,
                IsManager = true,
                DepartmentId = 2
            };
            employees.Add(employee);
            employee = new Employee
            {
                Id = 2,
                FirstName = "Sarah",
                LastName = "Jameson",
                AnnualSalary = 80000.1m,
                IsManager = true,
                DepartmentId = 3
            };
            employees.Add(employee);
            employee = new Employee
            {
                Id = 3,
                FirstName = "Douglas",
                LastName = "Roberts",
                AnnualSalary = 40000.2m,
                IsManager = false,
                DepartmentId = 1
            };
            employees.Add(employee);
            employee = new Employee
            {
                Id = 4,
                FirstName = "Jane",
                LastName = "Stevens",
                AnnualSalary = 30000.2m,
                IsManager = false,
                DepartmentId = 3
            };
            employees.Add(employee);

            return employees;
        }
 public static List<Department> GetDepartments(IEnumerable<Employee> employees)
        {
            List<Department> departments = new List<Department>();

            Department department = new Department
            {
                Id = 1,
                ShortName = "HR",
                LongName = "Human Resources",
                Employees = from emp in employees where emp.DepartmentId == 1 select emp
            };
            departments.Add(department);
            department = new Department
            {
                Id = 2,
                ShortName = "FN",
                LongName = "Finance",
                Employees = from emp in employees where emp.DepartmentId == 2 select emp
            };
            departments.Add(department);
            department = new Department
            {
                Id = 3,
                ShortName = "TE",
                LongName = "Technology",
                Employees = from emp in employees where emp.DepartmentId == 3 select emp
            };
            departments.Add(department);

            return departments;
        }

    }
}