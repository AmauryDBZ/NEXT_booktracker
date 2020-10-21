import React, { useState } from "react";
import Books from '../Books';
import books from '../../data';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(books.books[0]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let searchResult = [];
    data.map(book => {
      if (book.title.toLowerCase().includes(query.toLowerCase())) {
        searchResult.push(book)
      }
    })
    setData(searchResult);
  };

  return (
    <div className="container">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mx-sm-3 mb-2">
          <input type="text" placeholder="search a book" className="form-control" value={query} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Search
        </button>
      </form>
      <div className="row"><Books data={data} /></div>
    </div>
  )
}

export default SearchBar;
