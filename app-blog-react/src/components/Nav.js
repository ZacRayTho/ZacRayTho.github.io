function Nav(props) {
    const { setView } = props;

    function handleClick(page) {
        setView( page )
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item mx-3 ">
                                {/* change below href to scroll down page to about section */}
                                <button
                                    className="nav-link bg-transparent border-0"
                                    onClick={() => handleClick("About")}>
                                    About
                                </button>
                            </li>
                            <li className="nav-item mx-3">
                                <button
                                    className="nav-link bg-transparent border-0"
                                    onClick={() => handleClick("BlogTease")}
                                >
                                    Blogs
                                </button>
                            </li>
                            <li className="nav-item mx-3">
                                <button
                                    className="nav-link bg-transparent border-0"
                                    onClick={() => handleClick("Contact")}
                                >
                                    Contact
                                </button>
                            </li>
                            <li className="nav-item mx-3">
                                <button
                                    className="nav-link bg-transparent border-0"
                                    onClick={() => handleClick("Projects")}
                                >
                                    Projects
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;