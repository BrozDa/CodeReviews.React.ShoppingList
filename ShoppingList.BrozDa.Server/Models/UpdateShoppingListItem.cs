namespace ShoppingList.BrozDa.Server.Models
{
    public class UpdateShoppingListItem
    {
        public string Name { get; set; } = null!;
        public bool IsPickedUp { get; set; }
    }
}
