import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { base_url } from "../../../../services/base_url";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Categories = () => {
  const queryClient = useQueryClient();
  const [newCategoryName, setNewCategoryName] = useState("");
  const [editCategoryId, setEditCategoryId] = useState(null); // Track edited category ID
  const [editCategoryTitle, setEditCategoryTitle] = useState(""); // Track edited category title
  const token = useSelector((s) => s.user?.userInfo?.token);

  // Fetch all categories
  const {
    isLoading,
    isError,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(`${base_url}/api/post-categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.json();
    },
  });

  // Create new category
  const createCategoryMutation = useMutation({
    mutationKey: ["categories"],
    mutationFn: async (name) => {
      const response = await fetch(`${base_url}/api/post-categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: name }),
      });
        
         toast.success("New category added successfully!");
 setNewCategoryName("");
 queryClient.invalidateQueries("categories");
      return response.json();
    }
  });

  const handleCreateCategory = () => {
    createCategoryMutation.mutate(newCategoryName);
    setNewCategoryName("");
  };

  // Update category (assuming you have an API endpoint for this)
  const updateCategory = async (categoryId, newName) => {
    // Implement your update logic using a fetch request
    await fetch(`${base_url}/api/post-categories/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: newName }),
    });
       toast.success("Category updated successfully!");
        setNewCategoryName("");
        setEditCategoryId(null); // Reset edit state after update
        queryClient.invalidateQueries("categories");
  };

  // Delete category (assuming you have an API endpoint for this)
  const deleteCategory = async (categoryId) => {
      // Implement your delete logic using a fetch request
      toast.success("Category deleted successfully!")
    await fetch(`${base_url}/api/post-categories/${categoryId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
       queryClient.invalidateQueries("categories");
  };

  const handleEditCategory = (categoryId, title) => {
    setEditCategoryId(categoryId);
    setNewCategoryName(title);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
          placeholder="New Category Name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={
            editCategoryId !== null
              ? () => updateCategory(editCategoryId, newCategoryName)
              : handleCreateCategory
          }
        >
          {editCategoryId !== null ? "Update" : "Create"}
        </button>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching categories</p>}
      {categories && (
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id} className="flex items-center">
              <span className="mr-auto">{category.title}</span>

              <FiEdit
                className="text-blue-500 cursor-pointer mr-2"
                onClick={() => handleEditCategory(category._id, category.title)}
              />
              <FiTrash2
                className="text-red-500 cursor-pointer"
                onClick={() => deleteCategory(category._id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
