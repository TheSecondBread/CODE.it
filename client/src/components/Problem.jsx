import React from "react";
import { useNavigate } from "react-router-dom";

export default function Problem({ problem }) {
  const navigate = useNavigate();

  const handleSolveClick = () => {
    // Navigate to /solve with problem title as a query parameter
    navigate(`/solve?title=${encodeURIComponent(problem.title)}`);
  };

  return (
    <div className="h-[250px] w-[450px] bg-white border-2 border-slate-500 pl-8 rounded-lg shadow-lg">
      <h1 className="mt-10 text-[24px] font-semibold">{problem.title}</h1>
      <p className="mt-4 font-sans text-[18px] font-medium">Difficulty</p>
      <p className="mt-1">{problem.diff}</p>
      <button
        onClick={handleSolveClick}
        className="h-[35px] mt-6 rounded-lg w-[100px] bg-black font-sans text-white hover:-translate-y-1 hover:transition duration-500 ease-in-out"
      >
        Solve
      </button>
    </div>
  );
}
