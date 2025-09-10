import React, { useState } from "react";

const AddBookForm = ({
  addBookHandler,
  validationErrors,
  setValidationErrors,
}) => {
  const [newBookDetailsObject, setNewBookDetailsObject] = useState({
    title: "",
    author: "",
    category: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      ...newBookDetailsObject,
    };

    addBookHandler(newBook); // pass to parent

    // console.log(newBook);

    // reset form
    setNewBookDetailsObject({
      title: "",
      author: "",
      category: "",
      status: "",
    });
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="title"
          >
            Book Title:
          </label>
          <input
            type="text"
            id="title"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={newBookDetailsObject.title}
            placeholder="Enter Book Name"
            onChange={(e) =>
              setNewBookDetailsObject({
                ...newBookDetailsObject,
                title: e.target.value,
              })
            }
          />
        </div>
        {validationErrors.title && (
          <p className="text-red-500">{validationErrors.title}</p>
        )}
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="author"
          >
            Author:
          </label>
          <input
            type="text"
            id="author"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={newBookDetailsObject.author}
            placeholder="Enter Author Name"
            onChange={(e) =>
              setNewBookDetailsObject({
                ...newBookDetailsObject,
                author: e.target.value,
              })
            }
          />
        </div>
        {validationErrors.author && (
          <p className="text-red-500">{validationErrors.author}</p>
        )}
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={newBookDetailsObject.category}
            onChange={(e) =>
              setNewBookDetailsObject({
                ...newBookDetailsObject,
                category: e.target.value,
              })
            }
          >
            <option disabled hidden></option>
            <option value="fiction">Fiction</option>
            <option value="nonfiction">Non-Fiction</option>
            <option value="scifi">Sci-Fi</option>
            <option value="others">Others</option>
          </select>
        </div>
        {validationErrors.category && (
          <p className="text-red-500">{validationErrors.category}</p>
        )}
        <div>
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status
          </label>
          <select
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={newBookDetailsObject.status}
            onChange={(e) =>
              setNewBookDetailsObject({
                ...newBookDetailsObject,
                status: e.target.value,
              })
            }
          >
            <option disabled hidden></option>
            <option value="notstarted">Not Started</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        {validationErrors.status && (
          <p className="text-red-500">{validationErrors.status}</p>
        )}
        <div className="text-center">
          <button
            type="submit"
            className="text-white mt-5  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
