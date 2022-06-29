using System.ComponentModel.DataAnnotations;

namespace BookstoreAPI.DTO
{
    public class RegisterDto
    {
        public string username { get; set; }
        [EmailAddress]
        public string email { get; set; }
        public string password { get; set; }

    }
}
