import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

function Category() {
  const [openCreate, setCreate] = useState(false);
  const [categorie, setCategorie] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [newCategory, setNewCategory] = useState({ name: "" });

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/all`
      );
      setCategorie(response?.data?.categories);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCreateCategory = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/category/create`,
        newCategory,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCategorie([...categorie, response.data.category]);
      setNewCategory({ name: "" });
      setCreate(false);
    } catch (error) {
      console.error("Failed to create category", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/category/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCategorie(categorie.filter((category) => category._id !== id));
    } catch (error) {
      console.error("Failed to delete category", error);
    }
  };

  return (
    <div className="w-11/12 mx-auto p-4">
      <div className="text-center text-2xl font-semibold underline mb-4">
        <h4>Categories</h4>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setCreate(!openCreate)}
          className="flex items-center gap-2 p-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 focus:outline-none"
        >
          <FaPlusCircle /> Create Category
        </button>
      </div>

      {openCreate && (
        <div className="mb-4 p-4 border rounded-lg">
          <h5 className="text-xl font-semibold mb-2">Create Category</h5>
          <input
            type="text"
            placeholder="Name"
            value={newCategory.name}
            onChange={(e) =>
              setNewCategory({ ...newCategory, name: e.target.value })
            }
            className="w-full mb-2 p-2 border rounded focus:outline-none"
          />
          <button
            onClick={handleCreateCategory}
            className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
          >
            Create
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categorie.map((category) => (
              <tr key={category._id} className="hover:bg-gray-100">
                <td className="py-4 px-6">{category.name}</td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
