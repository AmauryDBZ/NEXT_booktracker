import React, { useState } from 'react';

const Book = ({
  title,
  id,
  isFav,
  read,
  pageCount,
  authors,
  categories,
  image,
  shortDescription,
  toggleFav,
  toggleRead
  }) => {


  return (
    <div className="col-3">
      <div className="card">
      <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>{authors}</h6>
          <p>{categories}</p>
          <em>{pageCount}</em>
          <button href="#" className="btn btn-primary" onClick={() => toggleFav(id)}>Ajouter aux favoris</button>
          <button href="#" className="btn btn-secondary" onClick={() => toggleRead(id)}>A lire</button>
        </div>
      </div>
    </div>
    );
  }

  export default Book;
