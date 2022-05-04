using System.ComponentModel.DataAnnotations;
namespace WebAPI
{
    public class Store
    {
        [Key]
        public int StoreID { get; set; } 
        public String StoreName { get; set; } = String.Empty;
        public String ManagerName { get; set; } = String.Empty;
        public String Address { get; set; } = String.Empty;
        public int PhoneNr { get; set; }

    }
}
