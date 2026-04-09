public static class PostEndpoints
{
    public static RouteGroupBuilder MapPosts(this IEndpointRouteBuilder routes)
    {
        
        var group = routes.MapGroup("/posts");

        // Posts endpoints
        group.MapGet("/", () => new[] { "Post 1", "Post 2" });
        group.MapGet("/search", (string term) => $"You searched for posts with: {term}");
        group.MapGet("/{id}", (int id) => $"Post {id}");
        group.MapPost("/", (PostRequestDto post) => $"Created post {post.Title}");

        return group;
    }
 
// DTOs/PostRequestDto.cs
record PostRequestDto(string Title);

}