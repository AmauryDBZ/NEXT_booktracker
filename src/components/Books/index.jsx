import React, { useEffect, useState } from "react";
import Book from '../Book';

const Books = ({data}) => {

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
