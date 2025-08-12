using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Example_1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employeesList = Data.GetEmployees();
            List<Department> departmentsList = Data.GetDepartments();

            //// using where method syntax 

            // var results = employeesList.Select(e => new
            // {
            //     FullName=e.FirstName+ " "+ e.LastName,
            //     AnnualSalary=e.AnnualSalary
            // }).Where(e=>e.AnnualSalary>40000);

            //// using where query syntax. recommended by microsoft

            // var results = from emp in employeesList
            //             where emp.AnnualSalary>40000
            //             select new
            //             {
            //                 FullName = emp.FirstName + " " + emp.LastName,
            //                 AnnualSalary = emp.AnnualSalary
            //             };



            // // Deferred execution example
            // var results = from emp in employeesList.GetHighSalariedEmployees()
            //             select new
            //             {
            //                 FullName = $"{emp.FirstName} {emp.LastName}",
            //                 AnnualSalary = emp.AnnualSalary
            //             };

            // // Immediate execution example
            // var results = (from emp in employeesList.GetHighSalariedEmployees()
            //             select new
            //             {
            //                 FullName = $"{emp.FirstName} {emp.LastName}",
            //                 AnnualSalary = emp.AnnualSalary
            //             }).ToList();

            // // the execution of the query is deferred until the results are traversed in the relevant forEach
            // // this known is Lazy evaluation
            // employeesList.Add(new Employee
            // {
            //     FirstName = "Bashar",
            //     LastName = "Alwarad",
            //     AnnualSalary = 1000000.0m,
            //     IsManager = true,
            //     DepartmentId = 2
            // });

            // // looping throw results in three deferent ways
            // foreach (var item in results)
            // {
            //     System.Console.WriteLine($"{item.FullName}: {item.AnnualSalary}");
            // }

            // // Join Operation Example Method syntax
            //             var results = (departmentsList.Join(
            //                 employeesList,
            //                 department => department.Id,
            //                 employee => employee.DepartmentId,
            //                 (department, employee) => new
            //                 {
            //                     DepartmentName = department.LongName,
            //                     EmployeeFullName = employee.FirstName + " " + employee.LastName,
            //                     EmployeeSalary = employee.AnnualSalary
            //                 }
            //             )).ToList();

            // // Join Operation Example query syntax
            //             var results = (from department in departmentsList
            //             join employee in employeesList
            //             on department.Id equals employee.DepartmentId
            //             select new
            //                 {
            //                     DepartmentName = department.LongName,
            //                     EmployeeFullName = employee.FirstName + " " + employee.LastName,
            //                     EmployeeSalary = employee.AnnualSalary
            //                 }
            //             ).ToList();

            // // Join left Operation | method syntax
            // var results = (departmentsList.GroupJoin(
            //     employeesList,
            //     dep=>dep.Id,
            //     emp=>emp.DepartmentId,
            //     (dep,employeesGroup)=>new
            //     {
            //         Employees = employeesGroup,
            //         DepartmentName=dep.LongName
            //     }
            // )).ToList();

            // // Join left Operation | method syntax
            // var results = (departmentsList.GroupJoin(
            //     employeesList,
            //     dep=>dep.Id,
            //     emp=>emp.DepartmentId,
            //     (dep,employeesGroup)=>new
            //     {
            //         Employees = employeesGroup,
            //         DepartmentName=dep.LongName
            //     }
            // )).ToList();

            // Join left Operation | query syntax
            var results = (from department in departmentsList
                        join employee in employeesList
                        on department.Id equals employee.DepartmentId
                        into employeesGroup
                        select new
                            {
                                Employees = employeesGroup,
                                DepartmentName = department.LongName,
                            }
                        ).ToList();

            // the execution of the query is deferred until the results are traversed in the relevant forEach
            // this known is Lazy evaluation
            employeesList.Add(new Employee
            {
                FirstName = "Bashar",
                LastName = "Alwarad",
                AnnualSalary = 1000000.0m,
                IsManager = true,
                DepartmentId = 2
            });

            // looping throw results in after joining employees with departments
            foreach (var item in results)
            {
                System.Console.Write($"{item.DepartmentName}:");
                foreach (var emp in item.Employees)
                {
                System.Console.Write($"\t{emp.FirstName}");
                }
                System.Console.Write("\n");
            }

            // // looping throw results in after joining employees with departments
            // foreach (var item in results)
            // {
            //     System.Console.WriteLine($"{item.EmployeeFullName}: {item.EmployeeSalary}\t{item.DepartmentName}");
            // }
        }

    }
        public static class EnumerableCollectionExtensionMethods
    {
        public static IEnumerable<Employee> GetHighSalariedEmployees(this IEnumerable<Employee> employees)
        {
            foreach (Employee emp in employees)
            {

                Console.WriteLine($"Accessing employee: {emp.FirstName + " " + emp.LastName}");

                if (emp.AnnualSalary >= 50000)
                    yield return emp;
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
            employee = new Employee
            {
                Id = 5,
                FirstName = "John",
                LastName = "Doe",
                AnnualSalary = 111111.2m,
                IsManager = false,
                DepartmentId = 5
            };
            employees.Add(employee);

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
}