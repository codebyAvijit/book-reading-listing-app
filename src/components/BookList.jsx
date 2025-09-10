import React from "react";

const BookList = ({
  booksArray,
  setBooksArray,
  startEditing,
  editingId,
  editingBook,
  setEditingBook,
  setEditingId,
}) => {
  const onSaveHandle = () => {
    setBooksArray((prev) => {
      const updated = prev.map((b) =>
        b.id === editingId ? { ...b, ...editingBook } : b
      );
      localStorage.setItem("booksArray", JSON.stringify(updated));
      return updated;
    });
    setEditingId(null);
  };

  const onCancelHandle = () => {
    setEditingId(null);
    setEditingBook({ title: "", author: "", category: "", status: "" });
  };
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
          {booksArray.map((singleBookDetail) =>
            editingId === singleBookDetail.id ? (
              <tr
                key={singleBookDetail.id}
                className="odd:bg-white even:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={editingBook.title}
                    onChange={(e) => {
                      setEditingBook({ ...editingBook, title: e.target.value });
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={editingBook.author}
                    onChange={(e) => {
                      setEditingBook({
                        ...editingBook,
                        author: e.target.value,
                      });
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={editingBook.category}
                    onChange={(e) => {
                      setEditingBook({
                        ...editingBook,
                        category: e.target.value,
                      });
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={editingBook.status}
                    onChange={(e) => {
                      setEditingBook({
                        ...editingBook,
                        status: e.target.value,
                      });
                    }}
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-evenly gap-2">
                    <button
                      onClick={() => {
                        onSaveHandle();
                      }}
                      className="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      save
                    </button>
                    <button
                      onClick={() => {
                        onCancelHandle();
                      }}
                      className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      cancel
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
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
                    <button
                      onClick={() => startEditing(singleBookDetail.id)}
                      className="px-2 py-1 text-xs text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        setBooksArray(
                          booksArray.filter((book) => {
                            return book.id !== singleBookDetail.id;
                          })
                        )
                      }
                      className="px-2 py-1 text-xs text-white bg-red-500 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
