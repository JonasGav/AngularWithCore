using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class backendContext : DbContext
    {
        public backendContext(DbContextOptions<backendContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
