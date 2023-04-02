import About from '../components/About'
function Landing() {

  function handleClick() {
    console.log("clicked")
    window.scroll({ top: window.screen.height })
  }

  return (
    <>
      <div id='fun' className="h-[90vh] col-span-9 overflow-auto no-scrollbar scroll-smooth md:col-span-5 lg:max-w-7xl mx-auto">
        <div className="flex my-auto min-h-[73%] px-3 mr-52">
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
