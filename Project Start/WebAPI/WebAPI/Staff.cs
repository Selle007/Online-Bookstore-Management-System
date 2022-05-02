using System.ComponentModel.DataAnnotations;
namespace WebAPI
{
    public class Staff
    {
        [Key]
        public int StaffID { get; set; }
        
        public String StaffName{ get; set; } =String.Empty;  
        public String JobExp { get; set; } = String.Empty;
        public String Role { get; set; } = String.Empty;
        public int PhoneNr { get; set; } 
        public int Age { get; set; }

    }
}
