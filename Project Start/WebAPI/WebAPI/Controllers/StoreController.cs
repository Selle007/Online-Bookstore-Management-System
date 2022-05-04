using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {

        private readonly DataContext _context;
        public StoreController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Store>>> Get()
        {
            return Ok(await _context.Stores.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Store>>> GetById(int id)
        {
            var store = await _context.Stores.FindAsync(id);
            if (store == null)
                return BadRequest("Store not found!");
            return Ok(store);
        }

        [HttpPost]
        public async Task<ActionResult<List<Store>>> AddStore(Store stores)
        {
            _context.Stores.Add(stores);
            await _context.SaveChangesAsync();
            return Ok(await _context.Stores.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Store>>> UpdateStore(Store request)
        {
            var dbStore = await _context.Stores.FindAsync(request.StoreID);
            if (dbStore == null)
                return BadRequest("Store not found!");

            dbStore.StoreName = request.StoreName;
            dbStore.ManagerName = request.ManagerName;
            dbStore.Address = request.Address;
            dbStore.PhoneNr = request.PhoneNr;
            


            await _context.SaveChangesAsync();

            return Ok(await _context.Stores.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Store>>> DeleteStore(int id)
        {
            var dbStore = await _context.Stores.FindAsync(id);
            if (dbStore == null)
                return BadRequest("Store not found!");

            _context.Stores.Remove(dbStore);
            await _context.SaveChangesAsync();
            return Ok(await _context.Stores.ToListAsync());
        }
    }
}
