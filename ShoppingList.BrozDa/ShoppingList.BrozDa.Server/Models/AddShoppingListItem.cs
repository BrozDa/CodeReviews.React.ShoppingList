namespace ShoppingList.BrozDa.Server.Models
{
    public class AddShoppingListItem
    {
        public string Name { get; set; } = null!;
        public bool IsPickedUp { get; set; }
    }
}
