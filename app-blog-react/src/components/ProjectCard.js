import Modal from "./Modal"

function ProjectCard({ project, setShowModal, showModal, setModalData }) {

    return (
        <div
            className="w-72 border-4 border-gold mb-4 mx-auto bg-mediumnavy rounded-lg px-2"
        >
            <div className="font-bold text-xl text-center py-1">{project.title}</div>
            <img
                alt={project.imgAlt}
                className="rounded mx-auto my-2"
                id="project-teaser"
                src={project.img}
            />
            <div className="flex space-x-2 py-2 justify-center">
                <button
                    className="rounded-lg bg-white text-black py-2 px-4"

                    onClick={() => {
                        setModalData(project)
                        setShowModal(true)
                    }
                    }
                >
                    More info
                </button>
                <a
                    href={project.projectLink}
                    className="rounded-lg bg-white text-black py-2 px-4"
                >
                    Check it out!
                </a>
            </div>
        </div>
    )
}

export default ProjectCard