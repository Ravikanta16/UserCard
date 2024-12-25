import React, { useState, useEffect } from "react";
import "../index.css";

const UserCard = () => {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 h-60 bg-white shadow-lg rounded-lg p-1 relative"> 
        <div className="absolute inset-0 rounded-lg border-4 border-transparent bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-500"></div>
        <div className="relative bg-gradient-to-r from-gray-50 to-gray-200 h-full w-full rounded-md flex items-center p-4">
          <div className="w-1/3 flex justify-center">
            <img
              src={user.picture.large}
              alt="User Avatar"
              className="w-24 h-28 rounded-lg border-2 border-gray-300 shadow-md"
            />
          </div>         
          <div className="w-2/3 pl-4">
            <div className="mb-2">
              <div className="text-sm font-semibold text-indigo-600 uppercase">Name</div>
              <div className="text-lg font-bold text-gray-800 tracking-wide">
                {`${user.name.first} ${user.name.last}`}
              </div>
            </div>
            <div className="mb-2">
              <div className="text-sm font-semibold text-teal-600 uppercase">Gender</div>
              <div className="text-md text-gray-700">{user.gender}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-purple-600 uppercase">Phone</div>
              <div className="text-md text-gray-700">{user.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
