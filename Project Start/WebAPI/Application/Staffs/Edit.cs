using MediatR;

namespace WebAPI.Application.Staffs
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Staff Staff { get; set; }
        }

        public class Handler: IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var staff = await _context.Staff.FindAsync(request.Staff.StaffID);


                staff.StaffName = request.Staff.StaffName;
                staff.JobExp = request.Staff.JobExp;
                staff.Role = request.Staff.Role;
                staff.PhoneNr = request.Staff.PhoneNr;
                staff.Age = request.Staff.Age;
              

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
