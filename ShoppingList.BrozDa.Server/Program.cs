
using ShoppingList.BrozDa.Server.Endpoints;
using ShoppingList.BrozDa.Server.Services;

namespace ShoppingList.BrozDa.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.InitializeApi(builder.Configuration);
            
            var app = builder.Build();

            app.SetUpDatabase();
            app.AddMiddleWare();
            app.AddShoppingListEndpoints();

            app.Run();

        }
    }
}
