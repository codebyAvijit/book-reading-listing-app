import React, { useState } from "react";
import AddBookForm from "./AddBookForm";

const BookListApp = () => {
  //creating array
  const [booksArray, setBooksArray] = useState(() => {
    const storedBooks = localStorage.getItem("booksArray");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  //creating errors object for form validation
  const [validationErrors, setValidationErrors] = useState({});

  //creating editing state for books editing

  const [editingId, setEditingId] = useState();

  //creating the book object

  const addBookHandler = (e) => {
    e.preventDefault();
    // console.log("New Book Details Added");
    const newBook = {
      id: crypto.randomUUID(),
      ...newBookDetailsObject,
    };
  };

  return (
    <div>
      <h1 className="text-center">BookList App</h1>
      <AddBookForm addBookHandler={addBookHandler} />
    </div>
  );
};

export default BookListApp;
