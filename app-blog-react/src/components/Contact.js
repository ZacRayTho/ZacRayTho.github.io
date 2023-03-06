import "../css/contact.css"

function Contact() {
  return (

    <div className="container " id="contactCard">
      <div className="row justify-content-center align-content-center">
        {/* card container */}
        <div
          className="col-12 border bg-image "
          style={{
            backgroundImage: "url(./img/contactStuff/card-background.jpg)",
            height: "13.5em",
            width: "30em",
            color: "aliceblue",
            backgroundSize: "100%"
          }}
        >
          {/* row to split my pic from icons and title */}
          <div className="row " style={{ height: "fit-content" }}>
            {/* col for my pic */}
            <div className="col-4 d-flex justify-content-center align-items-center p-0">
              <img
                src="../img/Melol.jpg"
                id="me"
                className="rounded-circle w-auto h-auto mw-100 mh-100"
                alt="..."
                style={{ width: "8em", height: "10em", maxHeight: "fit-content" }}
              />
            </div>
            {/* col for right side with header and icons */}
            <div
              className="col text-center"
              style={{ backgroundColor: "rgba(0, 0, 0, .5)", height: "13.3em" }}
            >
              <h5 className="">Zachary Thomas</h5>
              <p className="">Full Stack Web Developer.</p>
              <div className="row">
                <div className="col-6 d-flex justify-content-center ">
                  <a
                    href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=zacraytho@gmail.com&tf=1"
                    target="_blank" rel="noreferrer"
                  >
                    <img className="hover-grow" src="../img/contactStuff/email.svg" alt="Email Icon" style={{ width: "3em", maxHeight: "3.1em", margin: 5 }}/>
                  </a>
                </div>
                <div className="col-6 d-flex justify-content-center ">
                  <a href="https://github.com/ZacRayTho" target="_blank" rel="noreferrer" >
                    <img className="hover-grow" src="../img/contactStuff/github.svg" alt="Github Logo" style={{ width: "3em", maxHeight: "3.1em", margin: 5 }} />
                  </a>
                </div>
                <div className="col-6 d-flex justify-content-center ">
                  <a href="tel:8593190903">
                    <img className="hover-grow" src="../img/contactStuff/phone.svg" alt="Phone Icon" style={{ width: "3em", maxHeight: "3.1em", margin: 5 }}/>
                  </a>
                </div>
                <div className="col-6 d-flex justify-content-center ">
                  <a
                    href="https://www.linkedin.com/in/zachary-thomas-33b430264/"
                    target="_blank" rel="noreferrer"
                  >
                    <img className="hover-grow" src="../img/contactStuff/linkedin.svg" alt="LinkedIn Logo" style={{ width: "3em", maxHeight: "3.1em", margin: 5 }}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact
