function ProjectCard(props) {
    const { title, id, img, imgAlt, modal, projectLink, githubLink } = props;

    return (
        <>
            <div
                className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
                style={{ width: "18rem" }}
            >
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-text ">
                        <img
                            alt={imgAlt}
                            className="border"
                            id="project-teaser"
                            src={img}
                        />
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target={"#" + id}
                        >
                            More info
                        </button>
                        <div
                            className="modal fade"
                            id={id}
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={id}>
                                            {title}
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        />
                                    </div>
                                    <div className="modal-body">
                                        {modal}
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <a href={githubLink}>
                                            <button type="button" className="btn btn-primary">
                                                Project Repo!
                                            </button>
                                        </a>
                                        <a href={projectLink}>
                                            <button type="button" className="btn btn-primary">
                                                Check it out!
                                            </button>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        href={projectLink}
                        className="btn btn-primary card-link"
                    >
                        Check it out!
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectCard