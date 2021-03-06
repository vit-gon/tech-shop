﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TechShop.Models
{
    public class PFilterValue
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(450)]
        public string FilterValue { get; set; }
    }
}
