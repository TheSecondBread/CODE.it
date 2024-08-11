import React, { useRef, useState } from "react";
import Nav from "./Nav";
import CodeEditor from "@uiw/react-textarea-code-editor";
import "./custom-theme.css"; // Import the custom theme CSS file
import "../index.css"; // Import the index CSS file
import { SpinnerDotted } from 'spinners-react';

export default function Compiler() {
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState("");
  const coderef = useRef("")
  const [compiledCode, setCompiledCode] = useState("Click Run to execute code");
  const [loader,setLoader]=useState(false)

  const handleCodeChange = (ev, value) => {
    setCode(value.current.value);
  };

  const handleCodeExecution = async () => {
  setLoader(true)
    const res = await fetch("http://localhost:8080/compile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        lang,
      }),
    });
    const data = await res.json();
    setLoader(false)
    setCompiledCode(data.result);
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-1 bg-white p-4">
        <div className="md:w-3/5 h-[400px]">
          <div className="flex items-center gap-4 bg-black text-white px-4 py-2">
            <div className="dropdown relative">
              <button className="dropbtn rounded-lg">{lang.toUpperCase()}</button>
              {/* <div className="dropdown-content hover:cursor-pointer">
                <a onClick={() => setLang("javascript")}>JavaScript</a>
                <a onClick={() => setLang("python")}>Python</a>
                <a onClick={() => setLang("java")}>Java</a>
              </div> */}
            </div>
            <button
              className="h-[41px] w-20 bg-blue-500 text-white hover:bg-blue-400 rounded-lg flex justify-center items-center"
              onClick={handleCodeExecution}
            >
              {!loader?"Run":<SpinnerDotted color={"#fffff"} size={"40%"} />}
              
            </button>
          </div>

          <CodeEditor
            value={code}
            ref={coderef}
            onChange={(ev)=>handleCodeChange(ev,coderef)}
            language={lang}
            className="border-0 h-[70vh] w-full text-[20px]"
          />
        </div>

        <div className="md:w-2/5 h-[400px]">
          <div className="flex items-center bg-black text-white px-4 py-2">
            <h1 className="text-2xl font-bold">OUTPUT</h1>
          </div>
          <textarea
            readOnly
            className=" h-[80vh] w-full px-4 py-2 resize-none bg-gray-100 text-sm font-mono border-[1px] border-black"
            value={compiledCode}
          ></textarea>
        </div>
      </div>
    </>
  );
}
