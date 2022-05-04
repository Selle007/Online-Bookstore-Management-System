using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Application.Books;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : BaseApiController
    {
        
        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetAll()
        {
            return await Mediator.Send(new List.Query());
        }
       
        [HttpPost]
        public async Task<IActionResult> CreateBook(Book book)
        {
            return Ok(await Mediator.Send(new Create.Command { Book = book }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(Book book)
        {
            return Ok(await Mediator.Send(new Edit.Command { Book = book }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command { BookID = id }));
        }

        
    }
}
