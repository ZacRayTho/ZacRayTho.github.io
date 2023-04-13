import { useRef } from "react"
import Contact from "./Contact"
import ProjectCard from "./ProjectCard"
import BlogTeaseCard from "./BlogTeaseCard"

function About() {
  const projectFold = useRef(null)
  const projectBtn = useRef(null)
  const blogFold = useRef(null)
  const blogBtn = useRef(null)

  function ProjectShow() {
    console.log(projectBtn.current.innerHTML)
    let hidden = projectFold.current.className
    if (hidden == "hidden") {
      projectFold.current.className = ""
      projectBtn.current.innerHTML = "Less"
    }
    else {
      projectFold.current.className = "hidden"
      projectBtn.current.innerHTML = "More"
    }
  }

  function BlogShow() {
    console.log(blogBtn.current.innerHTML)
    let hidden = blogFold.current.className
    if (hidden == "hidden") {
      blogFold.current.className = ""
      blogBtn.current.innerHTML = "Less"
    }
    else {
      blogFold.current.className = "hidden"
      blogBtn.current.innerHTML = "More"
    }
  }

  return (
    <div className="bg-gradient-to-b from-navy to-lightnavy p-5 flex-col" id="about">
      <div div className="max-w-7xl mx-auto lg:h-[22rem] items-stretch lg:flex" >
        <div className="bg-gradient-to-b  from-transparent to-[#D4AF37] lg:bg-gradient-to-r lg:w-[81%] min-h-full text-center ">

          <h2 className="">About Me</h2>
          <p className="">
            Hey! You stumbled onto my wonderful portfolio, have a great stay!
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
      </div >
      <div className="bg-gradient-to-b  from-transparent to-[#D4AF37] lg:bg-gradient-to-l lg:rounded-l-xl max-w-7xl mx-auto lg:h-[24rem] mt-5 text-center pb-3 items-stretch" >

        <h2>My Current Stack</h2>
        <div className="lg:flex">
          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 lg:mt-0 bg-mediumnavy lg:mx-3 mx-auto">
            <div className="px-6 py-4 min-h-[61%]">
              <div className="font-bold text-xl mb-2">Front End</div>
              <p className="">
                The client side of the website, what the is greeted by and interacts with.
                The combination of the graphic design and user interface.
              </p>
            </div>
            <div className="px-6 pt-10 space-x-3 items-center justify-center flex">
              <img src="./img/icons/javascript.svg" alt="Javascript" title="Javascript" className="h-20 " />
              <img src="./img/icons/react.svg" alt="React" title="React" className="h-20 " />
              <img src="./img/icons/bootstrap.svg" alt="Bootstrap" title="Bootstrap" className="h-20 " />
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 lg:mt-0 bg-mediumnavy lg:mx-3 mx-auto">
            <div className="px-6 py-4 min-h-[61%]">
              <div className="font-bold text-xl mb-2">Back End</div>
              <p className="min-h-full">
                The server side of the website, what does all the processing for requests from the client side.
                responsible for storing and organizing data, and ensuring everything on the client-side actually works
              </p>
            </div>
            <div className="px-6 pt-10 space-x-3 items-center justify-center flex">
              <img src="./img/icons/python.svg" alt="Python" title="Python" className="h-20 " />
              <img src="./img/icons/postgresql.svg" alt="PostgreSQL" title="PostgreSQL" className="h-20 " />
              <img src="./img/icons/django.svg" alt="Django" title="Django" className="h-20 " />
            </div>
          </div>

          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 lg:mt-0 bg-mediumnavy lg:mx-3  mx-auto">
            <div className="px-6 py-4 min-h-[61%]">
              <div className="font-bold text-xl mb-2">Tools</div>
              <p className="">
                Not a necessity but you can't go wrong with increased workflow and efficiency, and these are how I get to that increase.
              </p>
            </div>
            <div className="px-6 pt-10 space-x-3 items-center justify-center flex">
              <img src="./img/icons/github.svg" alt="Github" title="Github" className="h-20 " />
              <img src="./img/icons/google.svg" alt="Google" title="Google" className="h-20 " />
              <img src="./img/icons/slack.svg" alt="Slack" title="Slack" className="h-20 " />
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center">Projects</h2>
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="hidden" ref={projectFold}>
        <div className="grid grid-cols-3 max-w-7xl mx-auto ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <div className="max-w-7xl w-full flex mx-auto">
        <button className="w-full text-lg font-bold border-t rounded-t-lg text-center" onClick={ProjectShow} ref={projectBtn}>More</button>
      </div>


      <h2 className="text-center">Blogs</h2>
      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-5">
        <BlogTeaseCard />
        <BlogTeaseCard />
        <BlogTeaseCard />
      </div>
      <div className="hidden" ref={blogFold}>
        <div className="grid grid-cols-3 max-w-7xl mx-auto ">
          <BlogTeaseCard />
          <BlogTeaseCard />
          <BlogTeaseCard />
        </div>
      </div>
      <div className="max-w-7xl w-full flex mx-auto">
        <button className="w-full text-lg font-bold border-t rounded-t-lg text-center" onClick={BlogShow} ref={blogBtn}>More</button>
      </div>

    </div >

  )
}

export default About