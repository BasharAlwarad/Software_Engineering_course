using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Text;

class Program
{
    const string EmployeesFile = "employees.csv";
    const string SalesFile = "sales.csv";

    public static void Main(string[] args)
    {
        EnsureSampleEmployees();
        Console.WriteLine("Selling system — employee login. Type 'exit' at any prompt to quit the app.");

        while (true)
        {
            Console.Write("Employee name: ");
            var name = Console.ReadLine()?.Trim();
            if (IsExit(name)) break;

            Console.Write("Password: ");
            var password = ReadPassword();
            if (IsExit(password)) break;

            if (VerifyEmployee(name, password))
            {
                Console.WriteLine($"Welcome, {name}! You are now logged in.");
                var continueApp = RunOrderLoop(name);
                if (!continueApp) break; // exit requested from inside
                // otherwise return to login prompt
            }
            else
            {
                Console.WriteLine("Invalid name or password. Try again or type 'exit' to quit.");
            }
        }

        Console.WriteLine("Goodbye.");
    }

    static void EnsureSampleEmployees()
    {
        if (!File.Exists(EmployeesFile))
        {
            File.WriteAllText(EmployeesFile, "Name,Password\nalice,pass123\nbob,secure\n");
        }
        if (!File.Exists(SalesFile))
        {
            File.WriteAllText(SalesFile, "Employee,Item,Quantity,PricePerUnit,Total,Date\n");
        }
    }

    static bool VerifyEmployee(string name, string password)
    {
        if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(password)) return false;
        if (!File.Exists(EmployeesFile)) return false;

        foreach (var line in File.ReadLines(EmployeesFile).Skip(1))
        {
            var parts = line.Split(',');
            if (parts.Length < 2) continue;
            var n = parts[0].Trim();
            var p = parts[1].Trim();
            if (string.Equals(n, name, StringComparison.OrdinalIgnoreCase) && p == password)
                return true;
        }

        return false;
    }

    static bool RunOrderLoop(string employeeName)
    {
        decimal runningTotal = 0m;
        var items = new List<(string Item, int Qty, decimal Price)>();

        Console.WriteLine("Enter orders. Commands: 'order' (add), 'total' (show total), 'reset' (clear current order), 'logout' (logout), 'exit' (quit app)");

        while (true)
        {
            Console.Write("command> ");
            var cmd = Console.ReadLine()?.Trim().ToLower();
            if (IsExit(cmd)) return false; // signal to exit entire app
            if (cmd == "logout")
            {
                Console.WriteLine("Logged out.");
                return true; // back to login
            }

            if (cmd == "order")
            {
                Console.Write("Item name: ");
                var item = Console.ReadLine()?.Trim();
                if (IsExit(item)) return false;

                Console.Write("Quantity: ");
                var qStr = Console.ReadLine()?.Trim();
                if (IsExit(qStr)) return false;
                if (!int.TryParse(qStr, out var qty) || qty <= 0)
                {
                    Console.WriteLine("Invalid quantity. Must be a positive integer.");
                    continue;
                }

                Console.Write("Price per unit: ");
                var pStr = Console.ReadLine()?.Trim();
                if (IsExit(pStr)) return false;
                if (!decimal.TryParse(pStr, out var price) || price < 0)
                {
                    Console.WriteLine("Invalid price. Must be a non-negative number.");
                    continue;
                }

                items.Add((item, qty, price));
                var lineTotal = qty * price;
                runningTotal += lineTotal;
                Console.WriteLine($"Added {qty} x {item} @ {price:C} each = {lineTotal:C}. Running total: {runningTotal:C}");

                // persist each sale line to sales.csv
                var csvLine = $"{EscapeCsv(employeeName)},{EscapeCsv(item)},{qty},{price},{lineTotal},{DateTime.Now:O}\n";
                File.AppendAllText(SalesFile, csvLine);
            }
            else if (cmd == "total")
            {
                Console.WriteLine($"Current running total: {runningTotal:C}");
                if (items.Count > 0)
                {
                    Console.WriteLine("Items in this session:");
                    foreach (var it in items)
                    {
                        Console.WriteLine($" - {it.Qty} x {it.Item} @ {it.Price:C} = {(it.Qty * it.Price):C}");
                    }
                }
                else
                {
                    Console.WriteLine("(no items yet)");
                }
            }
            else if (cmd == "reset")
            {
                items.Clear();
                runningTotal = 0m;
                Console.WriteLine("Current order cleared.");
            }
            else if (string.IsNullOrWhiteSpace(cmd))
            {
                // ignore
            }
            else
            {
                Console.WriteLine("Unknown command. Use 'order', 'total', 'reset', 'logout' or 'exit'.");
            }
        }
    }

    static bool IsExit(string input) => string.Equals(input?.Trim(), "exit", StringComparison.OrdinalIgnoreCase);

    // Simple CSV escaping for commas/newlines/quotes
    static string EscapeCsv(string s)
    {
        if (s == null) return "";
        if (s.Contains(',') || s.Contains('"') || s.Contains('\n'))
        {
            return '"' + s.Replace("\"", "\"\"") + '"';
        }
        return s;
    }

    // Read password with masking
    static string ReadPassword()
    {
        var sb = new StringBuilder();
        while (true)
        {
            var key = Console.ReadKey(intercept: true);
            if (key.Key == ConsoleKey.Enter)
            {
                Console.WriteLine();
                break;
            }
            else if (key.Key == ConsoleKey.Backspace)
            {
                if (sb.Length > 0)
                {
                    sb.Length--;
                    Console.Write("\b \b");
                }
            }
            else
            {
                sb.Append(key.KeyChar);
                Console.Write('*');
            }
        }
        return sb.ToString();
    }
}