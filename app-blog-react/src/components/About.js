import { useRef, useState } from "react"
import Contact from "./Contact"
import ProjectCard from "./ProjectCard"
import BlogTeaseCard from "./BlogTeaseCard"
import StackCard from "./StackCard"
import { projects, stacks, blogs } from "./Data"
import Modal from "./Modal"
import Link from "next/link"

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
    <div id="About" className="bg-gradient-to-b from-navy to-lightnavy p-5 flex-col" >
      <div div className="max-w-7xl mx-auto lg:h-[22rem] items-stretch lg:flex" >
        <div className="bg-gradient-to-b  from-transparent to-gold lg:bg-gradient-to-r lg:w-[81%] min-h-full text-center ">

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
      <div className="bg-gradient-to-b  from-transparent to-gold lg:bg-gradient-to-l lg:rounded-l-xl max-w-7xl mx-auto lg:h-[24rem] mt-5 text-center pb-3 items-stretch" >

        <h2>My Current Stack</h2>
        <div className="lg:flex">
          {
            stacks.map((stack) =>
              <StackCard stack={stack} />
            )
          }
        </div>
      </div>

      <h2 className="text-center" id="Projects">Projects</h2>

      <div className="grid lg:grid-cols-3 max-w-7xl mx-auto mt-5">
        {
          projects.slice(0, 3).map((project) =>
            <ProjectCard project={project} setShowModal={setShowModal} showModal={showModal} setModalData={setModalData} />
          )
        }

      </div>
      <div className="hidden" ref={projectFold}>
        <div className="grid lg:grid-cols-3 max-w-7xl mx-auto ">
          {
            projects.slice(3, 6).map((project) =>
              <ProjectCard project={project} setShowModal={setShowModal} showModal={showModal} setModalData={setModalData} />
            )
          }
        </div>
        <Link href="/projects" className="py-2 px-4 bg-white border-2 border-gold text-black rounded-lg mx-auto flex w-fit mb-3 font-bold text-xl">Check out all my awesome projects!</Link>
      </div>
      <div className="max-w-7xl w-full flex mx-auto">
        <Link href="blogTease" className=" lg:hidden w-full text-lg font-bold border-t rounded-t-lg text-center">All Projects</Link>
        <button className="hidden lg:inline w-full text-lg font-bold border-t rounded-t-lg text-center" onClick={ProjectShow} ref={projectBtn}>More</button>
      </div>


      <h2 id="Blogs" className="text-center">Blogs</h2>
      <div className="grid lg:grid-cols-3 max-w-7xl mx-auto mt-5">
        {
          blogs.slice(0, 3).map((blog) =>
            <BlogTeaseCard blog={blog} setShowModal={setShowModal} showModal={showModal} setModalData={setModalData} />
          )
        }
      </div>
      <div className="hidden" ref={blogFold}>
        <div className="grid lg:grid-cols-3 max-w-7xl mx-auto ">
          {
            blogs.slice(3, 6).map((blog) =>
              <BlogTeaseCard blog={blog} setShowModal={setShowModal} showModal={showModal} setModalData={setModalData} />
            )
          }
        </div>
        <Link href="/blogTease" className="py-2 px-4 bg-white border-2 border-gold text-black rounded-lg mx-auto flex w-fit mb-3 font-bold text-xl">Check out all my awesome blogs!</Link>
      </div>
      <div className="max-w-7xl w-full flex mx-auto">
        <Link href="blogTease" className=" lg:hidden w-full text-lg font-bold border-t rounded-t-lg text-center">All Blogs</Link>
        <button className="hidden lg:inline w-full text-lg font-bold border-t rounded-t-lg text-center" onClick={BlogShow} ref={blogBtn}>More</button>
      </div>
      <Modal isVisible={showModal} setShowModal={setShowModal} modalData={modalData} />
    </div >

  )
}

export default About