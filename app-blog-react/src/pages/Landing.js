
function Landing() {

  function handleClick() {
    console.log("clicked")
    window.scroll({ top: window.screen.height })
  }

  return (
    <>
      <div id="start" className="row align-items-end m-auto">
        <div className="col-12">
          <div className="ms-5 ">
            <h1>Zachary Thomas</h1>
            <hr className="w-50" />
            <h2>Full Stack Web Developer</h2>
          </div>
        </div>
      </div>
      <div id="chevron" className="d-flex justify-content-center align-items-end ">
        <button id="downWeGo" onClick={handleClick} className="btn btn-transparent border-transparent">
          <img src={"./img/chevron.svg"} alt="Chevron Down" />
        </button>
      </div>
    </>
  )
}

export default Landing
