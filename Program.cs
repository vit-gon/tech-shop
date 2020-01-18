using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace TechShop
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var app = CreateWebHostBuilder(args).Build();
            app.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
