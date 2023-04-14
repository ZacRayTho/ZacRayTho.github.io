import { useRef, useState } from "react"
import Contact from "./Contact"
import ProjectCard from "./ProjectCard"
import BlogTeaseCard from "./BlogTeaseCard"
import StackCard from "./StackCard"
import { projects, stacks, blogs } from "./Data"
import Modal from "./Modal"

function About() {

  const projectFold = useRef(null)
  const projectBtn = useRef(null)
  const blogFold = useRef(null)
  const blogBtn = useRef(null)
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)

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
          {
            stacks.map((stack) =>
              <StackCard stack={stack} />
            )
          }
        </div>
      </div>

      <h2 className="text-center">Projects</h2>

      <div className="grid grid-cols-3 max-w-7xl mx-auto mt-5">
        {
          projects.slice(0, 3).map((project) =>
            <>
              <ProjectCard project={project} setShowModal={setShowModal} showModal={showModal} setModalData={setModalData}/>
            </>
          )
        }
        <Modal isVisible={showModal} setShowModal={setShowModal} >
                {modalData}
        </Modal>
      </div>
      <div className="hidden" ref={projectFold}>
        <div className="grid grid-cols-3 max-w-7xl mx-auto ">
          {
            projects.slice(3, 6).map((project) =>
              <ProjectCard project={project} setShowModal={setShowModal} showModal={showModal} setModalData={setModalData}/>
            )
          }
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