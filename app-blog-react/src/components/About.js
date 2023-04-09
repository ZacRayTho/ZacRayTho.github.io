import Contact from "./Contact"


function About() {

  return (
    <div className="bg-gradient-to-b from-navy to-lightnavy p-5 " id="about">
      <div className="max-w-7xl mx-auto h-[22rem] lg:flex" >
        <div className="bg-gradient-to-b  from-transparent to-yellow-300 lg:bg-gradient-to-r lg:w-[81%] min-h-full">

          <h2 className="">About Me</h2>
          <p className="">
            Hey! You stumbled onto my wonderful portfolio, have a great stay!
            <br />
            I have always loved learning and problem solving but I wasn't sure
            if software development was right for me. I decided to give it a try
            and I'm glad I did! I enjoy working with code and I'm always learning new things.
            <br />
            I love working with my hands and wasn't sure that software development would be
            for me. But, after working on several projects through the bootcamp and learning Javascript, Python, and
            several libraries/frameworks for both, I'm hooked!
            <br />
            In my free time I enjoy:
          </p>
          <ul>
            <li>Fixing up old vehicles</li>
            <li>Playing video games</li>
            <li>playing with my dog</li>
          </ul>

        </div>
        <Contact />
      </div>
      <div className="" >
        <div className="">
          <div className="text-center">
            <h2>Toolbelt</h2>
            <p> I'm currently proficient with:</p>
            <dl>
              <dt>HTML</dt>
              <dl>The Skeleton of a webpage</dl>
              <dt>CSS</dt>
              <dl>The Makeup of the Skeleton</dl>
              <dt>Javascript</dt>
              <dl>The Brains of the Skeleton</dl>
              <dt>React</dt>
              <dl>A Javascript Library for building user interfaces</dl>
            </dl>
          </div>
        </div>
        {/* <div className="d-flex col justify-content-center align-items-center"><img className="h-50" src="./img/zt-logo.png" alt="ZT Logo" /></div> */}
      </div>
    </div>

  )
}

export default About