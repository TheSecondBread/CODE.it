import React from "react";
import Nav from "./Nav";
import Cookies from "js-cookie";
export default function Home() {
  return (
    <div className="h-[100vh] font-sans ">
      <Nav></Nav>
      <div className="flex gap-20 flex-wrap">
        <div className=" p-20">
          <h1 className="text-[42px] font-extrabold">Welcome to CODE.It</h1>
          <p className="mt-3 text-[20px] ">
            CODE.It is a platform to test your data structures and algorithms
            skills.<br></br> Sign in and Get started with solving problems
          </p>
          <div className="flex mt-12 gap-10">
            {!Cookies.get("jwt") ? (
              <a
                className="bg-black h-[40px] w-[100px] text-white p-2 rounded-md hover:bg-opacity-75 text-center"
                href="/signin"
              >
                Sign in
              </a>
            ) : (
              <></>
            )}
            <a
              className="bg-white h-[40px] w-[100px] text-black border-2 p-2 text-center rounded-md hover:bg-slate-300"
              href="/problems"
            >
              Problems
            </a>
          </div>
        </div>
        <div>
          <img
            src="./image.png"
            className="w-[500px] h-[300px] mt-20 rounded-lg"
          />
        </div>
      </div>
      <div className="mt-30 p-12">
        <h1 className="text-[24px]">
          To learn Data Structures and Algorithms (DSA) effectively, start with
          fundamental concepts through structured resources like books (e.g.,
          CLRS) and online courses. Practice coding regularly on CODE.It,
          analyze time and space complexities, and solve a variety of problems.
          Engage with communities, participate in competitive programming, and
          apply your knowledge in real-world projects for comprehensive
          learning. You can also watch the DSA playlist below when you are
          struck
        </h1>
      </div>
    </div>
  );
}
