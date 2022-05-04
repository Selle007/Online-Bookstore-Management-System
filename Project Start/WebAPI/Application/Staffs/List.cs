using MediatR;

namespace WebAPI.Application.Staffs;

public class List
{
    public class Query: IRequest<List<Staff>> {}

    public class Handler : IRequestHandler<Query, List<Staff>>
    {

        private readonly DataContext _context;
        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Staff>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await _context.Staff.ToListAsync();
        }
    }
}
