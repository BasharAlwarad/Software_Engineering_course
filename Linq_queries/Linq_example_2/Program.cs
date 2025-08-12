using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

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
            // var results = (employeeList.GroupBy(e=>e.DepartmentId)).ToList();

            // // ### using query syntax
            var results = (from emp in employeeList 
            join dep in departmentList
            on emp.DepartmentId equals dep.Id
            group emp by emp.DepartmentId
            ).ToList();
            // var results = (from emp in employeeList
            //                 group emp by emp.DepartmentId
            // ).ToList();

            foreach (var empGroup in results)
            {
                System.Console.Write($"{empGroup.Key} Department: { departmentList.FirstOrDefault(d => d.Id == empGroup.Key)?.LongName} \t Employees: ");
                foreach (var employee in empGroup)
                {
                    System.Console.Write($"\t{employee.FirstName}");
                }
                System.Console.WriteLine();
            }
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
    }
};
