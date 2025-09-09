import React from "react";

const BookList = ({ booksArray }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-10 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {booksArray.map((singleBookDetail) => (
            <tr
              key={singleBookDetail.id}
              className="odd:bg-white even:bg-gray-50"
            >
              <td className="px-6 py-4">{singleBookDetail.title}</td>
              <td className="px-6 py-4">{singleBookDetail.author}</td>
              <td className="px-6 py-4">{singleBookDetail.category}</td>
              <td className="px-6 py-4">{singleBookDetail.status}</td>
              <td className="px-6 py-4">
                <div className="flex space-evenly gap-2">
                  <button className="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
