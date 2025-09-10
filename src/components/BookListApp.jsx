import React, { useState } from "react";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";

const BookListApp = () => {
  //creating array
  const [booksArray, setBooksArray] = useState(() => {
    const storedBooks = localStorage.getItem("booksArray");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  // parent handler
  const addBookHandler = (book) => {
    setBooksArray((prev) => {
      const updated = [...prev, book];
      localStorage.setItem("booksArray", JSON.stringify(updated)); // save in localStorage
      return updated;
    });
  };

  return (
    <div>
      <h1 className="text-center">BookList App</h1>
      <AddBookForm addBookHandler={addBookHandler} />
      <BookList booksArray={booksArray} setBooksArray={setBooksArray} />
    </div>
  );
};

export default BookListApp;
