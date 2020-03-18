﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TechShop.Models
{
    public class PFilterName
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(450)]
        public string FilterName { get; set; }
    }
}
