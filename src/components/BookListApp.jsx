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

  // parent handler
  const addBookHandler = (book) => {
    setBooksArray((prev) => {
      const updated = [...prev, book];
      localStorage.setItem("booksArray", JSON.stringify(updated)); // save in localStorage
      return updated;
    });
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
      <AddBookForm addBookHandler={addBookHandler} />
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
