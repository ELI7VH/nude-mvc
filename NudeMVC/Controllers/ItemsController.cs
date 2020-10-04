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

        public class ItemCreateVM
        {
            public string Name { get; set; }
            public decimal Value { get; set; }
            public Category Category { get; set; }
        }

        // POST api/<ItemsController>
        [HttpPost]
        public async Task<ActionResult> Post(ItemCreateVM item)
        {
            // parse body
            await db.Item.AddAsync(new Item { 
                Name=item.Name,  
                Value = item.Value, 
                Category = item.Category 
            });

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
