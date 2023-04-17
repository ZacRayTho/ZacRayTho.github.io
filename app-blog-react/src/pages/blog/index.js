import BlogTeaseCard from "../../components/BlogTeaseCard"
import { blogs } from "../../components/Data";
import Nav2 from "../../components/Nav2";

function index() {

  return (
    <div>
      <Nav2 page="blog" />
      <div className="flex mx-auto justify-center" >
        <div className="grid lg:grid-cols-3 max-w-7xl mt-14 w-3/4">
          {
            blogs.map((blog) =>
              <BlogTeaseCard blog={blog} />
            )
          }
        </div>
      </div >
    </div>
  )
}

export default index