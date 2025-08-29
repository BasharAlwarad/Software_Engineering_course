// See https://aka.ms/new-console-template for more information
using System;

// Interface for department meeting
interface IDepartment
{
    void DepartmentMeeting();
}

// Base class
class Company
{
    public string Name { get; set; }
    public string Location { get; set; }
    public int FoundedYear { get; set; }
    public static int TotalCompanies = 0; // static member
    public Company(string name, string location, int foundedYear)
    {
        Name = name;
        Location = location;
        FoundedYear = foundedYear;
        TotalCompanies++;
    }
    public virtual void ShowInfo()
    {
        Console.WriteLine($"Company: {Name}, Location: {Location}, Founded: {FoundedYear}");
    }
}

// Composition: Equipment class
class Equipment
{
    public string Name { get; set; }
    public string Department { get; set; }
    public Equipment(string name, string department)
    {
        Name = name;
        Department = department;
    }
    public void ShowEquipment()
    {
        Console.WriteLine($"Equipment: {Name} (Department: {Department})");
    }
}

// HR Department
class HRDepartment : Company, IDepartment
{
    public string Policies { get; set; } // Changed from List to string
    public string Equipments { get; set; } // Changed from List to string
    public HRDepartment(string name, string location, int foundedYear) : base(name, location, foundedYear)
    {
        Policies = "Equal Opportunity, Remote Work";
        Equipments = "Laptop, Printer";
    }
    public void ShowHRInfo()
    {
        Console.WriteLine($"HR Policies: {Policies}");
    }
    public void ShowHREquipment()
    {
        Console.WriteLine($"HR Equipment: {Equipments}");
    }
    public void DepartmentMeeting()
    {
        Console.WriteLine("HR Department Meeting");
    }
    public sealed override void ShowInfo() // sealed method
    {
        Console.WriteLine($"[HR] {Name}, {Location}, {FoundedYear}");
    }
}

// PR Department
class PRDepartment : Company, IDepartment
{
    public string Strategies { get; set; } // Changed from List to string
    public string Equipments { get; set; } // Changed from List to string
    public PRDepartment(string name, string location, int foundedYear) : base(name, location, foundedYear)
    {
        Strategies = "Press Releases, Media Outreach";
        Equipments = "Camera, Microphone";
    }
    public void ShowPRInfo()
    {
        Console.WriteLine($"PR Strategies: {Strategies}");
    }
    public void ShowPREquipment()
    {
        Console.WriteLine($"PR Equipment: {Equipments}");
    }
    public void DepartmentMeeting()
    {
        Console.WriteLine("PR Department Meeting");
    }
}

// Marketing Department
class MarketingDepartment : Company, IDepartment
{
    public string Tools { get; set; } // Changed from List to string
    public string Equipments { get; set; } // Changed from List to string
    public MarketingDepartment(string name, string location, int foundedYear) : base(name, location, foundedYear)
    {
        Tools = "SEO, Social Media, Email Campaigns";
        Equipments = "Tablet, Projector";
    }
    public void ShowMarketingInfo()
    {
        Console.WriteLine($"Marketing Tools: {Tools}");
    }
    public void ShowMarketingEquipment()
    {
        Console.WriteLine($"Marketing Equipment: {Equipments}");
    }
    public void DepartmentMeeting()
    {
        Console.WriteLine("Marketing Department Meeting");
    }
    public override void ShowInfo()
    {
        Console.WriteLine($"[Marketing] {Name}, {Location}, {FoundedYear}");
    }
}

// Sealed class
sealed class FinanceDepartment : Company
{
    public FinanceDepartment(string name, string location, int foundedYear) : base(name, location, foundedYear) { }
}

// HR Employee
class HREmployee : HRDepartment
{
    public string Title { get; set; }
    public string Job { get; set; }
    public string Specialty { get; set; }
    public HREmployee(string name, string location, int foundedYear, string title, string job, string specialty)
        : base(name, location, foundedYear)
    {
        Title = title;
        Job = job;
        Specialty = specialty;
    }
    public void ShowEmployeeInfo()
    {
        Console.WriteLine($"[HR] {Title} - {Job} ({Specialty})");
    }
}

// PR Employee
class PREmployee : PRDepartment
{
    public string Title { get; set; }
    public string Job { get; set; }
    public string Specialty { get; set; }
    public PREmployee(string name, string location, int foundedYear, string title, string job, string specialty)
        : base(name, location, foundedYear)
    {
        Title = title;
        Job = job;
        Specialty = specialty;
    }
    public void ShowEmployeeInfo()
    {
        Console.WriteLine($"[PR] {Title} - {Job} ({Specialty})");
    }
}

// Marketing Employee
class MarketingEmployee : MarketingDepartment
{
    public string Title { get; set; }
    public string Job { get; set; }
    public string Specialty { get; set; }
    public MarketingEmployee(string name, string location, int foundedYear, string title, string job, string specialty)
        : base(name, location, foundedYear)
    {
        Title = title;
        Job = job;
        Specialty = specialty;
    }
    public void ShowEmployeeInfo()
    {
        Console.WriteLine($"[Marketing] {Title} - {Job} ({Specialty})");
    }
}

// Example of composition (from README)
class Engine { }
class Car
{
    private Engine engine; // Car has an Engine (composition)
    public Car() { engine = new Engine(); }
}

// Main program
class Program
{
    static void Main()
    {
        // Company and Departments
        var company = new Company("TechCorp", "New York", 2001);
        company.ShowInfo();
        Console.WriteLine($"Total companies: {Company.TotalCompanies}");

        var hr = new HRDepartment("TechCorp", "New York", 2001);
        hr.ShowHRInfo();
        hr.ShowHREquipment();
        hr.DepartmentMeeting();
        hr.ShowInfo();

        var pr = new PRDepartment("TechCorp", "New York", 2001);
        pr.ShowPRInfo();
        pr.ShowPREquipment();
        pr.DepartmentMeeting();
        pr.ShowInfo();

        var marketing = new MarketingDepartment("TechCorp", "New York", 2001);
        marketing.ShowMarketingInfo();
        marketing.ShowMarketingEquipment();
        marketing.DepartmentMeeting();
        marketing.ShowInfo();

        var finance = new FinanceDepartment("TechCorp", "New York", 2001);
        finance.ShowInfo();

        // Employees
        var hrEmp = new HREmployee("TechCorp", "New York", 2001, "Manager", "Recruiter", "Technical Hiring");
        hrEmp.ShowEmployeeInfo();

        var prEmp = new PREmployee("TechCorp", "New York", 2001, "Lead", "Media Manager", "Press Relations");
        prEmp.ShowEmployeeInfo();

        var mktEmp = new MarketingEmployee("TechCorp", "New York", 2001, "Specialist", "Content Creator", "SEO");
        mktEmp.ShowEmployeeInfo();

        // Composition example
        var car = new Car();
        Console.WriteLine("Car with engine created (composition example)");
    }
}
