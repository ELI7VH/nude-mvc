using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using NudeMVC.Data;
using NudeMVC.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace NudeMVC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly NudeMVCContext db;

        public ItemsController(NudeMVCContext context)
        {
            db = context;
        }

        // GET: api/<ItemsController>
        [HttpGet]
        public async Task<IEnumerable<Item>> Index()
        {
            return await db.Item.ToListAsync();
        }

        // POST api/<ItemsController>
        [HttpPost]
        public async Task<ActionResult> Post(decimal value, string name, Category category)
        {
            // parse body
            await db.Item.AddAsync(new Item { Name=name,  Value = value, Category = category } );
            await db.SaveChangesAsync();
            // TODO: socket
            return Ok();
        }

        // DELETE api/<ItemsController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var item = await db.Item.FindAsync(id);

            if(item == null) return NotFound();

            db.Item.Remove(item);
            await db.SaveChangesAsync();

            // TODO: socket
            return Ok();
        }
    }
}
