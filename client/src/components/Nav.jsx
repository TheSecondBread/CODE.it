import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"

export default function Nav() {
  const [loginState, setLogin] = useState("")

  useEffect(() => {
    if (Cookies.get("jwt")) {
      setLogin("Logged")
    }
  }, [])

  const handleLogout = () => {
    Cookies.remove("jwt")
    window.location.reload()
  }

  return (
    <div className="bg-black text-white p-3">
      <div className="flex justify-between items-center pr-10">
        <a className='text-2xl md:text-3xl cursor-pointer' href='/'>
          CODE.It
        </a>
        <nav className="hidden md:flex gap-4 lg:gap-16 text-lg mt-1">
          <a className="cursor-pointer hover:text-blue-500" href='/'>
            Home
          </a>
          <a className="cursor-pointer hover:text-blue-500" href='/problems'>
            Problems
          </a>
          <a className="cursor-pointer hover:text-blue-500" href='/compiler'>
            Compiler
          </a>
          {loginState === "" ? (
            <a className="cursor-pointer hover:text-blue-500" href='/signin'>
              Sign in
            </a>
          ) : (
            <>
              <a className="cursor-pointer hover:text-blue-500" href='/user/profile'>
                Profile
              </a>
              <a className='cursor-pointer hover:text-blue-500' onClick={handleLogout}>Logout</a>
            </>
          )}
        </nav>
        <div className="md:hidden">
          {/*add a button or icon here to open a mobile menu */}
        </div>
      </div>
      {/* add a mobile menu here */}
    </div>
  )
}
