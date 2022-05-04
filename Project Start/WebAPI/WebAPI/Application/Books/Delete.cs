﻿using MediatR;

namespace WebAPI.Application.Books
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int BookID { get; set; }
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
                var book = await _context.Books.FindAsync(request.BookID);

                _context.Remove(book);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }

}
