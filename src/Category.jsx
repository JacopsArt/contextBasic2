import React, { useContext } from "react";
import { Book } from "./Book";
import { LibraryContext } from "./LibraryContext";

export const Category = ({ title, category }) => {
  const { books } = useContext(LibraryContext);

  const filteredBooks = books.filter((book) => book.category === category);

  return (
    <>
      <h3>
        {title} ({filteredBooks.length}):
      </h3>
      {filteredBooks.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
};
