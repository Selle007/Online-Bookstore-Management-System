﻿using BookstoreAPI.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookstoreAPI.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private DataContext _context;

        public BookController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> Get()
        {
            return Ok(await _context.Book.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Book>>> Get(int id)
        {
            var book = await _context.Book.FindAsync(id);
            if (book == null)
                return BadRequest("Book not found.");
            return Ok(book);
        }

        [HttpPost]
        public async Task<ActionResult<List<Book>>> CreateBook(Book book)
        {
            _context.Book.Add(book);
            await _context.SaveChangesAsync();

            return Ok(await _context.Book.ToListAsync());
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<Book>>> UpdateBook(Book request)
        {
            var dbBook = await _context.Book.FindAsync(request.bookId);
            if (dbBook == null)
                return BadRequest("Book not found.");

            dbBook.isbn = request.isbn;
            dbBook.bookName = request.bookName;
            dbBook.author = request.author;
            dbBook.bookDescription = request.bookDescription;
            dbBook.price = request.price;
            dbBook.image = request.image;
            dbBook.categoryName = request.categoryName;



            await _context.SaveChangesAsync();

            return Ok(await _context.Book.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            var dbBook = await _context.Book.FindAsync(id);
            if (dbBook == null)
                return BadRequest("Book not found.");

            _context.Book.Remove(dbBook);
            await _context.SaveChangesAsync();

            return Ok(await _context.Book.ToListAsync());
        }
    }
}