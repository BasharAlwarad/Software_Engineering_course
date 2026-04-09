using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/product")]

public class ProductController:ControllerBase
{
    [HttpGet("{id:int}")]
    public IActionResult GetProduct(int id)
    {
        return Ok(new {Id=id,Name=$"Product id is {id}"});
    }
}