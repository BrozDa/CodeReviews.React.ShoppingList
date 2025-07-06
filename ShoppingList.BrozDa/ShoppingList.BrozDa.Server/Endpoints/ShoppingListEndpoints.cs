using Microsoft.EntityFrameworkCore;
using ShoppingList.BrozDa.Server.Data;
using ShoppingList.BrozDa.Server.Models;

namespace ShoppingList.BrozDa.Server.Endpoints
{
    public static class ShoppingListEndpoints
    {
        public static IEndpointRouteBuilder AddShoppingListEndpoints(this IEndpointRouteBuilder builder) 
        {
            var group = builder.MapGroup("/shopping-list");

            //C ------------------------------------------------------------------------
            group.MapPost("/", async (AddShoppingListItem newItem, ShoppingListContext context) =>
            {
                var result = await context.ShoppingList.AddAsync(new ShoppingListItem() {Name= newItem.Name,IsPickedUp = newItem.IsPickedUp});
                
                await context.SaveChangesAsync();

                return result is not null
                ? Results.Created($"/shopping-list/{result.Entity.Id}", result)
                : Results.BadRequest();
            });
            //R ------------------------------------------------------------------------
            group.MapGet("/", async (ShoppingListContext context) => 
            {
                var result = await context.ShoppingList.ToListAsync();

                return Results.Ok(result);

            });

            group.MapGet("/{id:Guid}", async (Guid id, ShoppingListContext context) =>
            {
                var result = await context.ShoppingList.FindAsync(id);

                return result is not null
                    ? Results.Ok(result)
                    : Results.NotFound();
            });

            //U ------------------------------------------------------------------------

            group.MapPut("/{id:Guid}", async (ShoppingListItem updatedItem, ShoppingListContext context) =>
            {
                var result = await context.ShoppingList.FindAsync(updatedItem.Id);

                if (result is null) { return Results.NotFound(); }

                result.Name = updatedItem.Name;
                result.IsPickedUp = updatedItem.IsPickedUp;

                await context.SaveChangesAsync();

                return Results.Ok();
            });

            //D ------------------------------------------------------------------------
            group.MapDelete("/{id:Guid}", async (Guid id, ShoppingListContext context) =>
            {
                var result = await context.ShoppingList.Where(x =>  x.Id == id).ExecuteDeleteAsync();

                return result != 0
                    ? Results.Ok() 
                    : Results.NotFound();
            });

            return builder;
        
        }
    }
}
