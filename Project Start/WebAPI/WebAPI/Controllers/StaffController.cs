using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {

        private readonly DataContext _context;
        public StaffController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Staff>>> Get()
        {
            return Ok(await _context.Staff.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Staff>>> GetById(int id)
        {
            var staff = await _context.Staff.FindAsync(id);
            if (staff == null)
                return BadRequest("Staff not found!");
            return Ok(staff);
        }

        [HttpPost]
        public async Task<ActionResult<List<Staff>>> AddStaff(Staff staff)
        {
            _context.Staff.Add(staff);
            await _context.SaveChangesAsync();
            return Ok(await _context.Staff.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Staff>>> UpdateStaff(Staff request)
        {
            var dbStaff = await _context.Staff.FindAsync(request.StaffID);
            if (dbStaff == null)
                return BadRequest("Staff not found!");

            dbStaff.StaffName = request.StaffName;
            dbStaff.JobExp = request.JobExp;
            dbStaff.Role = request.Role;
            dbStaff.PhoneNr = request.PhoneNr;
            dbStaff.Age = request.Age;
        

            await _context.SaveChangesAsync();

            return Ok(await _context.Staff.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Staff>>> DeleteStaff(int id)
        {
            var dbStaff = await _context.Staff.FindAsync(id);
            if (dbStaff == null)
                return BadRequest("Staff not found!");

            _context.Staff.Remove(dbStaff);
            await _context.SaveChangesAsync();
            return Ok(await _context.Staff.ToListAsync());
        }
    }
}
