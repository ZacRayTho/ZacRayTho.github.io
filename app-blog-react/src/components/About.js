import Contact from "./Contact"


function About() {

  return (
    <div className="bg-gradient-to-b from-navy to-lightnavy p-5 " id="about">
      <div className="max-w-7xl mx-auto h-[22rem] lg:flex" >
        <div className="bg-gradient-to-b  from-transparent to-[#D4AF37] lg:bg-gradient-to-r lg:w-[81%] min-h-full text-center ">

          <h2 className="">About Me</h2>
          <p className="">
            Hey! You stumbled onto my wonderful portfolio, have a great stay!
            <br />
            <br />
            I have always loved learning and problem solving but I wasn't sure
            if software development was right for me. I decided to give it a try
            and I'm glad I did! I enjoy working with code and I'm always learning new things.
            <br />
            <br />
            One reason why I wasn't sure if software development was for me was because I enjoy
            working with my hands. But, after working on several projects through the bootcamp
            and learning Javascript, Python, and several libraries/frameworks for both, I'm hooked!
            <br />
            <br />
            In my free time I enjoy:
          </p>
          <ul>
            <li>Fixing up old vehicles</li>
            <li>Get together's with friends and family</li>
            <li>Playing Video games (badly) </li>
          </ul>

        </div>
        <Contact />
      </div>
      <div className="bg-gradient-to-b  from-transparent to-[#D4AF37] lg:bg-gradient-to-l rounded-l-xl max-w-7xl mx-auto h-[24rem] mt-5 text-center" >

        <h2>My Current Stack</h2>
        <div className="flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-mediumnavy mx-3 h-3/4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Front End</div>
              <p className="">
                The client side of the website, what the is greeted by and interacts with.
                The combination of the graphic design and user interface.
              </p>
            </div>
            <div className="px-6 pt-10 pb-2 space-x-3 items-center justify-center flex">
              <img src="./img/js-logo.png" alt="" className="h-20 w-18" />
              <img src="./img/react.png" alt="" className="h-20 w-18" />
              <img src="./img/bootstrapLogo.png" alt="" className="h-20 w-18" />
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-mediumnavy mx-3 h-3/4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Back End</div>
              <p className="">
                The server side of the website, what does all the processing for requests from the client side.
                responsible for storing and organizing data, and ensuring everything on the client-side actually works
              </p>
            </div>
            <div className="px-6 pt-10 pb-2 space-x-3 items-center justify-center flex">
              <img src="./img/python.png" alt="" className="h-20 w-18" />
              <img src="./img/sql-logo.png" alt="" className="h-20 w-18" />
              <img src="./img/bootstrapLogo.png" alt="" className="h-20 w-18" />
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-mediumnavy mx-3 h-3/4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Tools</div>
              <p className="">
                The client side of the website, what the is greeted by and interacts with.
                The combination of the graphic design and user interface.
              </p>
            </div>
            <div className="px-6 pt-10 pb-2 space-x-3 items-center justify-center flex">
              <img src="./img/js-logo.png" alt="" className="h-20 w-18" />
              <img src="./img/react.png" alt="" className="h-20 w-18" />
              <img src="./img/bootstrapLogo.png" alt="" className="h-20 w-18" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About