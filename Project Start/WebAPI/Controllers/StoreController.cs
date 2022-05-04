using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Application.Stores;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : BaseApiController
    {

       [HttpGet]
        public async Task<ActionResult<List<Store>>> GetAll()
        {
            return await Mediator.Send(new List.Query());
        }
       
        [HttpPost]
        public async Task<IActionResult> CreateBook(Store store)
        {
            return Ok(await Mediator.Send(new Create.Command { Store = store }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(Store store)
        {
            return Ok(await Mediator.Send(new Edit.Command { Store = store }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command { StoreID = id }));
        }
    }
}
