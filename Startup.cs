using Hotel.BLL.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
namespace Hotel.BLL
{
    public static class Startup
    {
        public static void RegisterServices(IServiceCollection services, IConfiguration configuration)
        {
            DAL.Startup.RegisterServices(services, configuration);
            services.AddScoped<ICalendarService, CalendarService>();
            services.AddScoped<IRoomService,  RoomService>();
        }
        public static void Start(string connectionString) { }
    }
}
