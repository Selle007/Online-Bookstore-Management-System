using MediatR;

namespace WebAPI.Application.Books
{
    public class List
    {
        public class Query: IRequest<List<Book>> {}

        public class Handler : IRequestHandler<Query, List<Book>>
        {

            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Book>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Books.ToListAsync();
            }
        }
    }
}
