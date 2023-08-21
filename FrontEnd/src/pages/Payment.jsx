import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Payment = () => {
 
  const navigate = useNavigate();
  const method = JSON.parse(sessionStorage.getItem("packageData"));

  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    accountNumber: "",
    accountName: "",
  });
const handleConfirmClick = () => {
  const newErrorMessages = { ...errorMessages };
  let isValid = true;

  if (!accountNumber) {
    newErrorMessages.accountNumber = "Bank Account Number is required.";
    isValid = false;
  } else if (accountNumber.length !== 16) {
    newErrorMessages.accountNumber = "Bank Account Number must be 16 digits.";
    isValid = false;
  } else {
    newErrorMessages.accountNumber = "";
  }

  if (!accountName) {
    newErrorMessages.accountName = "Bank Account Name is required.";
    isValid = false;
  } else {
    newErrorMessages.accountName = "";
  }

  setErrorMessages(newErrorMessages);

  if (isValid) {
    // Perform navigation to '/'
    navigate('/');
  }
};
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[350px] border p-5 rounded-xl">
        <div className="flex items-end">
          <h2 className="font-semibold text-xl">StreamTrace</h2>
          <span>pay</span>
        </div>
        <div>
          <div className="border p-3 rounded-md bg-orange-50">
            <h3> {method.name} Package </h3>
            <p> {method.count} times to upload your service </p>
            <span> ${method.price} </span>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full mt-5">
            <label>Bank Account Number</label>
            <input
              type="number"
              placeholder="eg: 1234 5678 9876 5432"
              maxLength={16}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full border rounded-md px-3 py-1"
            />
          </div>
          <div className="w-full mt-5">
            <label>Bank Account Name</label>
            <input
              type="text"
              placeholder="eg: Bank Account Name"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="w-full border rounded-md px-3 py-1"
            />
          </div>
          <div className="text-red-500">{errorMessages.accountName}</div>
          <button
            onClick={handleConfirmClick}
            className="w-full px-3 py-1 bg-blue-400 rounded-md mt-5 hover:bg-blue-500 hover:text-white duration-500"
          >
            Confirm
          </button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
