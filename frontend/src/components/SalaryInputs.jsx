import React, { useState } from "react";

function SalaryInputs() {
  const [salaryInputs, setSalaryInputs] = useState({
    salary: 0,
    duration: 0,
  });

  const handleOnchange = () => {};

  const { salary, duration } = salaryInputs;
  return (
    <div className=" flex items-center font-play space-x-4">
      <div className="flex items-center space-x-2">
        <p className="text-[18px] font-semibold text-green-500">Salary: </p>
        <input
          value={salary}
          className=" shadow rounded font-orbitron w-full h-[30px] px-3"
          type="text"
        />
      </div>
      <div className="flex items-center">
        <p className="text-[18px] font-semibold text-gray-500">Duration: </p>
        <input
          value={duration}
          className=" shadow rounded font-orbitron w-full h-[30px] px-3"
          type="text"
        />
      </div>
    </div>
  );
}

export default SalaryInputs;
