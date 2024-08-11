import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Problem from "./Problem";

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const resp = await fetch("http://localhost:8080/solve/problems", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const problemsData = await resp.json();
        setProblems(problemsData); 
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };

    fetchProblems(); 
  }, []);

  return (
    <div className="">
      <Nav />
      <div className="p-4 md:p-8 lg:p-16 cursor-default">
        <h1 className="text-2xl md:text-3xl lg:text-[42px]">Solve Problems</h1>
      </div>
      <div className="justify-center flex flex-wrap gap-4 md:gap-6 lg:gap-8 p-2 md:p-5 lg:p-5 cursor-default">
        {problems.map((problem, index) => (
          <Problem key={index} problem={problem} />
        ))}
      </div>
    </div>
  );
}
