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
                className="mx-auto border-custom w-72"
            >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {body}
                    </p>
                    <a to="/fullBlog">
                        <button
                            onClick={handleClick}
                            className="btn btn-primary card-link"
                        >
                            Read Full Post
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default BlogTeaseCard