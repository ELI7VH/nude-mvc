using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NudeMVC.Data;
using System;
using System.Linq;

namespace NudeMVC.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var context = new NudeMVCContext(
                serviceProvider.GetRequiredService<DbContextOptions<NudeMVCContext>>());

            if (context.Item.Any())
            {
                context.Item.RemoveRange(context.Item.ToList());
                context.SaveChanges();
            }

            context.Item.AddRange(
                new Item
                {
                    Name = "TV",
                    Category = Category.Electronics,
                    Value = 2000,
                },
                new Item
                {
                    Name = "Playstation",
                    Category = Category.Electronics,
                    Value = 400,
                },
                new Item
                {
                    Name = "Stereo",
                    Category = Category.Electronics,
                    Value = 1600,
                },
                new Item
                {
                    Name = "Shirts",
                    Category = Category.Clothing,
                    Value = 1100
                },
                new Item
                {
                    Name = "Jeans",
                    Category = Category.Clothing,
                    Value = 1100
                },
                new Item
                {
                    Name = "Pots and Pans",
                    Category = Category.Kitchen,
                    Value = 3000
                },
                new Item
                {
                    Name = "Flatware",
                    Category = Category.Kitchen,
                    Value = 500
                },
                new Item
                {
                    Name = "Knife Set",
                    Category = Category.Kitchen,
                    Value = 500
                },
                new Item
                {
                    Name = "Misc",
                    Category = Category.Kitchen,
                    Value = 1000
                }
            );
            context.SaveChanges();
        }
    }
}
