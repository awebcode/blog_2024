import { useState, useEffect } from "react";
import { AiOutlineMail, AiOutlineUser, AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { base_url } from "../../../../services/base_url";


const UpdateUserProfile = () => {
    const Navigate = useNavigate();
    const { userId } = useParams();
    const [userData, setUserData] = useState({
  
    name: "",
    email: "",
    verified: false,
    admin: false,
  });


  useEffect(() => {
    // Fetch user data by ID
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${base_url}/api/users/${userId}`);
        const { data } = response;
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        toast.error("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const updateUserProfile = async () => {
    try {
      await axios.put(`${base_url}/api/users/edit-user/${userId}`, userData);
        toast.success("Profile updated successfully!");
        Navigate("/admin")
    } catch (error) {
      console.error("Error updating profile:", error.message);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="container mx-auto">
      <Toaster />
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6 mt-10">
        <h2 className="text-xl font-bold mb-4">Update User Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineUser className="text-gray-400" />
            </span>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="pl-8 border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <AiOutlineMail className="text-gray-400" />
            </span>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="pl-8 border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Verified</label>
          <select
            name="verified"
            value={userData.verified}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Admin</label>
          <select
            name="admin"
            value={userData.admin}
            onChange={handleInputChange}
            className="border rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full"
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
        <button
          onClick={updateUserProfile}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
