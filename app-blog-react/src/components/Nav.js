function Nav() {
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
                                <a className="nav-link" href="https://zacraytho.github.io/">
                                    About
                                </a>
                            </li>
                            <li className="nav-item mx-3">
                                <a
                                    className="nav-link"
                                    href="https://zacraytho.github.io/public/blog-teasers"
                                >
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item mx-3">
                                <a
                                    className="nav-link"
                                    href="https://zacraytho.github.io/public/contact-card"
                                >
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item mx-3">
                                <a
                                    className="nav-link"
                                    href="https://zacraytho.github.io/public/project-teasers"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;