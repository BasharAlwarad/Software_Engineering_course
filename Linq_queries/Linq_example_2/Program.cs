using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Linq.Expressions;
using System.Runtime.InteropServices;

namespace Linq_example_2
{
class Program
{
    static void Main(string[] args)
    {
        List<Employee> employeeList = Data.GetEmployees();
        List<Department> departmentList = Data.GetDepartments();
            // // # Sorting operators
            // // ## OrderBy
            // // ### using method syntax
            // var results = (employeeList.Join(departmentList,
            // e=>e.DepartmentId,
            // d=>d.Id,
            // (emp,dep)=>new
            // {
            //     Id=emp.Id,
            //     FirstName = emp.FirstName,
            //     LastName = emp.LastName,
            //     AnnualSalary=emp.AnnualSalary,
            //     DepartmentId=emp.DepartmentId,
            //     DepartmentName =dep.LongName
            // }
            // ).OrderBy(o=>o.DepartmentName).ThenByDescending(o=>o.AnnualSalary)).ToList();

            // // ### using query syntax
            // var results = (from emp in employeeList 
            // join dep in departmentList
            // on emp.DepartmentId equals dep.Id
            // orderby dep.LongName, emp.AnnualSalary descending
            // select new
            // {
            //     Id=emp.Id,
            //     FirstName = emp.FirstName,
            //     LastName = emp.LastName,
            //     AnnualSalary=emp.AnnualSalary,
            //     DepartmentId=emp.DepartmentId,
            //     DepartmentName =dep.LongName
            // }
            // ).ToList();

            // foreach (var item in results)
            // {
            //     System.Console.WriteLine($"ID: {item.Id} First name: {item.FirstName} Last name: {item.LastName} Annual salary: {item.AnnualSalary,10}\t Department Name: {item.DepartmentName}");
            // }

            // // # Grouping operators
            // // ## GroupBy
            // // ### using method syntax
            // var results = (employeeList.OrderBy(e=>e.AnnualSalary).GroupBy(e=>e.DepartmentId)).ToList();

            // // ### using query syntax
            // var results = (from emp in employeeList 
            // orderby emp.AnnualSalary
            // join dep in departmentList
            // on emp.DepartmentId equals dep.Id
            // group emp by emp.DepartmentId
            // ).ToList();
            // var results = (from emp in employeeList
            //                 group emp by emp.DepartmentId
            // ).ToList();

            // foreach (var empGroup in results)
            // {
            //     System.Console.Write($"{empGroup.Key} Department: { departmentList.FirstOrDefault(d => d.Id == empGroup.Key)?.LongName} \t Employees: ");
            //     foreach (var employee in empGroup)
            //     {
            //         System.Console.Write($"\t{employee.FirstName}");
            //     }
            //     System.Console.WriteLine();
            // }

            // // # All, Any, Contains Quantifier operators
            // // ## GroupBy
            // // ### using method syntax
            // var compareValue = 4000;

            // System.Console.WriteLine((employeeList.All(e => e.AnnualSalary > compareValue)?"All":"Not all")+$" employees receive more than {compareValue} annual salary");

            // System.Console.WriteLine((employeeList.Any(e => e.AnnualSalary > compareValue)?"Some employees":"No employee")+$" receive more than {compareValue} annual salary");

            // var searchEmployee = new Employee{Id = 1,FirstName = "Bob",LastName = "Jones",AnnualSalary = 60000.3m,IsManager = true,DepartmentId = 1};

            // System.Console.WriteLine(searchEmployee.FirstName+(employeeList.Contains(searchEmployee)?$" is":" is not")+$" an employee in our company");

            // System.Console.WriteLine(employeeList.Contains(searchEmployee));

            //// OfType filter operator
            // ArrayList mixedCollection = Data.GetHeterogeneousDataCollection();

            // // this example will filter only string values in the list
            // var stringResult1 = from s in mixedCollection.OfType<string>() select s;
            // foreach (var e in stringResult1)
            // {
            //     System.Console.WriteLine(e);
            // }

            // // this example will filter only Employee class values in the list
            // var stringResult2 = from s in mixedCollection.OfType<Employee>() select s;

            // foreach (var e in stringResult2)
            // {
            //     System.Console.WriteLine(e.FirstName);
            // }

            ////ElementAt, ElementAtOrDefault, First, FirstOrDefault, Last, LastOrDefault, Single, SingleOrDefault
            // // use ElementAt if you know that there is an element at this location otherwise use ElementAtOrDefault
            // // the default value for an int in C# is 0
            // // the default value for an Obj in C# is null
            // // the default value for a decimal in C# is 0.0            
            // // the default value for a string in C# is null            
            // // the default value for a list in C# is null            
            // // the default value for a bool in C# is false            
            // // var emp = employeeList.ElementAt(2);
            // var emp = employeeList.ElementAtOrDefault(20);
            // if (emp!=null)
            // {
            // System.Console.WriteLine($"{emp.Id,-5}{emp.FirstName,-10}{emp.LastName}");
            // }else
            // {
            // System.Console.WriteLine($"This element is dos'nt exist within the collection");
            // }

            ////  First, FirstOrDefault
            // List<int> integerList1 = [3, 4,6, 23, 21, 56];
            // int result1 = integerList1.First(e => e % 2 == 0);
            // System.Console.WriteLine(result1);

            // List<int> integerList2 = [3, 57, 23, 21, 51];
            // int result2 = integerList2.FirstOrDefault(e => e % 2 == 0);
            // if (result2 != 0)
            // {
            //     System.Console.WriteLine(result2);
            // }
            // else
            // {
            //     System.Console.WriteLine("No even number was found in this list");

            // }


            ////   Last, LastOrDefault
            // List<int> integerList1 = [3, 4,6, 23, 21, 56];
            // int result1 = integerList1.Last(e => e % 2 == 0);
            // System.Console.WriteLine(result1);

            // List<int> integerList2 = [3, 57, 23, 21, 51];
            // int result2 = integerList2.LastOrDefault(e => e % 2 == 0);
            // if (result2 != 0)
            // {
            //     System.Console.WriteLine(result2);
            // }
            // else
            // {
            //     System.Console.WriteLine("No even number was found in this list");
            // }

            ////   Single, SingleOrDefault
            /// thi will return an exception if employeeList has one element
            // var emp = employeeList.Single();
            // var emp = employeeList.Single(e=>e.Id==2);

            /// thi will return an null if employeeList has one element
            var emp = employeeList.SingleOrDefault(e=>e.Id==10);
            if (emp!=null)
            {
            System.Console.WriteLine($"{emp.Id,-5}{emp.FirstName,-10}{emp.LastName}");
            }else
            {
            System.Console.WriteLine($"this employee is not in the list");
            }
            
    }

}


public class EmployeeComparer : IEqualityComparer<Employee>
{
    public bool Equals(Employee? x, Employee? y)
    {
        if (ReferenceEquals(x, y)) return true;
        if (x is null || y is null) return false;
        return x.Id == y.Id
            && x.FirstName.Equals(y.FirstName, StringComparison.OrdinalIgnoreCase)
            && x.LastName.Equals(y.LastName, StringComparison.OrdinalIgnoreCase);
    }

    public int GetHashCode(Employee obj)
    {
        if (obj is null) return 0;
        return HashCode.Combine(obj.Id, obj.FirstName.ToLower(), obj.LastName.ToLower());
    }
}

    // public class EmployeeComparer : IEqualityComparer<Employee>
    // {
    //     public bool equals([AllowNull] Employee x, [AllowNull] Employee y)
    //     {
    //         if (x.Id == y.Id && x.FirstName.ToLower() == y.FirstName.ToLower() && x.LastName.ToLower() == y.LastName.ToLower())
    //         {
    //             return true;
    //         }
    //         return false;
    //         // throw new NotImplementedException();
    //     }
    //     public int GetHashCode([DisallowNull] Employee obj)
    //     {
    //         return obj.Id.GetHashCode();
    //     }

    // }

   public class Employee
//    public class Employee : IEquatable<Employee>
        {
            public int Id { get; set; }
            public required string FirstName { get; set; }
            public required string LastName { get; set; }
            public decimal AnnualSalary { get; set; }
            public bool IsManager { get; set; }
            public int DepartmentId { get; set; }

            public bool Equals(Employee? other)
            {
                if (other is null) return false;
                return Id == other.Id
                    && FirstName == other.FirstName
                    && LastName == other.LastName
                    && AnnualSalary == other.AnnualSalary
                    && IsManager == other.IsManager
                    && DepartmentId == other.DepartmentId;
            }

            public override bool Equals(object? obj)
            {
                return Equals(obj as Employee);
            }

            public override int GetHashCode()
            {
                return HashCode.Combine(Id, FirstName, LastName, AnnualSalary, IsManager, DepartmentId);
            }
        }
        
        public class Department
        {
            public int Id { get; set; }
            public required string ShortName { get; set; }
            public required string LongName { get; set; }
        }

    public static class Data
    {
        public static List<Employee> GetEmployees()
        {
            List<Employee> employees = new List<Employee>();

            Employee employee = new()
            {
                Id = 1,
                FirstName = "Bob",
                LastName = "Jones",
                AnnualSalary = 60000.3m,
                IsManager = true,
                DepartmentId = 1
            };
            employees.Add(employee);
            employee = new Employee
            {
                Id = 2,
                FirstName = "Sarah",
                LastName = "Jameson",
                AnnualSalary = 80000.1m,
                IsManager = true,
                DepartmentId = 2
            };
            employees.Add(employee);
            employee = new Employee
            {
                Id = 3,
                FirstName = "Douglas",
                LastName = "Roberts",
                AnnualSalary = 40000.2m,
                IsManager = false,
                DepartmentId = 2
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
            // employee = new Employee
            // {
            //     Id = 5,
            //     FirstName = "John",
            //     LastName = "Doe",
            //     AnnualSalary = 111111.2m,
            //     IsManager = false,
            //     DepartmentId = 5
            // };
            // employees.Add(employee);

            return employees;
        }

        public static List<Department> GetDepartments()
        {
            List<Department> departments = new List<Department>();

            Department department = new()
            {
                Id = 1,
                ShortName = "HR",
                LongName = "Human Resources"
            };
            departments.Add(department);
            department = new Department
            {
                Id = 2,
                ShortName = "FN",
                LongName = "Finance"
            };
            departments.Add(department);
            department = new Department
            {
                Id = 3,
                ShortName = "TE",
                LongName = "Technology"
            };
            departments.Add(department);
            department = new Department
            {
                Id = 4,
                ShortName = "MA",
                LongName = "Marketing"
            };
            departments.Add(department);

            return departments;
        }

        public static ArrayList GetHeterogeneousDataCollection()
        {
            ArrayList arrayList = new ArrayList();
            arrayList.Add(100);
            arrayList.Add(200);
            arrayList.Add(true);
            arrayList.Add("Bill");
            arrayList.Add(new Employee { Id = 5, FirstName = "John", LastName = "Doe", AnnualSalary = 111111.2m, IsManager = false, DepartmentId = 5});
            arrayList.Add(new Employee { Id = 6, FirstName = "Johney", LastName = "cash", AnnualSalary = 112222.2m, IsManager = true, DepartmentId = 3});
            arrayList.Add(new Department{Id = 5,ShortName = "AD",LongName = "Advertisement"});
            arrayList.Add(new Department{Id = 6,ShortName = "MA",LongName = "Marketing"});

            return arrayList;
        }
    }
};
