﻿using Microsoft.EntityFrameworkCore;


namespace WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options)
        {

        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Staff> Staff { get; set; }
        public DbSet<Store> Stores { get; set; }
    }
}

