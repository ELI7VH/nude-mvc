using Microsoft.EntityFrameworkCore;


namespace NudeMVC.Data
{
    public class NudeMVCContext : DbContext
    {
        public NudeMVCContext(DbContextOptions<NudeMVCContext> options) : base(options)
        {
        }

        public DbSet<NudeMVC.Models.Item> Item { get; set; }
    }
}
