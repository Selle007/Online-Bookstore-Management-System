﻿using MediatR;

namespace WebAPI.Application.Stores
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int StoreID { get; set; }
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
                var store = await _context.Stores.FindAsync(request.StoreID);

                _context.Remove(store);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }

}
