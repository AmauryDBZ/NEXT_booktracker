import React, { useState } from "react";
import Books from '../Books';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(`Your query is : ${query}`);
    event.preventDefault();
    setSearchQuery(query);
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
      <div className="row"><Books query={searchQuery}/></div>
    </div>
  )
}

export default SearchBar;
