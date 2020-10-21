import React from 'react';

const Book = ({title, isFav, read, pageCount, authors, categories, image, shortDescription}) => {
  return (
    <div className="col-4">
      <div className="card">
      <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>{authors}</h6>
          <p>{categories}</p>
          <em>{pageCount}</em>
          <button href="#" className="btn btn-primary">Ajouter aux favoris</button>
        </div>
      </div>
    </div>
    );
  }

  export default Book;
