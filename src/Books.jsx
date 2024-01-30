import React, { useContext } from "react";
import { Book } from "./Book";
import { LibraryContext } from "./LibraryContext";

export const Books = () => {
  const { books, borrowBook, returnBook } = useContext(LibraryContext);

  return (
    <>
      <h2>Books ({books.length}):</h2>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          borrowBook={borrowBook}
          returnBook={returnBook}
        />
      ))}
    </>
  );
};
