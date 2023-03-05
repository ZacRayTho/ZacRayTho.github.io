function BlogTeaseCard(props) {
    const { title, body, link} = props;

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
                    <a
                        href={link}
                        className="btn btn-primary card-link"
                    >
                        Read Full Post
                    </a>
                </div>
            </div>
        </>
    )
}
export default BlogTeaseCard