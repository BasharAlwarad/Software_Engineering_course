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
            new() { ["Id"] = 4, ["FirstName"] = "Jane", ["LastName"] = "Stevens", ["AnnualSalary"] = 30000.2m, ["IsManager"] = false, ["DepartmentId"] = 3 }
        };

        var departments = new List<Dictionary<string, object>>
        {
            new() { ["Id"] = 1, ["ShortName"] = "HR", ["LongName"] = "Human Resources" },
            new() { ["Id"] = 2, ["ShortName"] = "FN", ["LongName"] = "Finance" },
            new() { ["Id"] = 3, ["ShortName"] = "TE", ["LongName"] = "Technology" }
        };

        // 1. Filtering: Find all managers (LINQ vs. loop)
        var managers = employees.Where(e => (bool)e["IsManager"]).ToList();
        Console.WriteLine("Managers:");
        foreach (var m in managers)
            Console.WriteLine($"{m["FirstName"]} {m["LastName"]}");
        Console.WriteLine();

        // 2. Filtering: Employees with salary > 50000
        var highEarners = employees.Where(e => (decimal)e["AnnualSalary"] > 50000);
        Console.WriteLine("High Earners:");
        foreach (var e in highEarners)
            Console.WriteLine($"{e["FirstName"]} {e["LastName"]}: {e["AnnualSalary"]}");
        Console.WriteLine();

        // 3. Selecting: Project to names
        var names = employees.Select(e => $"{e["FirstName"]} {e["LastName"]}");
        Console.WriteLine("Employee Names:");
        foreach (var n in names)
            Console.WriteLine(n);
        Console.WriteLine();

        // 4. Ordering: Order by LastName, then FirstName
        var ordered = employees.OrderBy(e => e["LastName"]).ThenBy(e => e["FirstName"]);
        Console.WriteLine("Ordered Employees:");
        foreach (var e in ordered)
            Console.WriteLine($"{e["LastName"]}, {e["FirstName"]}");
        Console.WriteLine();

        // 5. Chaining: Filter, order, select
        var result = employees
            .Where(e => (decimal)e["AnnualSalary"] > 50000)
            .OrderBy(e => e["LastName"])
            .Select(e => e["FirstName"]);
        Console.WriteLine("Chained Result (First Names):");
        foreach (var r in result)
            Console.WriteLine(r);
        Console.WriteLine();

        // 6. SelectMany: Flatten all first names to characters
        var allChars = employees.SelectMany(e => ((string)e["FirstName"]).ToCharArray());
        Console.WriteLine("All Characters in First Names:");
        foreach (var c in allChars)
            Console.Write(c + " ");
        Console.WriteLine("\n");

        // 7. Zip: Combine employees and departments (by index)
        var zipped = employees.Zip(departments, (e, d) => $"{e["FirstName"]} - {d["ShortName"]}");
        Console.WriteLine("Zipped (Employee - Department):");
        foreach (var z in zipped)
            Console.WriteLine(z);
        Console.WriteLine();

        // 8. Join: Inner join employees and departments
        var joined = employees.Join(
            departments,
            e => e["DepartmentId"],
            d => d["Id"],
            (e, d) => new { Name = $"{e["FirstName"]} {e["LastName"]}", Department = d["LongName"] }
        );
        Console.WriteLine("Joined (Employee - Department):");
        foreach (var j in joined)
            Console.WriteLine($"{j.Name} - {j.Department}");
        Console.WriteLine();

        // 9. GroupJoin: Departments with their employees
        var groupJoin = departments.GroupJoin(
            employees,
            d => d["Id"],
            e => e["DepartmentId"],
            (d, emps) => new { Department = d["LongName"], Employees = emps }
        );
        Console.WriteLine("GroupJoin (Department with Employees):");
        foreach (var g in groupJoin)
        {
            Console.WriteLine($"{g.Department}:");
            foreach (var emp in g.Employees)
                Console.WriteLine($"  {emp["FirstName"]} {emp["LastName"]}");
        }
        Console.WriteLine();

        // 10. Grouping: Employees by DepartmentId
        var grouped = employees.GroupBy(e => e["DepartmentId"]);
        Console.WriteLine("Grouped (Employees by DepartmentId):");
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
        Console.WriteLine();

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