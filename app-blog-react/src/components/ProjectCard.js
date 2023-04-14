import Modal from "./Modal"

function ProjectCard({ project, setShowModal, showModal, setModalData }) {

    return (
        <>
            <div
                className="w-72 border-custom mb-4 mx-auto"
            >
                <div className="card-body text-center">
                    <h5 className="card-title ">{project.title}</h5>
                    <div className="card-text ">
                        <img
                            alt={project.imgAlt}
                            className="border rounded mw-100"
                            id="project-teaser"
                            src={project.img}
                        />
                        <button
                            className="rounded-full bg-white text-black py-2 px-4"
                            
                            onClick={() => 
                                {setModalData(project.modal)
                                setShowModal(true)}
                            }
                        >
                            More info
                        </button>

                        {/* <div
                            className="modal fade"
                            id={project.id}
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={project.id}>
                                            {project.title}
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">
                                        {project.modal}
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <a href={project.githubLink}>
                                            <button type="button" className="btn btn-primary">
                                                Project Repo!
                                            </button>
                                        </a>
                                        <a href={project.projectLink}>
                                            <button type="button" className="btn btn-primary">
                                                Check it out!
                                            </button>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <a
                        href={project.projectLink}
                        className="rounded-full bg-white text-black py-2 px-4"
                    >
                        Check it out!
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard