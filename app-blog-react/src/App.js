import Nav from "./components/Nav"
import Landing from "./components/Landing"
import About from "./components/About"
import BlogTease from "./components/BlogTease"
import FullBlog from "./components/FullBlog"
import Projects from "./components/Projects"
import { useState } from "react"


function App() {

  const [view, setView] = useState("About");

  function change() {
    switch (view) {

      default:
      case "About":
        return (
          <>
            <img className="bg-img" src="./img/splash-bg.jpg" alt="background"></img>
            <Nav setView={setView} />
            <Landing />
            <About />
          </>
        )

      case "BlogTease":
        return (
          <>
            {/* <img className="blog-img container-fluid px-0 mb-0 h-100" src="./img/royalBlue.png" alt="background"></img> */}
            <div className="blog-img">
              <Nav setView={setView} />
              <BlogTease />
            </div>
          </>
        )

      case "Contact":
        return (
          <>
            <img className="bg-img" src="./img/splash-bg.jpg" alt="background"></img>
            <Nav setView={setView} />
            <Landing />
            <About />
          </>
        )

      case "Projects":
        return (
          <>
            <div className="blog-img">
              <Nav setView={setView} />
              <Projects />
            </div>
          </>
        )

      case "Blog":
        return (
          <>
            <div className="blog-img">
              <Nav setView={setView} />
              <FullBlog />
            </div>
          </>
        )

    }
  }

  if (view === "Contact") {
    setTimeout(() => window.scrollTo(0, 1080), 100)
  }

  return (
    <div className="App">
      {change()}
      {/* <img className="bg-img" src="./img/splash-bg.jpg" alt="background"></img>
      <Nav setView={setView} />
      <Landing />
      <About /> */}
    </div>
  );
}

export default App;
