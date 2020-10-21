import React, { useEffect, useState } from "react";
import books from '../../data';
import Book from '../Book';

const Books = ({query}) => {
  const [data, setData] = useState(books.books[0]);
  console.log(query);

  useEffect(() => {
    let searchResult = [];
    data.map(book => {
      if (book.title.toLowerCase().includes(query.toLowerCase())) {
        searchResult.push(book)
      }
    })
    setData(searchResult);
  }, []);

  return (
    <div>
      {data.map((book) => (
        <Book
          title={book.title}
          isFav={book.isFav}
          read={book.read}
          pageCount={book.pageCount}
          authors={book.authors}
          categories={book.categories}
          image={book.thumbnailUrl}
          shortDescription={book.shortDescription}
        />
      ))}
    </div>
  );
}

export default Books;
