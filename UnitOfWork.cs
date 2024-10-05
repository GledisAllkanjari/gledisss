
using Hotel.DAL.Repositories;

namespace Hotel.DAL
{
    public interface IUnitOfWork
    {
        ICalendarRepository CalendarRepository { get; }
        IRoomRepository RoomRepository { get; }
        T ExecuteTransaction<T>(Func<T> action);
       void Commit();
    }
    internal class UnitOfWork : IUnitOfWork
    {

        private readonly AppDbContext _appDbContext;
        public UnitOfWork(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        private ICalendarRepository _calendarRepository;
        public ICalendarRepository CalendarRepository
        {
            get
            {
                _calendarRepository ??= new CalendarRepository(_appDbContext);
                return _calendarRepository;
            }
        }


        private IRoomRepository _roomRepository;
        public IRoomRepository RoomRepository
        {
            get
            {
                _roomRepository ??= new RoomRepository(_appDbContext);
                return _roomRepository;
            }
        }
        public T ExecuteTransaction<T>(Func<T> action)
        {
            var transaction = _appDbContext.Database.BeginTransaction();
            try
            {
                var result = action();
                transaction.Commit();
                return result;
            }
            catch
            {
                transaction.Rollback();
                throw;
            }
        }
        public void Commit()
        {
            _appDbContext.SaveChanges();
        }
    }
}
