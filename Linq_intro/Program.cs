using System;
using System.Collections.Generic;
using System.Linq;

    class Program
    {
        static void Main(string[] args)
        {
            // This file demonstrates several key LINQ concepts:
            // 1. Method Syntax (using extension methods like Where, Average, Max, Min)
            // 2. Query Syntax (using from...select statements)
            // 3. Filtering data with Where clause
            // 4. Joining collections
            // 5. Projecting data into anonymous types
            // 6. Aggregate functions (Average, Max, Min)

            List<Employee> employeeList = Data.GetEmployees();

            // LINQ Example 1: Method Syntax with Where clause
            // This filters employees earning less than $50,000 using method syntax
            // PERFORMANCE: O(n) - Must iterate through every employee
            // For large datasets, this would be better as: 
            // SELECT * FROM Employees WHERE AnnualSalary < 50000 (uses index: O(log n))
            var filteredEmployees = employeeList.Where(emp => emp.AnnualSalary < 50000);

            foreach (var employee in filteredEmployees)
            {
               Console.WriteLine($"First Name: {employee.FirstName}");
               Console.WriteLine($"Last Name: {employee.LastName}");
               Console.WriteLine($"Annual Salary: {employee.AnnualSalary}");
               Console.WriteLine($"Manager: {employee.IsManager}");
               Console.WriteLine();
            }

            List<Department> departmentList = Data.GetDepartments();

            // LINQ Example 2: Method Syntax with complex Where condition
            // This filters departments by multiple criteria using OR operator
            var filteredDepartments = departmentList.Where(dept => dept.ShortName == "TE" || dept.ShortName == "HR");

            foreach (var department in filteredDepartments)
            {
                Console.WriteLine($"Id: {department.Id}");
                Console.WriteLine($"Short Name: {department.ShortName}");
                Console.WriteLine($"Long Name: {department.LongName}");
                Console.WriteLine();
            }



            List<Employee> employeeList2 = Data.GetEmployees();
            List<Department> departmentList2 = Data.GetDepartments();

            // LINQ Example 3: Query Syntax with Join and Projection
            // This demonstrates:
            // - Query syntax (from...join...select)
            // - Inner join between Employee and Department collections
            // - Projection into anonymous type (creating new object structure)
            // - Optional where clause (commented out) for additional filtering
            // PERFORMANCE: O(n*m) - Nested loop join without hash tables
            // SQL equivalent would use indexed joins: O(n log m) or better
            // For 1000 employees × 10 departments = 10,000 comparisons vs ~3,000 with SQL indexes
            var resultList = from emp in employeeList2
                            join dept in departmentList2
                            on emp.DepartmentId equals dept.Id
                           //  where dept.ShortName == "FN" || dept.ShortName == "TE"
                            select new
                            {
                                FirstName = emp.FirstName,
                                LastName = emp.LastName,
                                AnnualSalary = emp.AnnualSalary,
                                Manager = emp.IsManager,
                                Department = dept.LongName
                            };

            foreach (var employee in resultList)
            {
                Console.WriteLine($"First Name: {employee.FirstName}");
                Console.WriteLine($"Last Name: {employee.LastName}");
                Console.WriteLine($"Annual Salary: {employee.AnnualSalary}");
                Console.WriteLine($"Manager: {employee.Manager}");
                Console.WriteLine($"Department: {employee.Department}");
                Console.WriteLine();
            }

            // LINQ Example 4: Aggregate Functions
            // These demonstrate LINQ's built-in statistical functions
            // PERFORMANCE: Each function is O(n) - separate iterations through the collection
            // SQL equivalent: SELECT AVG(AnnualSalary), MAX(AnnualSalary), MIN(AnnualSalary) 
            // Would calculate all three in a single pass: O(n) total vs O(3n) here
            // Average() calculates the mean of AnnualSalary values
            var averageAnnualSalary = resultList.Average(a => a.AnnualSalary);
            // Max() finds the highest AnnualSalary value
            var highestAnnualSalary = resultList.Max(a => a.AnnualSalary);
            // Min() finds the lowest AnnualSalary value
            var lowestAnnualSalary = resultList.Min(a => a.AnnualSalary);

            Console.WriteLine($"Average Annual Salary: {averageAnnualSalary}");
            Console.WriteLine($"Highest Annual Salary: {highestAnnualSalary}");
            Console.WriteLine($"Lowest Annual Salary: {lowestAnnualSalary}");

            Console.ReadKey();
        }
    }
// }

/*
 * LINQ (Language Integrated Query) Summary for this file:
 * 
 * This is an excellent example of LINQ that demonstrates both major syntaxes:
 * 
 * METHOD SYNTAX:
 * - Uses extension methods like .Where(), .Average(), .Max(), .Min()
 * - More concise for simple operations
 * - Examples: filteredEmployees and filteredDepartments
 * 
 * QUERY SYNTAX:
 * - Uses SQL-like keywords: from, join, on, select
 * - More readable for complex operations involving joins
 * - Example: resultList with employee-department join
 * 
 * Key LINQ Concepts Demonstrated:
 * 1. Filtering: Where() method with lambda expressions
 * 2. Projection: select new {} (anonymous types)
 * 3. Joins: join...on syntax for combining collections
 * 4. Aggregation: Average(), Max(), Min() functions
 * 5. Deferred Execution: Queries execute when enumerated (foreach loops)
 * 
 * This code effectively shows how LINQ can replace traditional loops
 * and conditional statements with more declarative, readable code.
 * 
 * ============================================================================
 * BIG O COMPLEXITY: C# LINQ vs SQL PERFORMANCE COMPARISON
 * ============================================================================
 * 
 * C# LINQ TO OBJECTS (In-Memory Collections):
 * -------------------------------------------
 * • Where(): O(n) - Must check every element
 * • Join(): O(n*m) - Nested loop join without optimization
 * • Average/Max/Min(): O(n) - Single pass through collection
 * • OrderBy(): O(n log n) - Uses QuickSort algorithm
 * • GroupBy(): O(n) - Single pass with hash table
 * 
 * Memory Usage: All data loaded into RAM
 * Best for: Small to medium datasets (< 100K records)
 * 
 * SQL DATABASE QUERIES:
 * ---------------------
 * • WHERE: O(log n) with indexes, O(n) without indexes
 * • JOIN: O(n log m) with indexes, O(n*m) without indexes
 * • Aggregates: O(n) or O(log n) with covering indexes
 * • ORDER BY: O(n log n) or O(log n) if index matches
 * • GROUP BY: O(n log n) or O(n) with indexes
 * 
 * Memory Usage: Pages loaded on demand, result sets only
 * Best for: Large datasets (> 100K records), persistent storage
 * 
 * WHEN TO USE EACH:
 * =================
 * 
 * Use C# LINQ when:
 * ✅ Working with small collections in memory
 * ✅ Complex business logic that's hard to express in SQL
 * ✅ Need strong typing and compile-time checking
 * ✅ Data comes from multiple sources (APIs, files, etc.)
 * ✅ Processing already-loaded object graphs
 * 
 * Use SQL when:
 * ✅ Large datasets that don't fit comfortably in memory
 * ✅ Need to filter data before loading (reduce network traffic)
 * ✅ Simple queries that can leverage database indexes
 * ✅ Reporting and analytics on persistent data
 * ✅ Multiple applications need same data access patterns
 * 
 * HYBRID APPROACH (Best Practice):
 * ================================
 * 1. Use SQL/Entity Framework to filter and reduce dataset
 * 2. Use LINQ for complex in-memory processing of smaller result sets
 * 
 * Example Performance Comparison:
 * ------------------------------
 * Dataset: 1 Million employee records
 * 
 * LINQ: employees.Where(e => e.Salary > 50000).ToList()
 * - Loads ALL 1M records into memory: ~200MB RAM
 * - Filters in C#: O(n) = 1M iterations
 * - Time: ~500ms
 * 
 * SQL: SELECT * FROM Employees WHERE Salary > 50000
 * - Uses salary index: O(log n) = ~20 index lookups
 * - Returns only matching records: ~50MB network transfer
 * - Time: ~50ms
 * 
 * The examples in this file use small collections, so LINQ performance
 * is acceptable. For production systems with large datasets, prefer
 * SQL for initial filtering, then LINQ for complex business logic.
 */