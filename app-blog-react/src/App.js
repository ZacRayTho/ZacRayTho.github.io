import Nav from "./components/Nav"
import Landing from "./components/Landing"
import About from "./components/About"
import BlogTease from "./components/BlogTease"
import Contact from "./components/Contact"
import FullBlog from "./components/FullBlog"
import Projects from "./components/Projects"


function App() {
  return (
    <div className="App">
      <img className="bg-img" src="./img/splash-bg.jpg" alt="background"></img>
      <Nav />
      <Landing />
      <About />
    </div>
  );
}

export default App;
