import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import "../../app/layout/styles.css";

export default function BestSellers() {

    const { bookStore } = useStore();
    const { booksById, bookRegistry, loadBooks } = bookStore;
    
    useEffect(() => {
      if (bookRegistry.size <= 1) loadBooks();
    }, [bookRegistry.size, loadBooks]);

  return (
    <>
      <h2>
        <span>Best Sellers</span>
      </h2>
<<<<<<< HEAD
      <Card.Group divided itemsPerRow={"4"} className="BestSellers" >
        {booksById.map((book) => (
          <Card key={book.bookId}>
            <img src={`/images/books/${book.bookName}.jpg`||`/images/books/${book.bookName}.png`}/>
=======
      <Card.Group divided centered itemsPerRow='4'>
        {booksById.map((book) => (
          <Card key={book.bookId}>
            <img src="/images/Game On.jpg" />
>>>>>>> f7429586a02a3442297dc2d919cee3f306ab06d6
            <p id="productName">{book.bookName}</p>
            <p id="author">{book.author}</p>
            <p id="textDesc">
              <strong>{book.bookDescription}</strong>
            </p>
            <div className="cardBtn">
              <p id="price">{book.price}€</p>
              <Button floated="right" content="Add to Cart" color="blue" />
            </div>
          </Card>
        ))}
      </Card.Group>
    </>
  );
}
