using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Application.Staffs;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : BaseApiController
    {
 [HttpGet]
        public async Task<ActionResult<List<Staff>>> GetAll()
        {
            return await Mediator.Send(new List.Query());
        }
       
        [HttpPost]
        public async Task<IActionResult> CreateStaff(Staff staff)
        {
            return Ok(await Mediator.Send(new Create.Command { Staff = staff }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStaff(Staff staff)
        {
            return Ok(await Mediator.Send(new Edit.Command { Staff = staff }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaff(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command { StaffID = id }));
        }

    }
}
