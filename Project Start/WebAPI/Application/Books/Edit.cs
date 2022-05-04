using MediatR;

namespace WebAPI.Application.Books
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Book Book { get; set; }
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
                var book = await _context.Books.FindAsync(request.Book.BookID);


                book.ISBN = request.Book.ISBN;
                book.BookName = request.Book.BookName;
                book.AuthorName = request.Book.AuthorName;
                book.BookDescription = request.Book.BookDescription;
                book.Category = request.Book.Category;
                book.Amount = request.Book.Amount;
                book.Price = request.Book.Price;

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
