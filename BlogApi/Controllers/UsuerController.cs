using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("info")]
public class UsersController : ControllerBase
{
    [HttpGet("{id:int}")]
    public IActionResult GetUser(int id)
    {
        return Ok(new { Id = id, Name = $"User{id}" });
    }
}