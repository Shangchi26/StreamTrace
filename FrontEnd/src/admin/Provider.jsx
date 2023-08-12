import React, { useEffect, useState } from "react";

const Provider = () => {
  const [creators, setCreators] = useState([]);

  
  return (
    <div className="w-full min-h-screen">
      <h2 className="font-semibold text-center text-4xl my-5">List of Providers</h2>
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
          
        </tbody>
      </table>
    </div>
  );
};

export default Provider;
