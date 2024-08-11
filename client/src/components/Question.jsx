import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Nav from "./Nav";
import CodeEditor from "@uiw/react-textarea-code-editor";
import "./styles.css";
import { FaUndo } from "react-icons/fa";
import { useLocation, useNavigate} from "react-router-dom";
import Cookies from "js-cookie"
import { SpinnerInfinity } from "spinners-react";

export default function Question() {
  const [activeTab, setActiveTab] = useState("problem");
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState("");
  const [markdown,setMarkdown]=useState("")
  const [results,setResults]=useState([])
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  const navigate=useNavigate()
  const [loader,setLoader]=useState(false)

  useEffect(()=>{
    const handleQ =async() =>{
      const res = await fetch(`http://localhost:8080/solve/question/?title=${title}`)

      const question = await res.json()
      setMarkdown(question.question)
      setCode(question.boilercode)
    }
    handleQ()

  },[])

  const submitCode = async () => {
    if(Cookies.get("jwt")){
      setLoader(true)
    const response = await fetch("http://localhost:8080/solve/problem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        language: lang,
        title:title
      }),
    });

    const result = await response.json();
    console.log(result);
    setLoader(false)
    setActiveTab("submission")
    setResults(result.result)
  }
  else{
    navigate("/signin")
  }
  };


  return (
    <>
      <Nav />
      <div className="flex flex-wrap">
        {/* Left Section */}
        <div className="w-full md:w-2/5 lg:w-2/5 xl:w-2/5">
          <div className="border-r-2">
            <a
              className="cursor-pointer duration-200 hover:scale-125 active:scale-100 mt-3 mb-3 pl-10"
              title="Go Back"
              href="problems"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                className="stroke-blue-900"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M11 6L5 12M5 12L11 18M5 12H19"
                ></path>
              </svg>
            </a>
            <div className="flex font-sans">
              <button
                className={`text-[18px] w-[200px] font-light ${
                  activeTab === "problem" ? " border-b-2 border-black" : ""
                }`}
                onClick={() => setActiveTab("problem")}
              >
                Problem
              </button>
              <button
                className={`text-[18px] w-[200px] font-light ${
                  activeTab === "submission" ? "border-b-2 border-black" : ""
                }`}
                onClick={() => setActiveTab("submission")}
              >
                Submission
              </button>
            </div>
          </div>
          <div>
            {activeTab === "problem" && (
              <div className="h-[530px] border-2 overflow-scroll pl-10 pr-3">
                <div className="reset-markdown">
                  <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
              </div>
            )}
            {activeTab === "submission" && (
              <div className="h-[530px] border-2 overflow-scroll pl-10 p-3">
                {results==null?<div>Submission content goes here.</div>:
                
                <div className="flex mt-5 gap-2 flex-wrap">
                  {results.map((testcase,index) => (

                     <div className={`border-2 h-10 w-10 flex p-1 items-center justify-center border-black ${testcase.isCorrect===true?"bg-green-400":"bg-red-700"} animate-fadeIn `} key={index}>{index+1}</div>
                  ))}
                  
                </div>}
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-3/5 lg:w-3/5 xl:w-3/5">
          <div className="flex items-center gap-10 bg-[#36454F] text-white px-4 py-2 place-content-end pr-16">
            <FaUndo />
            <div className="dropdown relative">
              <button className="dropbtn rounded-lg">{lang.toUpperCase()}</button>
              {/* add different languages */}
              {/* <div className="dropdown-content">
                <a onClick={() => setLang("javascript")}>JavaScript</a>
                <a onClick={() => setLang("python")}>Python</a>
                <a onClick={() => setLang("java")}>Java</a>
              </div> */}
            </div>
          </div>
          <CodeEditor
            value={code}
            language={lang}
            className="border-0 h-[74vh] w-full text-[20px]"
            onChange={(evn) => setCode(evn.target.value)}
          />
          <div className="flex items-center gap-5 bg-black text-white px-4 py-2 place-content-end h-[62px] pr-14">
            <button className="h-[43px] min-w-20 bg-white text-black rounded-lg hover:opacity-85">
              Run
            </button>
            <button
              className="h-[43px] w-20 bg-blue-500 text-white hover:bg-blue-400 rounded-lg flex justify-center items-center"
              onClick={submitCode}
            >
              {!Cookies.get("jwt")?"Login":!loader?"Submit":<SpinnerInfinity color="#fff" size={"40%"}/>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
