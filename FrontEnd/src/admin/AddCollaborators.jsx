import React, { useState } from "react";

const AddCollaborators = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <div className="w-full min-h-screen">
      <h2 className="text-center font-semibold text-4xl my-5">
        AddCollaborators
      </h2>
      <div className="px-10">
          <table className="w-full text-start">
            <thead>
              <tr>
                <th className="text-center">First Name</th>
                <th className="text-center">Last Name</th>
                <th className="text-center">User Name</th>
                <th className="text-center">Phone</th>
                <th className="text-center">Email</th>
                <th className="text-center">Password</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3">
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border w-full rounded-md px-3 py-1"
                  />
                </td>
                <td className="px-3">
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border w-full rounded-md px-3 py-1"
                  />
                </td>
                <td className="px-3">
                  <input
                    type="text"
                    placeholder="Enter User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="border w-full rounded-md px-3 py-1"
                  />
                </td>
                <td className="px-3">
                  <input
                    type="number"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border w-full rounded-md px-3 py-1"
                  />
                </td>
                <td className="px-3">
                  <input
                    type="text"
                    placeholder="Enter FirstName"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border w-full rounded-md px-3 py-1"
                  />
                </td>
                <td className="px-3">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border w-full rounded-md px-3 py-1"
                  />
                </td>
                <td className="px-3">
                  <button
                    type="submit"
                    className="w-full px-3 py-1 bg-blue-400 rounded-md"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default AddCollaborators;