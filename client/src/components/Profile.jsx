import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Nav from "./Nav";
import Problem from "./Problem";
export default function Profile() {
  const [user, setUser] = useState([]);
  const profile = async () => {
    const token = Cookies.get("jwt");
    const resp = await fetch("http://localhost:8080/users/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${token}`,
      },
    });
    const data = await resp.json();
    console.log(data.user);
    
    setUser(data.user);
  };
  useEffect(() => {
    profile();
  }, [1]);
  return (
    <div>
      <Nav></Nav>
      <div className="p-8">
        <div className="border-2 p-16 rounded-lg shadow-lg">
            <img src="profile.jpg" className="mb-2"></img>
          <h1 className="text-[40px]">{user.username}</h1>
          <h1 className="text-[40px]">{user.email}</h1>
          <h1 className="text-[40px]"></h1>
        </div>
        <div>
       
        </div>
        <div >
        <h1 className="text-[42px] text-center">Solved Problems</h1>
        <div className="justify center flex flex-wrap gap-4 md:gap-6 lg:gap-8 p-2 md:p-5 lg:p-5 cursor-default">
          {/* solved questions fetched from user 
          <Problem > 
          */}
        </div>
        </div>
      </div>
    </div>
  );
}
