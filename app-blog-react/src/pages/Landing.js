import About from '../components/About'
import Nav from '../components/Nav'
function Landing() {

  function handleClick() {
    console.log("clicked")
    window.scroll({ top: window.screen.height })
  }

  return (
    <>
      <div id='fun' className="h-full overflow-auto no-scrollbar scroll-smooth w-screen">
        <Nav />
        <div className="py-44 lg:max-w-7xl lg:py-[21rem] mx-auto">
          <div className="my-auto">
            <h1>Zachary Thomas</h1>
            <hr className="w-[50%]" />
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
        <div id="chevron" className="flex w-1/2 mx-auto justify-center h-1/2">
          <a id="downWeGo" href="#about" className="btn btn-transparent border-transparent">
            <img src={"./img/chevron.svg"} alt="Chevron Down" />
          </a>
        </div>
        <div className='mt-4 w-screen'>
          <About />
        </div>
      </div>

    </>
  )
}

export default Landing
