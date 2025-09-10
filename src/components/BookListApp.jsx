import React, { use, useState } from "react";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";

const BookListApp = () => {
  //creating array
  const [booksArray, setBooksArray] = useState(() => {
    const storedBooks = localStorage.getItem("booksArray");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  //editing useStates for editing functionality

  const [editingId, setEditingId] = useState(null);

  const [editingBook, setEditingBook] = useState({
    title: "",
    author: "",
    category: "",
    status: "",
  });

  //adding vaildation error

  const [validationErrors, setValidationErrors] = useState({});

  // parent handler
  const addBookHandler = (book) => {
    const checkForErrors = validationBookFunction(book);
    if (Object.keys(checkForErrors).length > 0) {
      setValidationErrors(checkForErrors);
      return; //stop
    }
    setBooksArray((prev) => {
      const updated = [...prev, book];
      localStorage.setItem("booksArray", JSON.stringify(updated)); // save in localStorage
      return updated;
    });
    setValidationErrors({});
  };

  //writing a validation function for

  const validationBookFunction = (book) => {
    const errors = {};

    if (!book.title.trim()) {
      errors.title = "Title is Required";
    }

    if (!book.author.trim()) {
      errors.author = "Author is Required";
    }

    if (!book.category.trim()) {
      errors.category = "Category is Required";
    }

    if (!book.status.trim()) {
      errors.status = "Status is Required";
    }

    return errors;
  };

  //creating a function to start editing a book by finding one

  const startEditing = (id) => {
    const findBookToBeEdited = booksArray.find((bookFound) => {
      return bookFound.id === id;
    });
    setEditingId(id);
    setEditingBook({ ...findBookToBeEdited });
  };

  return (
    <div>
      <h1 className="text-center">BookList App</h1>
      <AddBookForm
        addBookHandler={addBookHandler}
        validationErrors={validationErrors}
        setValidationErrors={setValidationErrors}
      />
      <BookList
        booksArray={booksArray}
        setBooksArray={setBooksArray}
        editingId={editingId}
        editingBook={editingBook}
        startEditing={startEditing}
        setEditingBook={setEditingBook}
        setEditingId={setEditingId}
      />
    </div>
  );
};

export default BookListApp;
