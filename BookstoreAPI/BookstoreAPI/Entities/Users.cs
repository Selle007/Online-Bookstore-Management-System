using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace BookstoreAPI.Entities
{
    public class Users

    {
        [Key]
        [Required]
        public int userId { get; set; }
        
        [Required]
        public string username { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string surname { get; set; }

        [Required]
        [RegularExpression("^[a-zA-Z0-9_\\.-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$", ErrorMessage = "E-mail is not valid")]
        public string email { get; set; }

        [Required]
        public string password { get; set; }
        [Required]
        public int roleId { get; set; }
    }
}
