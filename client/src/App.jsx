import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Problems from "./components/Problems";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Compiler from "./components/Compiler";
import Profile from "./components/Profile";
import Question from "./components/Question";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/signin" element={<Signin></Signin>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
    <Route path="/problems" element={<Problems></Problems>}></Route>
    <Route path="/compiler" element={<Compiler/>}></Route>
    <Route path="/user/profile" element={<Profile/>}></Route>
    <Route path="/solve" element={<Question/>}></Route>
  
    </Routes>
    </BrowserRouter>
  )
}