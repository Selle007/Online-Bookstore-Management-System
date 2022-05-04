using MediatR;

namespace WebAPI.Application.Stores
{
    public class List
    {
        public class Query: IRequest<List<Store>> {}

        public class Handler : IRequestHandler<Query, List<Store>>
        {

            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Store>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Stores.ToListAsync();
            }
        }
    }
}
