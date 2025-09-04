import React, { useState } from "react";

const AddBookForm = ({ addBookHandler }) => {
  const [newBookDetailsObject, setNewBookDetailsObject] = useState({
    title: "",
    author: "",
    category: "",
    status: "",
  });

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={addBookHandler}>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="title"
          >
            Book Title:{" "}
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
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="author"
          >
            Author:{" "}
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
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="catergory"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <div>
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status
          </label>
          <select
            id="Status"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      </form>
    </div>
  );
};

export default AddBookForm;
