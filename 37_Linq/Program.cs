class Program
{
    static void Main()
    {
        // Static data: employees and departments as lists of dictionaries
        var employees = new List<Dictionary<string, object>>
        {
            new() { ["Id"] = 1, ["FirstName"] = "Bob", ["LastName"] = "Jones", ["AnnualSalary"] = 60000.3m, ["IsManager"] = true, ["DepartmentId"] = 1 },
            new() { ["Id"] = 2, ["FirstName"] = "Sarah", ["LastName"] = "Jameson", ["AnnualSalary"] = 80000.1m, ["IsManager"] = true, ["DepartmentId"] = 2 },
            new() { ["Id"] = 3, ["FirstName"] = "Douglas", ["LastName"] = "Roberts", ["AnnualSalary"] = 40000.2m, ["IsManager"] = false, ["DepartmentId"] = 2 },
            new() { ["Id"] = 4, ["FirstName"] = "Jane", ["LastName"] = "Stevens", ["AnnualSalary"] = 30000.2m, ["IsManager"] = false, ["DepartmentId"] = 3 },
            new() { ["Id"] = 4, ["FirstName"] = "Kostantin", ["LastName"] = "Spenst", ["AnnualSalary"] = 300000.2m, ["IsManager"] = false, ["DepartmentId"] = 3 }
        };

        var departments = new List<Dictionary<string, object>>
        {
            new() { ["Id"] = 1, ["ShortName"] = "HR", ["LongName"] = "Human Resources" },
            new() { ["Id"] = 2, ["ShortName"] = "FN", ["LongName"] = "Finance" },
            new() { ["Id"] = 3, ["ShortName"] = "TE", ["LongName"] = "Technology" }
        };

        // 1. Filtering: Find all managers (LINQ vs. loop)
        /*
        Managers
        ------------
        Bob Jones
        Sarah Jameson
        */
        var managers = employees.Where(e => (bool)e["IsManager"]);
        Console.WriteLine("Managers");
        Console.WriteLine("------------");
        foreach (var m in managers)
            Console.WriteLine($"{m["FirstName"]} {m["LastName"]}");

        // Demonstrating usability of ToList():
        // You can now use list methods, e.g., add a new manager directly to the list
        // var managers = employees.Where(e => (bool)e["IsManager"]).ToList();
        // managers.Add(new Dictionary<string, object> {
        //     ["Id"] = 5, ["FirstName"] = "Alex", ["LastName"] = "Smith", ["AnnualSalary"] = 70000m, ["IsManager"] = true, ["DepartmentId"] = 1
        // });
        // Console.WriteLine("After adding a new manager using ToList():");
        // foreach (var m in managers)
        //     Console.WriteLine($"{m["FirstName"]} {m["LastName"]}");
        // Console.WriteLine();


        // 2. Filtering: Employees with salary > 50000
        /*
        High Earners
        ----------------------
        Sarah Jameson: 80000.1
        Bob Jones: 60000.3
        */
        var highEarners = employees.Where(e => (decimal)e["AnnualSalary"] > 50000);
        Console.WriteLine("High Earners");
        Console.WriteLine("----------------------");
        foreach (var e in highEarners)
            Console.WriteLine($"{e["FirstName"]} {e["LastName"]}: {e["AnnualSalary"]}");

        // 3. Selecting: Project to names
        /*
        Employee Names
        --------------
        Bob Jones
        Sarah Jameson
        Douglas Roberts
        Jane Stevens
        */
        var names = employees.Select(e => $"{e["FirstName"]} {e["LastName"]}").ToList();
        Console.WriteLine("Employee Names");
        Console.WriteLine("--------------");
        foreach (var n in names)
            Console.WriteLine(n);

        // 4. Ordering: Order by LastName, then FirstName
        /*
        Ordered Employees
        ----------------
        Jameson, Sarah
        Jones, Bob
        Roberts, Douglas
        Stevens, Jane
        */
        var ordered = employees.OrderBy(e => e["LastName"]).ThenBy(e => e["Id"]);
        Console.WriteLine("Ordered Employees");
        Console.WriteLine("----------------");
        foreach (var e in ordered)
            Console.WriteLine($"{e["LastName"]}, {e["FirstName"]}");

        // 5. Chaining: Filter, order, select
        /*
        Chained Result (First Names)
        ---------------------------
        Sarah
        Bob
        */
        var result = employees.Where(e => (decimal)e["AnnualSalary"] > 50000).OrderBy(e => e["LastName"]).Select(e => e["FirstName"]);
        Console.WriteLine("Chained Result (First Names)");
        Console.WriteLine("---------------------------");
        foreach (var r in result)
            Console.WriteLine(r);

        // 6. SelectMany: Flatten all first names to characters
        /*
        All Characters in First Names
        ----------------------------
        B o b S a r a h D o u g l a s J a n e
        */
        var allChars = employees.SelectMany(e => ((string)e["FirstName"]).ToCharArray());
        Console.WriteLine("All Characters in First Names");
        Console.WriteLine("----------------------------");
        foreach (var c in allChars)
            Console.Write(c + " ");
        Console.WriteLine();

        // 7. Zip: Combine employees and departments (by index)
        // 7. Zip: Combine employees' first names with their annual salaries (by index)
        /*
        Zipped (Employee Name - Annual Salary)
        -------------------------------------
        Bob: 60000.3
        Sarah: 80000.1
        Douglas: 40000.2
        Jane: 30000.2
        */
        var employeeNames = employees.Select(e => e["FirstName"]);
        var employeeSalaries = employees.Select(e => e["AnnualSalary"]);
        var zipped = employeeNames.Zip(employeeSalaries, (name, salary) => $"{name}: {salary}");
        Console.WriteLine("Zipped (Employee Name - Annual Salary)");
        Console.WriteLine("-------------------------------------");
        foreach (var z in zipped)
            Console.WriteLine(z);

        // 8. Join: Inner join employees and departments
        /*
        Joined (Employee - Department)
        -----------------------------
        Bob Jones - Human Resources
        Sarah Jameson - Finance
        Douglas Roberts - Finance
        Jane Stevens - Technology
        */
        var joined = employees.Join(
            departments,
            e => e["DepartmentId"],
            d => d["Id"],
            (e, d) => new { Name = $"{e["FirstName"]} {e["LastName"]}", Department = d["LongName"] }  // the return
        );
        Console.WriteLine("Joined (Employee - Department)");
        Console.WriteLine("-----------------------------");
        foreach (var j in joined)
            Console.WriteLine($"{j.Name} - {j.Department}");
        Console.WriteLine();

                // 9. GroupJoin: Departments with their employees
                /*
                GroupJoin (Department with Employees)
                ------------------------------------
                Human Resources:
                    Bob Jones
                Finance:
                    Sarah Jameson
                    Douglas Roberts
                Technology:
                    Jane Stevens
                */
                var groupJoin = departments.GroupJoin(
                        employees,
                        d => d["Id"],
                        e => e["DepartmentId"],
                        (d, emps) => new { Department = d["LongName"], Employees = emps }
                );
                Console.WriteLine("GroupJoin (Department with Employees)");
                Console.WriteLine("------------------------------------");
                foreach (var g in groupJoin)
                {
                        Console.WriteLine($"{g.Department}:");
                        foreach (var emp in g.Employees)
                                Console.WriteLine($"  {emp["FirstName"]} {emp["LastName"]}");
                }
                Console.WriteLine();

                // 10. Grouping: Employees by DepartmentId
                /*
                Grouped (Employees by DepartmentId)
                ----------------------------------
                DepartmentId: 1
                    Bob Jones
                DepartmentId: 2
                    Sarah Jameson
                    Douglas Roberts
                DepartmentId: 3
                    Jane Stevens
                */
                var grouped = employees.GroupBy(e => e["DepartmentId"]);
                Console.WriteLine("Grouped (Employees by DepartmentId)");
                Console.WriteLine("----------------------------------");
                foreach (var group in grouped)
                {
                        Console.WriteLine($"DepartmentId: {group.Key}");
                        foreach (var emp in group)
                                Console.WriteLine($"  {emp["FirstName"]} {emp["LastName"]}");
                }
                Console.WriteLine();

        // 11. Query Expression Equivalents
        // Filtering
        var highEarnersQuery = from e in employees
                                where (decimal)e["AnnualSalary"] > 50000
                                select e;
        Console.WriteLine("Query Syntax - High Earners:");
        foreach (var e in highEarnersQuery)
            Console.WriteLine($"{e["FirstName"]} {e["LastName"]}: {e["AnnualSalary"]}");
        Console.WriteLine();

        // Join
        var joinedQuery = from e in employees
                            join d in departments on e["DepartmentId"] equals d["Id"]
                            select new { Name = $"{e["FirstName"]} {e["LastName"]}", Department = d["LongName"] };
        Console.WriteLine("Query Syntax - Joined:");
        foreach (var j in joinedQuery)
            Console.WriteLine($"{j.Name} - {j.Department}");
        
        // Grouping
        var groupedQuery = from e in employees
                            group e by e["DepartmentId"];
        Console.WriteLine("Query Syntax - Grouped:");
        foreach (var group in groupedQuery)
        {
            Console.WriteLine($"DepartmentId: {group.Key}");
            foreach (var emp in group)
                Console.WriteLine($"  {emp["FirstName"]} {emp["LastName"]}");
        }
    }
}