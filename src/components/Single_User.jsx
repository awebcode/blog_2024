import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { base_url } from "../services/base_url";
import { useParams } from "react-router-dom";
import { MdOutlineVerifiedUser, MdVerifiedUser } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
const UserPage = () => {
    const [user, setUser] = useState(null);
    const {id}=useParams()

  useEffect(() => {
    // Fetch user data from API
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${base_url}/api/users/${id}`); // Adjust the API endpoint
        setUser(response.data); // Assuming the API returns user data in JSON format
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const formatDate = (date) => {
    return moment(date).format("llll");
  };

  return (
    <div className="container mx-auto p-4 min-h-screen my-4">
      <h1 className="text-3xl md:text-6xl text-gray-900 font-bold mb-4">
        {user?.name}'s Profile
      </h1>
      {user ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <p className="text-xl font-bold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-4">
            {user.verified ? (
              <span className="flex items-center text-blue-600">
                Verified
                <MdOutlineVerifiedUser className="text-blue-500 ml-1" />
              </span>
            ) : (
              <span className="flex items-center text-red-500">
                Not Verified{" "}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            )}
          </p>
          <p className={`mt-4 ${user.admin ? "text-blue-500" : "text-gray-600"}`}>
            {user.admin ? (
              <span className="flex items-center">
                Admin <MdVerifiedUser className="text-blue-500 ml-1" />
              </span>
            ) : (
              <p className="text-blue-700 flex items-center">
                <span>User</span>

                <TiTickOutline className="text-blue-500 ml-1" />
              </p>
            )}
          </p>
          <p className="text-gray-600 mt-4">Join Date: {formatDate(user.createdAt)}</p>
          {/* Additional user details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserPage;
