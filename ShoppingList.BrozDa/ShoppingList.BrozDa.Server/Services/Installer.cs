﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using ShoppingList.BrozDa.Server.Data;
using ShoppingList.BrozDa.Server.Models;
using System.Text.Json;

namespace ShoppingList.BrozDa.Server.Services
{
    public static class Installer
    {
        public static IServiceCollection InitializeApi
            (this IServiceCollection services, IConfigurationRoot configuration)
        {
            var connectionString = configuration.GetConnectionString("ShoppingList") ?? throw new InvalidOperationException("[Database Error] Missing connection string for 'ShoppingList'.");

            services.AddDbContext<ShoppingListContext>(options =>
            {
                options.UseSqlServer(connectionString);
            });

            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddCors();
            return services;

        }
        public static WebApplication AddMiddleWare(this WebApplication app)
        {
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors(options =>
            {
                options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
            });

            return app;
        }
        public static WebApplication SetUpDatabase(this WebApplication app)
        {
            using var scope = app.Services.CreateScope();

            var services = scope.ServiceProvider;

            var context = services.GetRequiredService<ShoppingListContext>();

            context.Database.Migrate();
            SeedDatabase(context);

            return app;
        }
        private static void SeedDatabase(ShoppingListContext context)
        {
            if (context.ShoppingList.Any()) 
                return;


            List<ShoppingListItem> seedList = new List<ShoppingListItem>()
            {
                new ShoppingListItem() { Name = "Initial Item 1", IsPickedUp = false },
                new ShoppingListItem() { Name = "Initial Item 1", IsPickedUp = false },
                new ShoppingListItem() { Name = "Initial Item 3", IsPickedUp = true },
            };
            context.ShoppingList.AddRangeAsync(seedList);
            context.SaveChanges();
        }
    }
}
