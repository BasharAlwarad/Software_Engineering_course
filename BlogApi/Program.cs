	
// // This code defines a simple ASP.NET Core Web API application using minimal APIs. It demonstrates how to set up services, middleware, and endpoints for handling HTTP requests. The application includes custom middleware for logging requests and blocking access to a specific route, as well as endpoints for retrieving and creating users and posts.
// // using Microsoft.AspNetCore.Mvc;
// // Program.cs
// //  A simple ASP.NET Core Web API application demonstrating minimal APIs, configuration, and middleware.
// var builder = WebApplication.CreateBuilder(args);
// //  Add services to the container.
// builder.Services.AddOpenApi();
// builder.Services.AddControllers();
// builder.Services.AddSingleton<TimeService>();
// //  Build the app.
// var app = builder.Build();


// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }

// app.MapControllers();
// //  Read configuration values with defaults
// var appName = builder.Configuration["AppName"] ?? "Default App";
// var greeting = builder.Configuration["Greeting"] ?? "Hi";
// // Custom middleware to log requests
// app.Use(async (context, next) =>
// {
//     Console.WriteLine($"Handling request: {context.Request.Path}");
//     await next.Invoke();
//     Console.WriteLine($"Finished handling request.");
// });

// app.Use(async (context, next) =>
// {
//     var timeService = context.RequestServices.GetRequiredService<TimeService>();
//     Console.WriteLine($"time of request: {timeService.Now()}");
//     await next.Invoke();
// });

// app.Use(async (context, next) =>
// {
//     var address = context.Connection.RemoteIpAddress?.ToString() ?? "unknown";
//     Console.WriteLine($"address of user: {address}");
//     await next.Invoke();
// });
// // Serve static files from wwwroot
// app.UseStaticFiles();
// // Routing and custom middleware to block access to /forbidden
// app.UseRouting();
// // Custom middleware to block access to /forbidden
// app.Use(async (context, next) =>
// {
//     if (context.Request.Path == "/forbidden")
//     {
//         context.Response.StatusCode = 403;
//         await context.Response.WriteAsync("Forbidden");
//     }
//     else
//     {
//         await next();
//     }
// });
// // Define endpoints
// app.MapGet("/", () => "hello from default!");
// app.MapGet("/time", (TimeService ts) => ts.Now());
// app.MapGet("/config", () => $"{appName} says: {greeting}");

// app.MapUsers();
// app.MapPosts();
// app.MapEmployees();


// // app.MapPost("/entries",(JournalEntryRequestDto entry)=>{

// //     var journalEntry=new JournalEntry{
// //         Id=Guid.NewGuid(),
// //         Title=entry.Title,
// //         Content=entry.Content,
// //         CreatedAt=DateTime.UtcNow
// //     };
// //     // return Results.Created($"/entries/{journalEntry.Id}", journalEntry); 
// //     return Results.Created($"/entries/{journalEntry.Id}",journalEntry);
// // });

// app.MapPost("/entries", (JournalEntryRequestDto entry) =>
// {
//     var journalEntry = new JournalEntry
//     {
//         Id = Guid.NewGuid(),
//         Title = entry.Title,
//         Content = entry.Content,
//         CreatedAt = DateTime.UtcNow
//     };
//     return Results.Created($"/entries/{journalEntry.Id}", journalEntry);
//     // the other method from validationFilter.cs
// // }).AddEndpointFilter<ValidationFilter<JournalEntryRequestDto>>();
// }).WithValidation<JournalEntryRequestDto>();


// // Run the app
// app.Run();


// public class JournalEntry
// {
//     public Guid Id{get;set;}
//     public string? Title {get;set;}
//     public string? Content {get;set;}
//     public DateTime? CreatedAt {get;set;}
// }

// // public record JournalEntryRequestDto(string Title,string Content);

// // TimService.cs
// public class TimeService
// {
//     public string Now() => DateTime.Now.ToString("T");
// }



// try the api documentation


var builder = WebApplication.CreateBuilder(args);
 
builder.Services.AddOpenApi();
 
var app = builder.Build();
 
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUi(options =>
    {
        options.DocumentPath = "/openapi/v1.json";
    });
}
 
// User Endpoints
app.MapGet("/users", () =>
{
    var users = new List<UserResponseDto>
    {
        new UserResponseDto(1, "Alice", "alice@mail"),
        new UserResponseDto(2, "Bob", "bob@mail")
    };
    return users;
});
 
app.MapPost("/users", (UserRequestDto user) =>
{
    var createdUser = new UserResponseDto(3, user.Name, user.Email);
    return Results.Created($"/users/{createdUser.Id}", createdUser);
});
 
// Post Endpoints
app.MapGet("/posts", () =>
{
    var posts = new List<PostResponseDto>
    {
        new PostResponseDto(1, "First Post", "This is the content of the first post.", 1),
        new PostResponseDto(2, "Second Post", "This is the content of the second post.", 2)
    };
    return posts;
});
 
app.MapPost("/posts", (PostRequestDto post) =>
{
    var createdPost = new PostResponseDto(3, post.Title, post.Content, post.AuthorId);
    return Results.Created($"/posts/{createdPost.Id}", createdPost);
});
 
app.Run();
 
// DTOs
public record UserRequestDto(string Name, string Email);
public record UserResponseDto(int Id, string Name, string Email);
public record PostRequestDto(string Title, string Content, int AuthorId);
public record PostResponseDto(int Id, string Title, string Content, int AuthorId);