import Nav from "./components/Nav"
import Landing from "./components/Landing"
import About from "./components/About"
import BlogTease from "./components/BlogTease"
import FullBlog from "./components/FullBlog"
import Projects from "./components/Projects"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [view, setView] = useState(() => {
    return JSON.parse(localStorage.getItem("view")) || "About"
  });
  const [blog, setBlog] = useState(() => {
    return JSON.parse(localStorage.getItem("blog")) || 0
  })


  useEffect(() => {
    localStorage.setItem('view', JSON.stringify(view));
    localStorage.setItem('blog', JSON.stringify(blog));
  }, [view, blog]);

  // function change() {
  //   switch (view) {

  //     default:
  //     case "About":
  //       return (
  //         <>
  //           <div className="bg-img h-auto min-vh-100">
  //             <Nav setView={setView} />
  //             <Landing />
  //             <About />
  //           </div>
  //         </>
  //       )

  //     case "BlogTease":
  //       return (
  //         <>
  //           {/* <img className="blog-img container-fluid px-0 mb-0 h-100" src="./img/royalBlue.png" alt="background"></img> */}
  //           <div className="blog-img h-auto">
  //             <Nav setView={setView} />
  //             <BlogTease setView={setView} setBlog={setBlog} />
  //           </div>
  //         </>
  //       )

  //     case "Contact":
  //       return (
  //         <>
  //           <div className="bg-img h-auto min-vh-100">
  //             <Nav setView={setView} />
  //             <Landing />
  //             <About />
  //           </div>
  //         </>
  //       )

  //     case "Projects":
  //       return (
  //         <>
  //           <div className="blog-img h-auto">
  //             <Nav setView={setView} />
  //             <Projects />
  //           </div>
  //         </>
  //       )

  //     case "Blog":
  //       return (
  //         <>
  //           <div className="blog-img h-auto min-vh-100">
  //             <Nav setView={setView} />
  //             <FullBlog blog={blog} setBlog={setBlog} />
  //           </div>
  //         </>
  //       )

  //   }
  // }

  if (view === "Contact") {
    setTimeout(() => window.scrollTo(0, 1080), 100)
  }

  return (
    <div className="App">

      {/* {change()} */}
      <Router>
        <Routes>

          <Route path="/" element={<>
            <div className="bg-img h-auto min-vh-100">
              <Nav setView={setView} />
              <Landing />
              <About />
            </div></>}></Route>

          <Route path="/blogTease" element={
            <div className="blog-img h-auto min-vh-100">
              <Nav setView={setView} />
              <BlogTease setView={setView} setBlog={setBlog} blog={blog} />
            </div>}></Route>

          <Route path="/contact" element={<>
            <div className="bg-img h-auto min-vh-100">
              <Nav setView={setView} />
              <Landing />
              <About />
            </div>
          </>}></Route>

          <Route path="/projects" element={
            <div className="blog-img h-auto min-vh-100">
              <Nav setView={setView} />
              <Projects />
            </div>}></Route>

          <Route path="/fullBlog/:blog" element={
            <div className="blog-img h-auto min-vh-100">
              <Nav setView={setView} />
              <FullBlog blog={blog} setBlog={setBlog} />
            </div>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
