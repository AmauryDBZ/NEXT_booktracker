import React, { useState } from "react";
import Books from '../Books';
import books from '../../data';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(books.books[0]);
  const [filterFav, setFilterFav] = useState(false);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let searchResult = [];
    let database;
    if (filterFav === true) {
      let showFav = [];
      data.map(book => {
        if (book.isFav === true) {
          showFav.push(book)
        }
      })
      database = showFav;
    } else {
      database = books.books[0];
    }
    database.map(book => {
      if (book.title.toLowerCase().includes(query.toLowerCase())) {
        searchResult.push(book)
      }
    })
    setData(searchResult);
  };

  const displayFav = () => {
    let showFav = [];
    data.map(book => {
      if (book.isFav === true) {
        showFav.push(book)
      }
    })
    setFilterFav(true);
    setData(showFav);
  }

  const displayRead = () => {
    let showRead = [];
    data.map(book => {
      if (book.read === true) {
        showRead.push(book)
      }
    })
    setData(showRead);
  }

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
      <button type="submit" className="btn btn-secondary mb-2" onClick={displayFav}>
        show favorites
      </button>
      <button type="submit" className="btn btn-info mb-2" onClick={displayRead}>
        show to read
      </button>
      <div className="d-flex row"><Books data={data} /></div>
    </div>
  )
}

export default SearchBar;
