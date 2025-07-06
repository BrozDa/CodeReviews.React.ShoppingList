using Microsoft.EntityFrameworkCore;
using ShoppingList.BrozDa.Server.Models;

namespace ShoppingList.BrozDa.Server.Data
{
    public class ShoppingListContext : DbContext
    {
        public DbSet<ShoppingListItem> ShoppingList { get; set; } = null!;

        public ShoppingListContext(DbContextOptions options) : base(options) { }
    }
    
    
}
