using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace NudeMVC.Models
{
    public class Item
    {
        public int ID { get; set; }
        public string Name { get; set; }
        
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Value { get; set; }
    
        public Models.Category Category {  get; set; }
    }
}
