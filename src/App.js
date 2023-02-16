import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Details from "./pages/Details"
import AddBlog from "./pages/AddBlog"
import { useState } from "react"

const App = () => {
   const [blog, setBlog] = useState([]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blog={blog} />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details blog={blog} />} />
        <Route
          path="/add-blog"
          element={<AddBlog blog={blog} setBlog={setBlog} />}
        />
      </Routes>
    </>
  );
}


export default App