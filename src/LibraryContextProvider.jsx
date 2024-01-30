// LibraryContextProvider.jsx
import React, { useState } from "react";
import { LibraryContext } from "./LibraryContext";

const LibraryContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const borrowBook = (id) => {};

  const returnBook = (id) => {};

  return (
    <LibraryContext.Provider value={{ books, borrowBook, returnBook }}>
      {children}
    </LibraryContext.Provider>
  );
};

export default LibraryContextProvider;
