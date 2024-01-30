import { useContext } from "react";
import { LibraryContext } from "./LibraryContext";

function useLibrary() {
  const libraryContext = useContext(LibraryContext);

  if (!libraryContext) {
    throw new Error("useLibrary must be used within a LibraryContextProvider");
  }

  return libraryContext;
}

export default useLibrary;
