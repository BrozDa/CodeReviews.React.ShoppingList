namespace ShoppingList.BrozDa.Server.Models
{
    public class ShoppingListItem
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public bool IsPickedUp { get; set; }
    }
}
