import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from 'spinners-react';
import Cookies from "js-cookie";
export default function Signin() {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [loader,setLoader]=useState(false)
  const handleSignin = async (e, email, password) => {
    e.preventDefault()
    setLoader(true)
    const resp = await fetch("http://localhost:8080/users/signin",{
      method:"POST",
      headers:{ "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    });
    const data = await resp.json();
    setLoader(false)
    if (data.msg == "user not found" || data.msg == "invalid password") {
      console.log("invalid username or password");
    } else {
      Cookies.set("jwt", data);
      navigate("/");
    }
  };
  return (
    <div className="bg-black h-[100vh] w-[100%] flex flex-wrap justify-center place-content-center font-sans text-white">
      <div className="bg-zinc-900 h-[55%] w-[375px] p-10 rounded-md shadow-sm flex-wrap">
        <h1 className="font-extrabold text-center mb-8">SIGN IN</h1>
        <div>
          <h1 className="font-sans font-extrabold text-left mt-6">
            Email Address
          </h1>
          <input
            ref={email}
            placeholder="example@gmail.com"
            className="w-[100%] bg-stone-800 h-8 mt-2"
          ></input>
          <h1 className="font-sans font-extrabold text-left mt-6">Password</h1>
          <input
            ref={password}
            placeholder=""
            className="w-[100%] bg-stone-800 h-8 mt-2"
          ></input>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 h-12 w-40 mt-8 rounded-md hover:bg-blue-400 hover:mt-[31px] flex justify-center items-center"
              onClick={(e) => {
                handleSignin(e, email, password);
              }}
            >
              {!loader?"Sign In":<SpinnerCircular color={"#fffff"} size={"20%"} />}
            </button>
          </div>
          <p className="text-center mt-4">
            Create Account?
            <a href="signup" className="text-blue-500">
              {" "}
              click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}