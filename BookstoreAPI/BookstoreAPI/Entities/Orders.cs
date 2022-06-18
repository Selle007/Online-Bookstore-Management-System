﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookstoreAPI.Entities
{
    public class Orders
    {
        [Key]
        public int orderId { get; set; }
        [ForeignKey("Book")]
        public int bookId { get; set; }
        [ForeignKey("AspNetUsers")]
        public string UserName { get; set; }



    }
}