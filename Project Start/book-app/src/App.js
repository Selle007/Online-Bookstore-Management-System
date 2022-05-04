import React,{useState} from 'react';
import Constants from './utilities/Constants';
import BookCreateForm from "./components/BookCreateForm";
import BookUpdateForm from "./components/BookUpdateForm";

export default function App() {
  const [books, setBooks]=useState([]);
  const [showingCreateNewBookForm, setshowingCreateNewBookForm] = useState(false);
  const [bookCurrentBeingUpdated, setBookCurrentBeingUpdated] = useState (null);


  function getBooks(){
    const url = 'http://localhost:5014/api/Book';

    fetch(url,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(booksFromServer => {
        console.log(booksFromServer);
        setBooks(booksFromServer);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
  }

  function deleteBook(){
    const url = `'http://localhost:5014/api/Book/'${books.bookID}`;

    fetch(url,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(responseFromServer => {
        console.log(responseFromServer);
        onBookDeleted(books.bookID);
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
  }






  return (
    <>
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {(showingCreateNewBookForm === false && bookCurrentBeingUpdated === null) && (
          <div>
            <h1>BOOK CRUD</h1>
            <div className='mt-5'>
              <button onClick={getBooks} className="btn btn-dark btn-lg w-100">Get Books from Server</button>
              <button onClick={() => setshowingCreateNewBookForm(true)} className="btn btn-secondary btn-lg w-100 mt-4">Add Book</button>
            </div>
          </div>
          )}
          {(books.length > 0 && showingCreateNewBookForm === false && bookCurrentBeingUpdated === null) && renderBooksTable()}

          {showingCreateNewBookForm && <BookCreateForm onBookCreated={onBookCreated}/>}

          {bookCurrentBeingUpdated !== null && <BookUpdateForm book={bookCurrentBeingUpdated} onBookUpdated={onBookUpdated} />}
          </div>
      </div>
    </div>
    </>
    );


  function renderBooksTable(){
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered border-dark">
          <thead>
            <tr>
              <th scope='col'>Book ID</th>
              <th scope='col'>ISBN</th>
              <th scope='col'>Book Name</th>
              <th scope='col'>Author Name</th>
              <th scope='col'>Description</th>
              <th scope='col'>Category</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Price</th>
              <th scope='col'>CRUD</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book)=> (
              <tr key={book.bookID}>
                <th scope='row'>{book.bookID}</th>
                <td>{book.bookID}</td>
                <td>{book.isbn}</td>
                <td>{book.bookName}</td>
                <td>{book.authorName}</td>
                <td>{book.bookDescription}</td>
                <td>{book.category}</td>
                <td>{book.amount}</td>
                <td>{book.price}</td>
                
                
                <td>
                  <button onClick={() => setBookCurrentBeingUpdated(book) } className="btn btn-dark btn-lg mx-3 my-3">Update</button>
                  <button onClick={() => {if (window.confirm("Are you sure?")) deleteBook(book.bookID)}} className="btn btn-secondary btn-lg">Delete</button>
                </td>
            </tr>
            ))}
          </tbody>
        </table>

        <button onClick={() =>setBooks([])} className="btn btn-dark btn-lg w-100">Remove</button>

      </div>
    )
  }



  function onBookCreated(createdBook){
    setshowingCreateNewBookForm(false);
    if(createdBook === null){
      return;
    }
    alert("Book Created");

    getBooks();
  }

  function onBookUpdated(updatedBook){
    setBookCurrentBeingUpdated(null);
    if(updatedBook === null){
      return;
    }
    let booksCopy = [...books];
    const index = booksCopy.findIndex((booksCopyBook, currentIndex)=>{
      if(booksCopyBook.bookID === updatedBook.bookID){
        return true;
      }
    });

    if (index !== -1){
      booksCopy[index]=updatedBook;
    }

    setBooks(booksCopy);

    alert("Book Updated");
  }
  function onBookDeleted(deletedBookBookID){

    let booksCopy = [...books];
    const index = booksCopy.findIndex((booksCopyBook, currentIndex)=>{
      if(booksCopyBook.bookID === deletedBookBookID){
        return true;
      }
    });

    if (index !== -1){
      booksCopy.splice(index, 1);
    }

    setBooks(booksCopy);

    alert("Book Delete");
  }


}

