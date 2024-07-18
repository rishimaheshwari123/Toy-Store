import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";

function SubCategory() {
  const [openCreate, setCreate] = useState(false);
  const [openEditModal, setEditModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const { token, user } = useSelector((state) => state.auth);

  const [editSubCategory, setEditSubCategory] = useState({
    name: "",
    category: "",
  });

  const [newSubCategory, setNewSubCategory] = useState({
    name: "",
    category: "",
  });

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/all`
      );
      setCategories(response?.data?.categories || []);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  // Fetch subcategories
  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/subcategory/all`
      );
      setSubCategories(response?.data?.subCategories || []);
    } catch (error) {
      console.error("Failed to fetch subcategories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
  }, []);

  // Create subcategory
  const handleCreateSubCategory = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/subcategory/create`,
        newSubCategory,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNewSubCategory({ name: "", category: "" });
      fetchSubCategories(); // Refresh the list
      setCreate(false);
    } catch (error) {
      console.error("Error creating subcategory:", error);
    }
  };

  // Delete subcategory
  const handleDeleteSubCategory = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/subcategory/delete/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSubCategories((prevSubCategories) =>
        prevSubCategories.filter((subCategory) => subCategory._id !== id)
      );
    } catch (error) {
      console.error("Failed to delete subcategory:", error);
    }
  };

  return (
    <div className="w-11/12 mx-auto p-4">
      <div className="text-center text-2xl font-semibold underline mb-4">
        <h4>SubCategories</h4>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setCreate(!openCreate)}
          className="flex items-center gap-2 p-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 focus:outline-none"
        >
          <FaPlusCircle /> Create SubCategory
        </button>
      </div>

      {openCreate && (
        <div className="mb-4 p-4 border rounded-lg">
          <h5 className="text-xl font-semibold mb-2">Create SubCategory</h5>
          <input
            type="text"
            placeholder="Name"
            value={newSubCategory.name}
            onChange={(e) =>
              setNewSubCategory({ ...newSubCategory, name: e.target.value })
            }
            className="w-full mb-2 p-2 border rounded focus:outline-none"
          />
          <select
            value={newSubCategory.category}
            onChange={(e) =>
              setNewSubCategory({ ...newSubCategory, category: e.target.value })
            }
            className="w-full mb-2 p-2 border rounded focus:outline-none"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleCreateSubCategory}
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
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subCategories.map((subCategory) => (
              <tr key={subCategory._id} className="hover:bg-gray-100">
                <td className="py-4 px-6">{subCategory.name}</td>
                <td className="py-4 px-6">{subCategory.category?.name}</td>
                <td className="py-4 px-6 text-center">
                  <button
                    onClick={() => handleDeleteSubCategory(subCategory._id)}
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

export default SubCategory;
