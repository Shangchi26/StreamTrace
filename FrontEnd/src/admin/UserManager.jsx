import React, { useEffect, useState } from "react";

const UserManager = () => {
  const [users, setUsers] = useState([]);

  
  return (
    <div className="w-full min-h-screen">
      <h2 className="font-semibold text-center text-4xl my-5">List of Users</h2>
      <table className="w-full text-center">
        <thead className="border-b-2">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.LastName}</td>
              <td>{user.userName}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt={`Avatar of ${user.userName}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManager;
