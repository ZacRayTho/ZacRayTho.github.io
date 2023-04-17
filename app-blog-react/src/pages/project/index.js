import ProjectCard from "../../components/ProjectCard"
import { projects } from "../../components/Data"
import Modal from "../../components/Modal"
import { useState } from "react"
import Nav2 from "../../components/Nav2"

function Projects() {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)


  return (
    <div className="flex mx-auto justify-center">
      <Nav2 page="project"/>
      <div className="grid lg:grid-cols-3 max-w-7xl mt-14 w-3/4">
        {
          projects.map((project) =>
            <ProjectCard project={project} setShowModal={setShowModal} showModal={showModal} setModalData={setModalData} />
          )
        }
      </div>
      <Modal isVisible={showModal} setShowModal={setShowModal} modalData={modalData} />
    </div>

  )
}
export default Projects
