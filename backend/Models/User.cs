using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class User
    {
        public int id { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 6)]
        public string Username { get; set; }
        [Required]
        [StringLength(30, MinimumLength = 6)]
        public string Password { get; set; }

    }
}
