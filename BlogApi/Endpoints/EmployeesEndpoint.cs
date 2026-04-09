public static class EmployeesEndpoint
{
    public static RouteGroupBuilder MapEmployees(this IEndpointRouteBuilder routes)
    {
        
        var group = routes.MapGroup("/employees");
        group.MapGet("/",()=>new[]{"John","Jane"});
        group.MapGet("/{id:int}",(int id)=>$"Employee {id}");
        group.MapPost("/",(EmployeeRequestDto employee)=>$"created Employee {employee.Name}");
        group.MapDelete("/{id:int}",(int id)=>$"Employee {id} was deleted!");
        return group;
    }
    public record EmployeeRequestDto(string Name);
}