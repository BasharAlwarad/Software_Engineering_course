# 37_linq

## Why Use LINQ?

LINQ (Language Integrated Query) lets you write queries directly in C# to filter, select, and transform data from collections, databases, XML, and more. It makes code more readable, concise, and expressive compared to traditional loops.

### Example: Filtering with LINQ vs. Traditional Loop

Suppose you have a list of employees and want to find all managers:

**Without LINQ:**

```csharp
List<Employee> employees = ...;
List<Employee> managers = new List<Employee>();
foreach (var emp in employees)
{
    if (emp.IsManager)
        managers.Add(emp);
}
```

**With LINQ:**

```csharp
var managers = employees.Where(emp => emp.IsManager).ToList();
```

---

## Static Data Setup

We'll use two lists of dictionaries to represent employees and departments:

```csharp
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
```

---

## LINQ Features and Examples

### Querying Objects (Where, Select, OrderBy, etc.)

#### Filtering (Where)

```csharp
var highEarners = employees.Where(e => (decimal)e["AnnualSalary"] > 50000);
```

#### Selecting (Select)

```csharp
var names = employees.Select(e => $"{e["FirstName"]} {e["LastName"]}");
```

#### Ordering (OrderBy, ThenBy)

```csharp
var ordered = employees.OrderBy(e => e["LastName"]).ThenBy(e => e["FirstName"]);
```

#### ToList()

```csharp
var employeeList = employees.Where(e => (bool)e["IsManager"]).ToList();
```

#### Chaining Operations

```csharp
var result = employees
    .Where(e => (decimal)e["AnnualSalary"] > 50000)
    .OrderBy(e => e["LastName"])
    .Select(e => e["FirstName"]);
```

#### SelectMany

```csharp
var allChars = employees.SelectMany(e => ((string)e["FirstName"]).ToCharArray());
```

#### Zip

```csharp
var zipped = employees.Zip(departments, (e, d) => $"{e["FirstName"]} - {d["ShortName"]}");
```

---

### Joins

#### Inner Join (Method Syntax)

```csharp
var joined = employees.Join(
    departments,
    e => e["DepartmentId"],
    d => d["Id"],
    (e, d) => new { Name = $"{e["FirstName"]} {e["LastName"]}", Department = d["LongName"] }
);
```

#### Group Join

```csharp
var groupJoin = departments.GroupJoin(
    employees,
    d => d["Id"],
    e => e["DepartmentId"],
    (d, emps) => new { Department = d["LongName"], Employees = emps }
);
```

#### Grouping

```csharp
var grouped = employees.GroupBy(e => e["DepartmentId"]);
```

---

### Query Expression Equivalents

#### Filtering

```csharp
var highEarners = from e in employees
                  where (decimal)e["AnnualSalary"] > 50000
                  select e;
```

#### Join

```csharp
var joined = from e in employees
             join d in departments on e["DepartmentId"] equals d["Id"]
             select new { Name = $"{e["FirstName"]} {e["LastName"]}", Department = d["LongName"] };
```

#### Grouping

```csharp
var grouped = from e in employees
              group e by e["DepartmentId"];
```

---

### More Advanced LINQ Features

- SelectMany: flattening nested collections
- Zip: combining two sequences
- GroupJoin: hierarchical results
- Chaining: combining multiple LINQ operations

---

## Summary

LINQ makes querying, filtering, and transforming data in C# much easier and more expressive than traditional loops. It works with arrays, lists, dictionaries, and more.
