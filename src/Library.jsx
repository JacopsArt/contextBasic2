import React from "react";
import LibraryContextProvider from "./LibraryContextProvider";
import { Books } from "./Books";

function Library() {
  return (
    <div className="App">
      <h1>Library</h1>
      <LibraryContextProvider>
        <Books />
      </LibraryContextProvider>
    </div>
  );
}

export default Library;
