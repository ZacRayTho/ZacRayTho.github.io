import { NavLink } from "react-router-dom";

function BlogTeaseCard(props) {
    const { setBlog, setView, title, body, link } = props;

    function handleClick() {
        setView("Blog")
        setBlog(link)
    }

    return (
        <>
            <div
                className="card col-lg-3 col-md-4 col-sm-6 mb-4 mx-auto"
                style={{ width: "18rem" }}
            >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {body}
                    </p>
                    <NavLink className={"text-decoration-none"} to="/fullBlog">
                        <button
                            onClick={handleClick}
                            className="btn btn-primary card-link"
                        >
                            Read Full Post
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
export default BlogTeaseCard