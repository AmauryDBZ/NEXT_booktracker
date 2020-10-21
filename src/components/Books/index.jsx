import React, { useEffect, useState } from "react";
import Book from '../Book';

const Books = ({data}) => {
  const [bookSorted, setBookSorted] = useState(data);

  const toggleFavorite = (id) => {
    data.map(book => {
      if (book.isbn === id) {
        console.log(book.isFav);
        book.isFav = !book.isFav
        console.log(book.isFav);
      }
    })
  }

  const toggleRead = (id) => {
    data.map(book => {
      if (book.isbn === id) {
        console.log(book.read);
        book.read = !book.read
        console.log(book.read);
      }
    })
  }

  return (
    <div>
      {data.map((book) => (
        <Book
          title={book.title}
          id={book.isbn}
          isFav={book.isFav}
          read={book.read}
          pageCount={book.pageCount}
          authors={book.authors}
          categories={book.categories}
          image={book.thumbnailUrl}
          shortDescription={book.shortDescription}
          toggleFav={toggleFavorite}
          toggleRead={toggleRead}
        />
      ))}
    </div>
  );
}

export default Books;
