import { NavLink } from "react-router-dom";

function Nav(props) {
    const { setView, view } = props;

    function handleClick(page) {
        setView(page)
    }
//{view == "About" || view == "Contact" ? "" : ""}
    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-dark ">
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
                    <div className="collapse navbar-collapse"  id="navbarNav">
                        <ul className={ view == "About" || view == "Contact" ? "navbar-nav" :  "navbar-nav text-center d-flex mx-auto navbar-custom"}>
                            <li className="nav-item mx-3 ">
                                {/* change below href to scroll down page to about section */}
                                <NavLink className={"text-decoration-none"} to="/">
                                    <button
                                        className="nav-link bg-transparent border-0 "
                                        style={view == "About" || view == "Contact" ? { color:"rgba(255, 255, 255, 0.55)" } : {color:"black", fontWeight: "500"}}
                                        onClick={() => handleClick("About")}>
                                        About
                                    </button>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className={"text-decoration-none"} to="/blogTease">
                                    <button
                                        className="nav-link bg-transparent border-0"
                                        style={view == "About" || view == "Contact" ? { color:"rgba(255, 255, 255, 0.55)" } : {color:"black", fontWeight: "500"}}
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
                                        style={view == "About" || view == "Contact" ? { color:"rgba(255, 255, 255, 0.55)" } : {color:"black", fontWeight: "500"}}
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
                                        style={view == "About" || view == "Contact" ? { color:"rgba(255, 255, 255, 0.55)" } : {color:"black", fontWeight: "500"}}
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