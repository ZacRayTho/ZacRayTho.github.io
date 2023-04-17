

function Contact() {
  return (

    <div className=" pt-1 bg-mediumnavy border-8  border-[#D4AF37] h-full lg:w-1/5 lg:rounded-r-xl" id="Contact">
      <div className="">
        {/* card container */}
        <div className="">
          {/* row to split my pic from icons and title */}
          <div className="">
            {/* col for my pic */}
            <div className="">
              <img
                src="../img/Melol.jpg "
                className="rounded-full w-32 max-h-fit h-50 mx-auto"
                alt="..."
              />
            </div>
            {/* col for right side with header and icons */}
            <div
              className="text-center"
            >
              <h5 className="text-lg font-medium">Zachary Thomas</h5>
              <p className="">Full Stack Web Developer</p>
              <div className="grid grid-cols-2 w-36 mx-auto">
                <div className="flex justify-center">
                  <a
                    href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=zacraytho@gmail.com&tf=1"
                    target="_blank" rel="noreferrer"
                  >
                    <img className="hover-grow h-10 w-10 mb-4" src="../img/contactStuff/email.svg" alt="Email Icon" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="https://github.com/ZacRayTho" target="_blank" rel="noreferrer" >
                    <img className="hover-grow h-10 w-10 mb-4" src="../img/contactStuff/github.svg" alt="Github Logo" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a href="tel:8593190903">
                    <img className="hover-grow h-10 w-10" src="../img/contactStuff/phone.svg" alt="Phone Icon" />
                  </a>
                </div>
                <div className="flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/zachary-thomas-33b430264/"
                    target="_blank" rel="noreferrer"
                  >
                    <img className="hover-grow h-10 w-10" src="../img/contactStuff/linkedin.svg" alt="LinkedIn Logo" />
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
