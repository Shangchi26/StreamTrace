import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full min-h-screen">
      <h2 className="text-center text-4xl m-10">Dashboard Manager</h2>
      <div className="w-full mx-10 border rounded-xl">
        <h3 className="font-semibold text-2xl px-5 py-3 border-b">Income</h3>
        <div className="grid grid-cols-3">
          <div className="m-10">
            <p className="text-xl font-semibold">Weekly</p>
            <span className="text-4xl">$200</span>
          </div>
          <div className="m-10">
            <p className="text-xl font-semibold">Weakly</p>
            <span className="text-4xl">$796</span>
          </div>
          <div className="m-10">
            <p className="text-xl font-semibold">Yearly</p>
            <span className="text-4xl">$2600</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
