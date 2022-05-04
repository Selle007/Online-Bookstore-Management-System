using MediatR;

namespace WebAPI.Application.Stores
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Store Store { get; set; }
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
                var store = await _context.Stores.FindAsync(request.Store.StoreID);


                store.StoreName = request.Store.StoreName;
                store.ManagerName = request.Store.ManagerName;
                store.Address = request.Store.Address;
                store.PhoneNr = request.Store.PhoneNr;
                

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
