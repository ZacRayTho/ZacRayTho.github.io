import About from '../components/About'
import Nav from '../components/Nav'
function Landing() {

  function handleClick() {
    console.log("clicked")
    window.scroll({ top: window.screen.height })
  }

  return (
    <>
      <div id='fun' className="h-full  overflow-auto no-scrollbar scroll-smooth  ">
      <Nav />
        <div className="flex min-h-[73%] mx-auto lg:max-w-7xl">
          <div className="my-auto">
            <h1>Zachary Thomas</h1>
            <hr className="w-[75%]" />
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
        <div id="chevron" className="flex justify-center h-1/2">
          <button id="downWeGo" onClick={handleClick} className="btn btn-transparent border-transparent">
            <img src={"./img/chevron.svg"} alt="Chevron Down" />
          </button>
        </div>
        <About />
      </div>
     
    </>
  )
}

export default Landing
