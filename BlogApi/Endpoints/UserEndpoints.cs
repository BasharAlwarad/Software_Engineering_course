public static class UserEndpoints
{
    public static RouteGroupBuilder MapUsers(this IEndpointRouteBuilder routes)
    {
        var group = routes.MapGroup("/users");
        group.MapGet("/", () => new[] { "Alice", "Bob" });
        group.MapGet("/{id:int}", (int id) => $"User {id}");
        group.MapPost("/", (UserRequestDto user) => $"Created user {user.Name}");
        return group;
    }
    // DTOs/UserRequestDto.cs
record UserRequestDto(string Name);

}