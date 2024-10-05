using Hotel.DAL.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;


namespace Hotel.DAL
{
    public class AppDbContext : IdentityDbContext<AppUser, AppRole, int>
    {
        public AppDbContext(DbContextOptions options) : base(options) { }
        public virtual DbSet<Room> Room { get; set; }
        public virtual DbSet<CalendarEvent> Calendar { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<CalendarEvent>()
             .HasOne(e => e.Room)
             .WithMany(r => r.CalendarEvents)
             .HasForeignKey(e => e.RoomId)
             .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
