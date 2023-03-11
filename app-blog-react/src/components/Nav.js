import { NavLink } from "react-router-dom";

function Nav(props) {
    const { setView } = props;

    function handleClick(page) {
        setView(page)
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
                                <NavLink className={"text-decoration-none"} to="/">
                                    <button
                                        className="nav-link bg-transparent border-0 "
                                        onClick={() => handleClick("About")}>
                                        About
                                    </button>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className={"text-decoration-none"} to="/blogTease">
                                    <button
                                        className="nav-link bg-transparent border-0"
                                        onClick={() => handleClick("BlogTease")}
                                    >
                                        Blogs
                                    </button>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className={"text-decoration-none"} to="/#about">
                                    <button
                                        className="nav-link bg-transparent border-0"
                                        onClick={() => handleClick("Contact")}
                                    >
                                        Contact
                                    </button>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className={"text-decoration-none"} to="/projects">
                                    <button
                                        className="nav-link bg-transparent border-0"
                                        onClick={() => handleClick("Projects")}
                                    >
                                        Projects
                                    </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;