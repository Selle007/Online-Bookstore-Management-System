using MediatR;

namespace WebAPI.Application.Staffs
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int StaffID { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var staff = await _context.Staff.FindAsync(request.StaffID);

                _context.Remove(staff);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }

}
