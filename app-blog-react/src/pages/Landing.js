
function Landing() {

  function handleClick() {
    console.log("clicked")
    window.scroll({ top: window.screen.height })
  }

  return (
    <>
      <div className="h-screen overflow-hidden">
        <div className="flex my-auto min-h-[73%] px-3 ">
          <div className="my-auto">
            <h1>Zachary Thomas</h1>
            <hr className="w-[75%]" />
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
        <div id="chevron" className="flex justify-center">
          <button id="downWeGo" onClick={handleClick} className="btn btn-transparent border-transparent">
            <img src={"./img/chevron.svg"} alt="Chevron Down" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Landing
